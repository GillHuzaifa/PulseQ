# Send Demo Bookings to Your Gmail (No Google Script)

Use **Formspree** so you never need to open script.google.com. Submissions go to **huzaifagill283@gmail.com**.

---

## Step 1: Go to Formspree

1. Open your browser.
2. Go to: **https://formspree.io**
3. Click **“Get started”** or **“Sign up”**.

---

## Step 2: Sign up with your Gmail

1. Sign up with **huzaifagill283@gmail.com**.
2. Confirm your email if Formspree asks.

---

## Step 3: Create a new form

1. Click **“New form”** (or **“Create form”**).
2. **Form name:** e.g. `PulseQ contact`.
3. **Email:** make sure **huzaifagill283@gmail.com** is the email where you want to receive submissions.
4. Click **Create** (or **Submit**).

---

## Step 4: Copy your form URL

1. Formspree will show your form’s **endpoint URL**, like:
   ```text
   https://formspree.io/f/xyzwabcd
   ```
2. Click **Copy** (or select and copy the URL).

---

## Step 5: Paste the URL in your PulseQ site

1. Open your PulseQ project in Cursor.
2. Open **config.js**.
3. Paste the URL between the quotes:
   ```js
   window.PULSEQ_FORM_URL = 'https://formspree.io/f/xyzwabcd';
   ```
   (Use your real URL from Formspree.)
4. Save **config.js** (Ctrl+S).

---

## Step 6: Test

1. Open your PulseQ site (e.g. http://localhost:3000).
2. Go to **Contact** → fill the “Book a Demo” form → click **Send**.
3. You should be taken to a page that says **“Thank you”** in big text.
4. Check **huzaifagill283@gmail.com** — you should see the form submission.

---

## Done

- You do **not** use script.google.com or Google Drive.
- Everything is set on **formspree.io** and in **config.js**.
- Both **Contact (Book a Demo)** and **Partners (Become a Partner)** use the same Formspree form and send to your Gmail.
