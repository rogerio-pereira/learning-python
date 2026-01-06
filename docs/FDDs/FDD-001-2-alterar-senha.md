# Feature Design Document

## Titulo
Alteracao de senha autenticado

## Codigo
FDD-001-2-alterar-senha

## Status
Aprovado

## Data
2026-01-06

## Descricao
Permite que o usuario autenticado altere sua senha de acesso, garantindo seguranca e manutencao de credenciais sem sair do sistema. Esta subfeature complementa o login definido no HLD e na ADR-008.

## Desenvolvimento
- Backend: endpoints
  - `POST /auth/change-password`
- Backend: validacao de senha atual, regras de complexidade e atualizacao do `senha_hash`.
- Backend: invalidacao de sessoes/token anteriores (quando aplicavel).
- Frontend: formulario com senha atual, nova senha e confirmacao.

## Criterios de Aceitacao
- [ ] Usuario autenticado altera senha informando a senha atual correta.
- [ ] Nova senha precisa atender regras minimas configuradas.
- [ ] Tentativa com senha atual incorreta retorna erro sem expor detalhes sensiveis.
- [ ] Sessoes antigas sao invalidadas apos a troca (quando aplicavel).

## Testes
- Unitarios: validacao de senha atual e comparacao com hash.
- Unitarios: validacao de regras de complexidade da nova senha.
- Integracao: `POST /auth/change-password` atualiza senha com credenciais validas.
- Integracao: `POST /auth/change-password` com senha atual incorreta retorna 401/400.
- Integracao: token antigo deixa de funcionar apos a troca.
- E2E: fluxo completo de alteracao de senha a partir da area autenticada.

## Documentos Relacionados
- [PRD - Product Requirement Docs](../01%20-%20PRD%20-%20Product%20Requirement%20Docs.md)
- [HLD - High Level Design](../02%20-%20HLD%20-%20High%20Level%20Design.md)
- [ADR-008 - Autenticacao Simples](../ADRs/ADR-008-autenticacao-simples.md)
