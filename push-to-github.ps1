# Quick GitHub Push Script
# Run this AFTER creating the repository on GitHub

Write-Host "`n🚀 Pushing BharatsDev Website to GitHub`n" -ForegroundColor Green

# Check if remote exists
$remote = git remote get-url origin 2>$null
if ($remote) {
    Write-Host "Current remote: $remote" -ForegroundColor Cyan
} else {
    Write-Host "No remote found. Adding default..." -ForegroundColor Yellow
    git remote add origin https://github.com/tejas-mishra-care/BDWEB-main.git
}

# Check if there are uncommitted changes
$status = git status --porcelain
if ($status) {
    Write-Host "`n📦 Staging uncommitted changes..." -ForegroundColor Yellow
    git add -A
    git commit -m "Update: Latest changes"
}

# Push to GitHub
Write-Host "`n⬆️  Pushing to GitHub..." -ForegroundColor Yellow
Write-Host "Repository: https://github.com/tejas-mishra-care/BDWEB-main.git" -ForegroundColor Gray
Write-Host ""

try {
    git push -u origin main
    if ($LASTEXITCODE -eq 0) {
        Write-Host "`n✅ Successfully pushed to GitHub!" -ForegroundColor Green
        Write-Host "View your repository: https://github.com/tejas-mishra-care/BDWEB-main" -ForegroundColor Cyan
    }
} catch {
    Write-Host "`n❌ Error: Repository not found on GitHub" -ForegroundColor Red
    Write-Host "`n📝 Please create the repository first:" -ForegroundColor Yellow
    Write-Host "   1. Go to: https://github.com/new" -ForegroundColor White
    Write-Host "   2. Repository name: BDWEB-main" -ForegroundColor White
    Write-Host "   3. Owner: tejas-mishra-care" -ForegroundColor White
    Write-Host "   4. DO NOT initialize with README" -ForegroundColor White
    Write-Host "   5. Click 'Create repository'" -ForegroundColor White
    Write-Host "   6. Run this script again" -ForegroundColor White
}

Write-Host ""
