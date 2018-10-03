var SPREADSHEET_FILE_ID = "spreadsheets";
var SHEET_NAME_TO_WRITE_DATA_TO = "Sheet1";
var folderId = "folders";
var ADD_TIMESTAMP = true;
var ADD_IMAGE_URLS_TO_SHEET = true;

function doGet() {
  var template = HtmlService.createTemplateFromFile('index');
  return template.evaluate()
      .setTitle('Limuny Application Form')
      .setSandboxMode(HtmlService.SandboxMode.IFRAME);
};
