function processForm(theForm) {
    var allTheData, doc, fileBlob, folder, folders, name, sheet, targetRange, template;
    var name, birth, address, phone, programme, faculty, year, gpa, salesman, myFile1;
    var fileUrl;
    var arrayOfNamesToWriteToSS, i, L, outerArray, innerArray, thisKey, TS;
    
    arrayOfNamesToWriteToSS = ['name', 'birth', 'address', 'phone', 'programme', 'study', 'faculty', 'year', 'gpa', 'myFile1'];
    L = arrayOfNamesToWriteToSS.length;

    fileBlob = theForm.myFile1;
    
    var applicant = theForm.name.toUpperCase();

    Logger.log(fileBlob)

    if (folderId) {
        folders = DriveApp.getFolderById(folderId);
        folder = folders.createFolder(applicant)
    } else {
        folder = DriveApp.getRootFolder();
    };

    if (fileBlob.name) { doc = folder.createFile(fileBlob);
        fileUrl = doc.getUrl(); };

    template = HtmlService.createHtmlOutputFromFile('feedback').getContent();

    allTheData = "";
    innerArray = [];

    if (ADD_TIMESTAMP) {
        TS = new Date();
        innerArray.push(TS);
    };

    for (i = 0; i < L; i += 1) {
        thisKey = arrayOfNamesToWriteToSS[i];
        allTheData = allTheData + theForm[thisKey] + " <br>";
        innerArray.push(theForm[thisKey]);
    };

    outerArray = [];
    outerArray.push(innerArray);

    template = template.replace('Name', applicant).replace('nulla', fileUrl.substr(55,5).toUpperCase());

    if (ADD_IMAGE_URLS_TO_SHEET) {
        if (fileUrl) innerArray.push(fileUrl);
    };

    if (!SPREADSHEET_FILE_ID) {
        return ['err', 'No Spreadsheet ID', template] };

    sheet = SpreadsheetApp.openById(SPREADSHEET_FILE_ID).getSheetByName(SHEET_NAME_TO_WRITE_DATA_TO);
    sheet.appendRow(innerArray);

    return template;
};
