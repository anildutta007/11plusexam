@echo off
title Push 11+ Compass to GitHub
cd /d "%~dp0"
echo ========================================================
echo   Pushing 11+ Compass to GitHub
echo ========================================================
echo.
echo Remote target: https://github.com/anildutta007/11plusexam.git
echo.

git init -b main 2>nul
git add .
git commit -m "Launch 11+ Compass: UK Grammar School Finder, Catchment Calculator, Housing Insights and Parental Guide" 2>nul
git branch -M main

git remote get-url origin >nul 2>nul
if errorlevel 1 (
    git remote add origin https://github.com/anildutta007/11plusexam.git
) else (
    git remote set-url origin https://github.com/anildutta007/11plusexam.git
)

git push -u origin main
if errorlevel 1 (
    echo.
    echo ========================================================
    echo [ACTION REQUIRED ON GITHUB]
    echo 1. Open your browser and go to: https://github.com/new
    echo 2. Repository name: 11plusexam
    echo 3. Choose Public (or Private)
    echo 4. Leave "Add a README file" UNCHECKED
    echo 5. Click "Create repository"
    echo 6. Run this script or push_11plus_compass.bat again!
    echo ========================================================
    echo.
    echo [DEPLOY TO VERCEL]
    echo 1. Go to https://vercel.com/new
    echo 2. Import: anildutta007/11plusexam
    echo 3. Click Deploy
    echo ========================================================
) else (
    echo.
    echo ========================================================
    echo  SUCCESS! Your code has been pushed to GitHub:
    echo  https://github.com/anildutta007/11plusexam
    echo ========================================================
)
pause
