// ==========================================
// GOOGLE APPS SCRIPT - La Combi Bar Reservas
// ==========================================
// Instrucciones:
// 1. Abre tu Google Sheets
// 2. Ve a Extensiones > Apps Script
// 3. Copia este código y guarda
// 4. Implementa > Desplegar como API ejecutable
// 5. Configura quien tiene acceso: "Cualquier persona"
// 6. Copia la URL del webhook y ponla en .env como GOOGLE_SCRIPT_URL
// 7. Comparte la hoja con el email del proyecto de Apps Script

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  const data = JSON.parse(e.postData.contents);

  const timestamp = new Date().toLocaleString('es-CL');
  const row = [
    timestamp,
    data.nombre,
    data.email,
    data.telefono,
    data.fecha,
    data.hora,
    data.personas,
    data.comentarios || '',
    'Pendiente'
  ];

  sheet.appendRow(row);

  return ContentService
    .createTextOutput(JSON.stringify({ status: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok', message: 'API funcionando' }))
    .setMimeType(ContentService.MimeType.JSON);
}