# Deploy PulseQ to your GitHub - run this in PowerShell
# Step 1: When browser opens, enter the code shown and click "Authorize"
# Step 2: Run this script again - it will create the repo and push

$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")
Set-Location $PSScriptRoot

if (-not (Get-Command gh -ErrorAction SilentlyContinue)) {
    Write-Host "GitHub CLI not found. Install from: https://cli.github.com/"
    exit 1
}

$auth = gh auth status 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host "=== LOG IN TO GITHUB ===" -ForegroundColor Yellow
    Write-Host "A browser will open. Enter the code shown below and click Authorize."
    Write-Host "Then run this script again to push." -ForegroundColor Yellow
    gh auth login --web --hostname github.com
    exit 0
}

Write-Host "Creating repo PulseQ and pushing..." -ForegroundColor Green
gh repo create PulseQ --public --source=. --remote=origin --push
if ($LASTEXITCODE -eq 0) {
    $user = gh api user -q .login 2>$null
    Write-Host "Done! Repo: https://github.com/$user/PulseQ" -ForegroundColor Green
    Write-Host "To host the site: Repo -> Settings -> Pages -> Deploy from branch -> main -> Save"
}
