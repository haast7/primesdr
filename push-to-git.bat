@echo off
cd /d "D:\CÓDIGOS\Prime\Prime SDR"
git add .
git commit -m "feat: Add complete Resources page with tools, guides, videos, cases, comparisons and glossary - removed templates section"
git remote add origin https://github.com/haast7/primesdr.git
git branch -M main
git push -u origin main
pause







