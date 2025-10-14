# Script para atualizar o repositório GitHub
# Autor: Assistente AI
# Data: $(Get-Date -Format "yyyy-MM-dd")

Write-Host "🚀 Iniciando atualização do repositório GitHub..." -ForegroundColor Green

# Navegar para o diretório do projeto
Set-Location "D:\CÓDIGOS\Prime\Prime SDR"

Write-Host "📁 Diretório atual: $(Get-Location)" -ForegroundColor Yellow

# Verificar status do git
Write-Host "🔍 Verificando status do Git..." -ForegroundColor Cyan
git status

# Adicionar todas as alterações
Write-Host "➕ Adicionando arquivos ao staging..." -ForegroundColor Cyan
git add .

# Verificar se há alterações para commit
$changes = git diff --cached --name-only
if ($changes.Count -eq 0) {
    Write-Host "⚠️  Nenhuma alteração detectada para commit." -ForegroundColor Yellow
    exit 0
}

# Fazer commit com mensagem descritiva
$commitMessage = "feat: Add complete Resources page with interactive tools and content

- Add comprehensive Resources page (/recursos) with hero, search, and filters
- Add interactive tools: ROI Calculator, Profile Analyzer, Headline Generator, Quiz
- Add Guides & Playbooks section with downloadable PDFs
- Add Videos & Webinars section with educational content
- Add Success Cases section with real metrics and testimonials
- Add Comparisons section (SDR Internal vs Prime SDR vs Agency)
- Add Prospecting Glossary with 20+ terms and search functionality
- Remove templates section as requested
- Update i18n system with resources translations
- Add .gitignore to exclude system files
- Update sitemap with resources page"

Write-Host "💾 Fazendo commit das alterações..." -ForegroundColor Cyan
git commit -m $commitMessage

# Verificar se o remote origin já existe
$remoteExists = git remote get-url origin 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "🔗 Adicionando remote origin..." -ForegroundColor Cyan
    git remote add origin https://github.com/haast7/primesdr.git
} else {
    Write-Host "✅ Remote origin já configurado: $remoteExists" -ForegroundColor Green
}

# Definir branch principal como main
Write-Host "🌿 Configurando branch principal..." -ForegroundColor Cyan
git branch -M main

# Fazer push para o GitHub
Write-Host "📤 Enviando alterações para o GitHub..." -ForegroundColor Cyan
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Repositório atualizado com sucesso!" -ForegroundColor Green
    Write-Host "🔗 Acesse: https://github.com/haast7/primesdr" -ForegroundColor Blue
} else {
    Write-Host "❌ Erro ao enviar para o GitHub. Verifique suas credenciais." -ForegroundColor Red
}

Write-Host "🏁 Processo concluído!" -ForegroundColor Green







