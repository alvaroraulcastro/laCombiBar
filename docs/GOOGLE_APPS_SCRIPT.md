// ==========================================
// GOOGLE APPS SCRIPT - La Combi Bar Reservas
// ==========================================
//
// INSTRUCCIONES DE CONFIGURACION:
//
// 1. CREAR GOOGLE SHEET
//    - Crea una nueva hoja de Google Sheets
//    - Nombra la primera pestana como "Reservas" (o la que prefieras, luego actualiza en el codigo)
//
// 2. ABRIR APPS SCRIPT
//    - En tu Google Sheet, ve a Extensiones > Apps Script
//    - Se abrira el editor de codigo
//
// 3. COPIAR ESTE CODIGO
//    - Elimina cualquier codigo existente
//    - Copia todo este codigo y pegalo en el editor
//
// 4. GUARDAR Y DESPLEGAR
//    - Haz clic en el icono de Guardar (disco)
//    - Ve a Implementar > Nueva implementacion
//    - Tipo: Ejecutable de API
//    - Quien tiene acceso: Cualquier persona
//    - Haz clic en Implementar
//    - Copia la URL del webhook que se genera (formato: https://script.google.com/macros/s/.../exec)
//
// 5. CONFIGURAR VARIABLE DE ENTORNO
//    - En tu proyecto Next.js, agrega al archivo .env:
//      GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/TU_ID_DEPLOY/exec
//
// 6. COMPARTIR HOJA
//    - Comparte la hoja de Google Sheet con el email de tu proyecto de Apps Script
//    - El email lo encuentras en: Extensiones > Apps Script > Configuracion del proyecto > ID del proyecto
//
// ==========================================

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Reservas');

    if (!sheet) {
      const ss = SpreadsheetApp.getActiveSpreadsheet();
      const newSheet = ss.insertSheet('Reservas');
      newSheet.appendRow([
        'Timestamp',
        'Nombre',
        'Email',
        'Telefono',
        'Fecha',
        'Hora',
        'Personas',
        'Comentarios',
        'Estado'
      ]);
    }

    const data = JSON.parse(e.postData.contents);

    if (!data.nombre || !data.email || !data.fecha || !data.hora) {
      return ContentService
        .createTextOutput(JSON.stringify({ success: false, error: 'Faltan campos requeridos' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    const timestamp = new Date();
    const row = [
      timestamp,
      data.nombre,
      data.email,
      data.telefono || '',
      data.fecha,
      data.hora,
      data.personas || '',
      data.comentarios || '',
      'Pendiente'
    ];

    sheet.appendRow(row);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok', message: 'API de Reservas funcionando' }))
    .setMimeType(ContentService.MimeType.JSON);
}