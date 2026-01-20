# Script para commit e push das alterações da calculadora ROI
$ErrorActionPreference = "Stop"

# Navegar para o diretório do projeto
$projectPath = "D:\CÓDIGOS\Prime\Prime SDR"
Set-Location $projectPath

Write-Host "Diretório do projeto: $(Get-Location)" -ForegroundColor Green

# Verificar status
Write-Host "`nVerificando status do git..." -ForegroundColor Yellow
$status = git status --short

if ($status) {
    Write-Host "`nArquivos modificados:" -ForegroundColor Cyan
    $status | ForEach-Object { Write-Host "  $_" }
    
    # Adicionar todos os arquivos modificados
    Write-Host "`nAdicionando arquivos..." -ForegroundColor Yellow
    git add .
    
    # Commit
    Write-Host "`nFazendo commit..." -ForegroundColor Yellow
    $commitMessage = @"
feat: implementa calculadora ROI e sistema de captura de leads para recursos

- Adiciona badge GRÁTIS posicionado fora dos containers na página de recursos
- Cria ResourceFormModal para captura de leads antes de acessar recursos
- Implementa página dedicada da calculadora de ROI (/calculadora-roi)
- Adiciona toggle Prime SDR na calculadora com lógica diferenciada
- Corrige campo WhatsApp no formulário de captura
- Atualiza webhook para incluir form_id e material_id
- Melhora validação e tratamento de erros nos formulários
"@
    
    git commit -m $commitMessage
    
    # Verificar se remote está configurado
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





