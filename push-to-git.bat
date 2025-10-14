@echo off
cd /d "D:\CÓDIGOS\Prime\Prime SDR"
git add .
git commit -m "feat: Add new pages - Contact, Privacy Policy, Terms of Use, Cookies Policy, and About page with hero gradient background"
git remote add origin https://github.com/haast7/primesdr.git
git branch -M main
git push -u origin main
pause





