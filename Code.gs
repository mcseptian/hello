var SPREADSHEET_FILE_ID = "XXXXX";
var SHEET_NAME_TO_WRITE_DATA_TO = "XXXXX";
var FOLDER_ID = "XXXXX";
var ADD_TIMESTAMP = true;
var ADD_IMAGE_URLS_TO_SHEET = true;

function doGet() {
  var template = HtmlService.createTemplateFromFile('index');
  
  return template.evaluate()
      .setTitle('Bootstrap Form')
      .setSandboxMode(HtmlService.SandboxMode.IFRAME);
};