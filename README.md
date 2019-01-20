# Form Penerimaan Operator Baru Limuny NetCafe

## USAGE

Dibutuhkan (Google Apps Script)[https://script.google.com/home] untuk menggunakan script ini.

Buatlah file dengan nama sesuai kode sumber:

1. File Script 
  - Code.gs
  - Process.gs
2. File Html (page)
  - index.html
  - body.html
  - feedback.html
3. File Html (style)
  - main_css.html
  - form_css.html
  - print_css.html
3. File Html (javascript)
  - form_js.html
  - spinner_js.html
  
Ubah nilai variabel SPREADSHEET_FILE_ID pada file Code.gs dengan kode yang terdapat pada alamat url file spreadsheets:
`https://docs.google.com/spreadsheets/d/XXXX/edit`

Ubah nilai variabel SHEET_NAME_TO_WRITE_DATA_TO pada file Code.gs dengan nama Sheet di file spreadsheets:
Secara default namanya *Sheet1*

Ubah nilai variabel FOLDER_ID pada file Code.gs dengan  dengan kode yang terdapat pada alamat url folder:
`https://drive.google.com/drive/folders/XXXX`

Publish dengan pilihan *Deploy as web app* dan ubah nilai *Who has access to the app:* menjadi *Anyone, even anonymous*

Form sudah dapat diakses menggunakan *Current web app URL:* dengan format: 
`https://script.google.com/macros/s/XXXX/exec`

## CREDIT

I forgot how and where I got this code. It's an alternative way of using GAS (Google Apps Script). Used for POB (Penerimaan Operator Baru) that need some form with Upload Function. At those time Google Forms can't do the job (it require login for the uploader to use the function).
