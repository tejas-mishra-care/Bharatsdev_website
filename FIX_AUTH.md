# Fix GitHub Authentication Issue

## 🔴 Problem
You're authenticated as `tejasmishra-dev` but trying to push to `tejas-mishra-care/Bharatsdev_website`.

## ✅ Solutions

### Option 1: Use Your Current Account (Easiest)

Create the repository under your current account (`tejasmishra-dev`):

```powershell
# Remove current remote
git remote remove origin

# Add remote with YOUR account
git remote add origin https://github.com/tejasmishra-dev/Bharatsdev_website.git

# Create the repo on GitHub first at: https://github.com/new
# Then push:
git push -u origin main
```

### Option 2: Use Personal Access Token

If you need to push to `tejas-mishra-care` account:

1. **Create Personal Access Token**:
   - Go to: https://github.com/settings/tokens
   - Click "Generate new token (classic)"
   - Name: "BDWEB Push"
   - Select scopes: `repo` (full control)
   - Click "Generate token"
   - **Copy the token** (you won't see it again!)

2. **Use token for authentication**:
   ```powershell
   # When prompted for password, use the token instead
   git push -u origin main
   # Username: tejas-mishra-care
   # Password: [paste your token here]
   ```

3. **Or embed in URL** (less secure):
   ```powershell
   git remote set-url origin https://YOUR_TOKEN@github.com/tejas-mishra-care/Bharatsdev_website.git
   git push -u origin main
   ```

### Option 3: Use SSH (Recommended for Long-term)

1. **Generate SSH key** (if you don't have one):
   ```powershell
   ssh-keygen -t ed25519 -C "your_email@example.com"
   ```

2. **Add SSH key to GitHub**:
   - Copy your public key: `cat ~/.ssh/id_ed25519.pub`
   - Go to: https://github.com/settings/keys
   - Click "New SSH key"
   - Paste and save

3. **Change remote to SSH**:
   ```powershell
   git remote set-url origin git@github.com:tejas-mishra-care/Bharatsdev_website.git
   git push -u origin main
   ```

### Option 4: Switch GitHub Account

If `tejas-mishra-care` is an organization you have access to:

1. **Log out of current account**:
   ```powershell
   # Clear cached credentials
   git credential-manager-core erase
   # Or on Windows:
   git credential reject https://github.com
   ```

2. **Log in with correct account** when prompted during push

## 🎯 Quick Fix (Recommended)

**Use your current account** - it's the simplest:

```powershell
# Remove old remote
git remote remove origin

# Add with YOUR username
git remote add origin https://github.com/tejasmishra-dev/Bharatsdev_website.git

# Make sure repo exists at: https://github.com/tejasmishra-dev/Bharatsdev_website
# Then push:
git push -u origin main
```

## 📝 Current Remote

Your current remote is set to:
```
https://github.com/tejas-mishra-care/Bharatsdev_website.git
```

Change it to match your authenticated account!
