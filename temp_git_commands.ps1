# Script temporário para executar comandos git
$projectPath = "D:\CÓDIGOS\Prime\Prime SDR"

# Navegar para o diretório do projeto
Set-Location $projectPath

# Verificar status
Write-Host "Verificando status do git..."
git status

# Adicionar todos os arquivos
Write-Host "Adicionando arquivos..."
git add .

# Fazer commit
Write-Host "Fazendo commit..."
git commit -m "feat: implementa sistema de captura de dados parciais em tempo real

- Adiciona hook usePartialFormCapture para captura automática
- Implementa API route /api/forms/partial-lead
- Integra captura de dados parciais nos formulários ContactModal e TypeformModal
- Adiciona detecção de abandono de formulário
- Inclui componente demo PartialCaptureDemo
- Atualiza tabela de comparação com coluna Sales Navigator
- Altera garantia de 30 para 90 dias em todos os arquivos
- Adiciona documentação completa do sistema"

# Push para o repositório
Write-Host "Fazendo push..."
git push origin main

Write-Host "Deploy concluído com sucesso!"

