# PowerShell script to setup Git repository
$projectPath = "D:\CÓDIGOS\Prime\Prime SDR"

# Change to project directory
Set-Location $projectPath

# Initialize Git repository
git init

# Add all files
git add .

# Make initial commit
git commit -m "feat: initial commit - Prime SDR website optimized for Vercel"

# Set main branch
git branch -M main

# Add remote origin
git remote add origin https://github.com/haast7/primesdr.git

# Push to remote repository
git push -u origin main

