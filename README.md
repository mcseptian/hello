# Form Penerimaan Operator Baru Limuny NetCafe

## USAGE

Dibutuhkan [https://script.google.com/home](Google Apps Script) untuk menggunakan script ini.

1. Buatlah file dengan nama sesuai kode sumber:

    - File Script 
      - Code.gs
      - Process.gs
    - File Html (page)
      - index.html
      - body.html
      - feedback.html
    - File Html (style)
      - main_css.html
      - form_css.html
      - print_css.html
    - File Html (javascript)
      - form_js.html
      - spinner_js.html
  
2. Ubah nilai variabel SPREADSHEET_FILE_ID pada file Code.gs dengan kode yang terdapat pada alamat url file spreadsheets:
`https://docs.google.com/spreadsheets/d/XXXX/edit`

3. Ubah nilai variabel SHEET_NAME_TO_WRITE_DATA_TO pada file Code.gs dengan nama Sheet di file spreadsheets:
Secara default namanya *Sheet1*

4. Ubah nilai variabel FOLDER_ID pada file Code.gs dengan  dengan kode yang terdapat pada alamat url folder:
`https://drive.google.com/drive/folders/XXXX`

5. Publish dengan pilihan *Deploy as web app* dan ubah nilai *Who has access to the app:* menjadi *Anyone, even anonymous*

6. Form sudah dapat diakses menggunakan *Current web app URL:* dengan format: 
`https://script.google.com/macros/s/XXXX/exec`

7. Kode `XXXX` yang dipakai dalam script ini dihasilkan oleh API yang otomatis berubah setiap inisialisasi, ubah sebelum menggunakan.

## CREDIT

I forgot how and where I got this code. It's an alternative way of using GAS (Google Apps Script). Used for POB (Penerimaan Operator Baru) that need some form with Upload Function. At those time Google Forms can't do the job (it require login for the uploader to use the function).
