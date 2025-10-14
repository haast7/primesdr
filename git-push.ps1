Set-Location "D:\CÓDIGOS\Prime\Prime SDR"

# Remove as pastas específicas do controle de versão se já estiverem sendo rastreadas
git rm -r --cached "Estrutura de Desenvolvimento" 2>$null
git rm -r --cached "Copy do Site" 2>$null

# Adiciona todos os arquivos exceto as pastas ignoradas
git add .

# Verifica se há mudanças para commitar
$status = git status --porcelain
if ($status) {
    git commit -m "feat: Complete project update - Added new pages, components, and improved structure (excluding development folders)"
    
    # Configura o remote se não existir
    $remote = git remote get-url origin 2>$null
    if (-not $remote) {
        git remote add origin https://github.com/haast7/primesdr.git
    }
    
    # Define a branch principal
    git branch -M main
    
    # Push para o repositório
    git push -u origin main
    Write-Host "Push realizado com sucesso!" -ForegroundColor Green
} else {
    Write-Host "Nenhuma mudança detectada para commitar." -ForegroundColor Yellow
}


