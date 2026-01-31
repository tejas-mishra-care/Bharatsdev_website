# GitHub Repository Setup Script
# Run this script after creating a repository on GitHub

Write-Host "`n🚀 BharatsDev Website - GitHub Setup`n" -ForegroundColor Green

# Check if git is initialized
if (-not (Test-Path .git)) {
    Write-Host "❌ Git not initialized. Initializing..." -ForegroundColor Red
    git init
    git branch -M main
}

# Check current remote
$currentRemote = git remote get-url origin 2>$null
if ($currentRemote) {
    Write-Host "Current remote: $currentRemote" -ForegroundColor Yellow
    $remove = Read-Host "Remove existing remote? (y/n)"
    if ($remove -eq "y") {
        git remote remove origin
        Write-Host "✅ Removed old remote" -ForegroundColor Green
    }
}

# Get repository URL
Write-Host "`n📝 Enter your GitHub repository URL:" -ForegroundColor Cyan
Write-Host "Example: https://github.com/yourusername/Bharatsdev_website.git" -ForegroundColor Gray
$repoUrl = Read-Host "Repository URL"

if ([string]::IsNullOrWhiteSpace($repoUrl)) {
    Write-Host "❌ Repository URL is required!" -ForegroundColor Red
    exit 1
}

# Add remote
Write-Host "`n🔗 Adding remote repository..." -ForegroundColor Yellow
git remote add origin $repoUrl

# Check if there are uncommitted changes
$status = git status --porcelain
if ($status) {
    Write-Host "`n📦 Staging all changes..." -ForegroundColor Yellow
    git add -A
    
    Write-Host "💾 Committing changes..." -ForegroundColor Yellow
    git commit -m "Complete website: Modern UI/UX, all pages, bug fixes"
}

# Push to GitHub
Write-Host "`n🚀 Pushing to GitHub..." -ForegroundColor Yellow
Write-Host "You may be prompted for GitHub credentials." -ForegroundColor Gray

try {
    git push -u origin main
    Write-Host "`n✅ Successfully pushed to GitHub!" -ForegroundColor Green
    Write-Host "Repository: $repoUrl" -ForegroundColor Cyan
} catch {
    Write-Host "`n❌ Error pushing to GitHub:" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
    Write-Host "`n💡 Troubleshooting:" -ForegroundColor Yellow
    Write-Host "1. Make sure the repository exists on GitHub" -ForegroundColor Gray
    Write-Host "2. Check your GitHub credentials" -ForegroundColor Gray
    Write-Host "3. Try: git push -u origin main --force" -ForegroundColor Gray
}

Write-Host "`n✨ Setup complete!`n" -ForegroundColor Green
