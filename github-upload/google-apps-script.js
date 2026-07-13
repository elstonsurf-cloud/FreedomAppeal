const sheetName = "Orders";

function doPost(event) {
  const sheet = getOrdersSheet();
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

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
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
