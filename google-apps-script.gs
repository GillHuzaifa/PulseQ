/**
 * PulseQ – Form to Gmail (huzaifagill283@gmail.com)
 * Deploy as Web app: Execute as Me, Who has access: Anyone
 */
function doPost(e) {
  var params = e.parameter;
  var name = params.name || params.org || '—';
  var email = params.email || '—';
  var org = params.org || '—';
  var message = params.message || '—';

  var subject = 'PulseQ: Demo / Contact from ' + (params.name ? params.name : params.org);
  var body = 'Name: ' + name + '\nEmail: ' + email + '\nOrganization: ' + org + '\n\nMessage:\n' + message;

  try {
    MailApp.sendEmail('huzaifagill283@gmail.com', subject, body);
  } catch (err) {
    return ContentService.createTextOutput(
      '<!DOCTYPE html><html><body style="font-family:sans-serif;text-align:center;padding:3rem;"><p>Something went wrong. Please try again or contact us via WhatsApp.</p><a href="/contact.html">Back to PulseQ</a></body></html>'
    ).setMimeType(ContentService.MimeType.HTML);
  }

  var html = '<title>Thank you</title></head><body style="font-family:sans-serif;text-align:center;padding:3rem;margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;"><h1 style="font-size:4rem;margin:0;">Thank you</h1></body></html>';
  return ContentService.createTextOutput(html).setMimeType(ContentService.MimeType.HTML);