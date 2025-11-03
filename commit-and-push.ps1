# Script temporário para commit e push
$ErrorActionPreference = "Stop"

# Navegar para o diretório do projeto
$projectPath = Join-Path $env:USERPROFILE "..\..\..\D\CÓDIGOS\Prime\Prime SDR"
if (-not (Test-Path $projectPath)) {
    # Tentar caminho direto
    $projectPath = "D:\CÓDIGOS\Prime\Prime SDR"
}

Set-Location $projectPath

# Verificar se estamos no diretório correto
if (-not (Test-Path "package.json")) {
    Write-Host "Erro: Não foi possível localizar o diretório do projeto" -ForegroundColor Red
    exit 1
}

Write-Host "Diretório do projeto: $(Get-Location)" -ForegroundColor Green

# Adicionar arquivos modificados
Write-Host "Adicionando arquivos..." -ForegroundColor Yellow
git add lib/i18n.ts
git add components/sections/Pricing.tsx
git add components/sections/SocialProof.tsx
git add components/sections/FinalCTA.tsx
git add components/TrackingPixels.tsx
git add components/Analytics.tsx
git add app/layout.tsx
git add app/globals.css

# Verificar status
$status = git status --short
if ($status) {
    Write-Host "Arquivos a serem commitados:" -ForegroundColor Cyan
    $status | ForEach-Object { Write-Host "  $_" }
    
    # Commit
    Write-Host "`nFazendo commit..." -ForegroundColor Yellow
    git commit -m "feat(i18n): traducao completa de Pricing e SocialProof + correcao de console warnings"
    
    # Configurar remote se necessário
    $remote = git remote get-url origin 2>$null
    if (-not $remote) {
        Write-Host "Configurando remote..." -ForegroundColor Yellow
        git remote add origin https://github.com/haast7/primesdr.git
    }
    
    # Garantir branch main
    git branch -M main 2>$null
    
    # Push
    Write-Host "`nFazendo push para GitHub..." -ForegroundColor Yellow
    git push -u origin main
    
    Write-Host "`n✓ Commit e push realizados com sucesso!" -ForegroundColor Green
} else {
    Write-Host "Nenhuma mudança detectada para commitar." -ForegroundColor Yellow
}

