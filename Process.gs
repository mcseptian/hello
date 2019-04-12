function processForm(theForm) {
    var allTheData, doc, doc2, fileBlob, fileBlob2, folder, folders, name, sheet, targetRange, template;
    var name, birth, address, phone, programme, faculty, year, gpa, salesman, myFile1, position;
    var fileUrl, fileUrl2;
    var arrayOfNamesToWriteToSS, i, L, outerArray, innerArray, thisKey, TS;
    var applicant = theForm.name.toUpperCase();
    arrayOfNamesToWriteToSS = ['name', 'birth', 'address', 'phone', 'programme', 'study', 'faculty', 'year', 'gpa', 'position', 'myFile1'];
    L = arrayOfNamesToWriteToSS.length;

    fileBlob = theForm.myFile1;
    fileBlob2 = theForm.myFile2;
    
    Logger.log(fileBlob)
    Logger.log(fileBlob2)

    if (folderId) {
        folders = DriveApp.getFolderById(folderId);
        folder = folders.createFolder(applicant)
    } else {
        folder = DriveApp.getRootFolder();
    };

    if (fileBlob.name) { 
        doc = folder.createFile(fileBlob);
        fileUrl = doc.getUrl(); };
    if (fileBlob2.name) {
        doc2 = folder.createFile(fileBlob2);
        fileUrl2 = doc2.getUrl();
    }

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

    template = template.replace('Name', applicant).replace('Code', fileUrl.substr(55,4).toUpperCase()).replace('Time', new Date().toString());

    if (FILE_URLS_TO_SHEET) {
        if (fileUrl) innerArray.push(fileUrl);
        if (fileUrl2) innerArray.push(fileUrl2);
    };

    if (!SPREADSHEET_FILE_ID) {
        return ["Error: Spreadsheet ID not set", template]
    };

    sheet = SpreadsheetApp.openById(SPREADSHEET_FILE_ID).getSheetByName(SHEET_NAME_TO_WRITE_DATA_TO);
    sheet.appendRow(innerArray);

    return template;
};
