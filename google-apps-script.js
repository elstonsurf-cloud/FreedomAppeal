const sheetName = "Orders";

function doPost(event) {
  const sheet = getOrdersSheet();
  try {
    const order = JSON.parse(event.postData.contents || "{}");
    const contact = order.contact || {};
    const items = Array.isArray(order.items) ? order.items : [];

    sheet.appendRow([
      new Date(),
      contact.name || "",
      contact.email || "",
      contact.phone || "",
      Number(order.estimatedTotal || 0),
      items.map(formatItem).join("\n\n"),
      order.summary || ""
    ]);

    return jsonResponse({ ok: true });
  } catch (error) {
    sheet.appendRow([
      new Date(),
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
  return jsonResponse({ ok: true, message: "Order logger is ready." });
}

function getOrdersSheet() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(sheetName);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(sheetName);
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      "Submitted",
      "Name",
      "Email",
      "Phone",
      "Estimated Total",
      "Items",
      "Full Summary"
    ]);
  }

  return sheet;
}

function formatItem(item) {
  const options = Array.isArray(item.options)
    ? item.options.map((option) => `${option.name}: ${option.value}`).join(", ")
    : "";

  return [
    `${item.quantity || 0} x ${item.name || ""}`,
    `Unit: $${Number(item.unitPrice || 0).toFixed(2)}`,
    `Line: $${Number(item.lineTotal || 0).toFixed(2)}`,
    options
  ].filter(Boolean).join("\n");
}

function jsonResponse(value) {
  return ContentService
    .createTextOutput(JSON.stringify(value))
    .setMimeType(ContentService.MimeType.JSON);
}
