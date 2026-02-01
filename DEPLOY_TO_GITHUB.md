# Deploy PulseQ to GitHub

Follow these steps in your **terminal** (PowerShell or Command Prompt) to push the PulseQ website to your GitHub.

---

## Step 1: Open terminal in the PulseQ folder

1. Open **PowerShell** or **Command Prompt**.
2. Go to your project folder:
   ```powershell
   cd "C:\Users\huzai\OneDrive\Desktop\PulseQ"
   ```

---

## Step 2: Initialize Git (if not already)

```powershell
git init
```

---

## Step 3: Add all files and commit

```powershell
git add .
git commit -m "Initial commit: PulseQ website - Skip the Line"
```

---

## Step 4: Create a repo on GitHub

1. Go to **https://github.com/new**
2. Sign in if needed.
3. **Repository name:** `PulseQ` (or any name you like, e.g. `pulseq-website`)
4. **Description (optional):** Skip the Line – Smart queues for hospitals
5. Choose **Public**.
6. **Do not** check "Add a README" (you already have one).
7. Click **Create repository**.

---

## Step 5: Connect and push

GitHub will show you commands. Use these (replace `YOUR_USERNAME` with your GitHub username):

```powershell
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/PulseQ.git
git push -u origin main
```

**Example:** If your username is `huzaifagill`, then:
```powershell
git remote add origin https://github.com/huzaifagill/PulseQ.git
```

---

## Step 6: Enable GitHub Pages (optional – to host the site)

1. On your repo page, go to **Settings** → **Pages** (left sidebar).
2. Under **Source**, choose **Deploy from a branch**.
3. Under **Branch**, select **main** and **/ (root)**.
4. Click **Save**.
5. After a minute or two, your site will be at:  
   **https://YOUR_USERNAME.github.io/PulseQ/**

---

## If you already have a GitHub repo

If you created the repo with a README or .gitignore on GitHub, run this before pushing:

```powershell
git pull origin main --allow-unrelated-histories
git push -u origin main
```

---

## Troubleshooting

- **"Permission denied" or "config.lock"**  
  Close any other program (VS Code, Cursor, another terminal) that might be using the PulseQ folder, then run the commands again from a **new** terminal.

- **Git asks for username/password**  
  Use a **Personal Access Token** instead of your password: GitHub → Settings → Developer settings → Personal access tokens → Generate new token. Use the token as the password when `git push` asks.

- **"remote origin already exists"**  
  Run: `git remote remove origin`  
  Then run the `git remote add origin ...` command again with your repo URL.
