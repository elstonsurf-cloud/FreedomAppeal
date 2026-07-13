const ordersSheetName = "Orders";
const orderItemsSheetName = "Order Items";

function doPost(event) {
  const ordersSheet = getOrdersSheet();
  const orderItemsSheet = getOrderItemsSheet();
  try {
    const order = JSON.parse(event.postData.contents || "{}");
    const contact = order.contact || {};
    const items = Array.isArray(order.items) ? order.items : [];
    const submittedAt = new Date();
    const orderId = Utilities.getUuid();

    ordersSheet.appendRow([
      submittedAt,
      orderId,
      contact.name || "",
      contact.email || "",
      contact.phone || "",
      Number(order.estimatedTotal || 0),
      items.length,
      order.summary || ""
    ]);

    if (contact.sendCopy && contact.email) {
      MailApp.sendEmail({
        to: contact.email,
        subject: "Your shirt order request",
        body: [
          "Thanks for your shirt order request.",
          "",
          order.summary || "",
          "",
          "Joey will follow up with you."
        ].join("\n")
      });
    }

    items.forEach((item, index) => {
      const options = optionsToColumns(item.options);
      orderItemsSheet.appendRow([
        submittedAt,
        orderId,
        index + 1,
        contact.name || "",
        contact.email || "",
        contact.phone || "",
        item.name || "",
        Number(item.quantity || 0),
        Number(item.unitPrice || 0),
        Number(item.lineTotal || 0),
        options.Color,
        options.Size,
        options.Type,
        options.Fit,
        formatOptions(item.options),
        item.imageUrl || ""
      ]);
    });

    return jsonResponse({ ok: true, orderId, itemCount: items.length });
  } catch (error) {
    ordersSheet.appendRow([
      new Date(),
      "",
      "SCRIPT ERROR",
      "",
      "",
      "",
      "",
      String(error && error.message ? error.message : error)
    ]);

    return jsonResponse({ ok: false, error: String(error) });
  }
}

function doGet() {
  getOrdersSheet();
  getOrderItemsSheet();
  return jsonResponse({ ok: true, message: "Order logger is ready." });
}

function getOrdersSheet() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(ordersSheetName);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(ordersSheetName);
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      "Submitted",
      "Order ID",
      "Name",
      "Email",
      "Phone",
      "Estimated Total",
      "Item Count",
      "Full Summary"
    ]);
  }

  return sheet;
}

function getOrderItemsSheet() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(orderItemsSheetName);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(orderItemsSheetName);
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      "Submitted",
      "Order ID",
      "Line",
      "Name",
      "Email",
      "Phone",
      "Item",
      "Quantity",
      "Unit Price",
      "Line Total",
      "Color",
      "Size",
      "Type",
      "Fit",
      "All Options",
      "Image URL"
    ]);
  }

  return sheet;
}

function optionsToColumns(options) {
  const columns = {
    Color: "",
    Size: "",
    Type: "",
    Fit: ""
  };

  if (!Array.isArray(options)) return columns;

  options.forEach((option) => {
    const name = String(option.name || "").toLowerCase();
    const value = option.value || "";
    if (name.includes("color")) columns.Color = value;
    if (name.includes("size")) columns.Size = value;
    if (name.includes("type")) columns.Type = value;
    if (name.includes("fit")) columns.Fit = value;
  });

  return columns;
}

function formatOptions(options) {
  return Array.isArray(options)
    ? options.map((option) => `${option.name}: ${option.value}`).join(", ")
    : "";
}

function jsonResponse(value) {
  return ContentService
    .createTextOutput(JSON.stringify(value))
    .setMimeType(ContentService.MimeType.JSON);
}
