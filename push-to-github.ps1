# Run this script to create the PulseQ repo on GitHub and push (one time).
# You will be asked to log in to GitHub in the browser if not already logged in.

$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

# Refresh PATH so gh is found after install
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")

# Check if logged in
$auth = gh auth status 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host "Log in to GitHub (browser will open). Complete the steps, then run this script again."
    gh auth login --web --hostname github.com
    exit 0
}

# Create repo and push
Write-Host "Creating GitHub repo 'PulseQ' and pushing..."
gh repo create PulseQ --public --source=. --remote=origin --push
Write-Host "Done. Your repo: https://github.com/$(gh api user -q .login)/PulseQ"
Write-Host "To enable GitHub Pages: Repo -> Settings -> Pages -> Deploy from branch -> main -> Save"
