@echo off
cd /d "D:\CÓDIGOS\Prime\Prime SDR"
git init
git add .
git commit -m "feat: initial commit - Prime SDR website optimized for Vercel"
git branch -M main
git remote add origin https://github.com/haast7/primesdr.git
git push -u origin main

