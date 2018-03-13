var SPREADSHEET_FILE_ID = "XXXX";
var SHEET_NAME_TO_WRITE_DATA_TO = "XXXX";
var FOLDER_ID = "XXXX";
var ADD_TIMESTAMP = true;
var ADD_IMAGE_URLS_TO_SHEET = true;

function doGet() {
  var template = HtmlService.createTemplateFromFile('index');

  // Build and return HTML in IFRAME sandbox mode.
  return template.evaluate()
      .setTitle('Tes Bootstrap 4 Form')
      .setSandboxMode(HtmlService.SandboxMode.IFRAME);
};