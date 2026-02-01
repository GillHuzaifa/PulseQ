# Send Demo Bookings to Your Gmail

Submissions from **Contact (Book a Demo)** and **Partners (Become a Partner)** are sent to **huzaifagill283@gmail.com** using Google Apps Script. Follow these steps once.

## Step 1: Create the script

1. Go to [script.google.com](https://script.google.com) and sign in with **huzaifagill283@gmail.com**.
2. Click **New project**.
3. Delete any sample code and paste the contents of **google-apps-script.gs** (the file in this folder).
4. Save (Ctrl+S). Name the project e.g. "PulseQ Form".

## Step 2: Deploy as web app

1. Click **Deploy** → **New deployment**.
2. Click the gear icon next to "Select type" → **Web app**.
3. Set:
   - **Description:** PulseQ form (or anything).
   - **Execute as:** Me (your email).
   - **Who has access:** Anyone.
4. Click **Deploy**. Authorize when asked (choose your Gmail account, then "Advanced" → "Go to PulseQ Form" → Allow).
5. Copy the **Web app URL** (looks like `https://script.google.com/macros/s/AKfycbx.../exec`).

## Step 3: Add the URL to your site

1. Open **config.js** in this project.
2. Replace the empty string with your Web app URL:

```js
window.PULSEQ_FORM_URL = 'https://script.google.com/macros/s/YOUR_ID_HERE/exec';
```

3. Save. Demo and partner form submissions will now be sent to **huzaifagill283@gmail.com** and the visitor will see a thank-you page.

## Optional: change the thank-you link

In the script, the line with `Back to PulseQ` uses `/contact.html`. If your site lives at a different domain, edit that link in **google-apps-script.gs** after you deploy (Deploy → Manage deployments → Edit → Version → New version, then update the script and redeploy).
