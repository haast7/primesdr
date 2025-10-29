# Script para corrigir e fazer commit
Set-Location "D:\CÓDIGOS\Prime\Prime SDR"

# Verificar status
Write-Host "Verificando status do git..."
git status --porcelain

# Adicionar apenas arquivos modificados do projeto
Write-Host "Adicionando arquivos modificados..."
git add lib/hooks/usePartialFormCapture.ts
git add components/forms/ContactModal.tsx
git add components/forms/TypeformModal.tsx
git add app/api/forms/partial-lead/route.ts

# Fazer commit
Write-Host "Fazendo commit..."
git commit -m "fix: corrige erros de tipagem no sistema de captura de dados parciais

- Atualiza interface PartialFormData para aceitar string | number | boolean | undefined
- Cria interface EnrichedFormData independente para dados enriquecidos
- Permite callbacks assíncronos nos hooks
- Corrige erro de build do Vercel definitivamente"

# Push
Write-Host "Fazendo push..."
git push origin main

Write-Host "Concluído!"
