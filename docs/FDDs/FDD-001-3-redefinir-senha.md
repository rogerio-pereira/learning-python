# Feature Design Document

## Titulo
Redefinicao de senha (esqueci a senha)

## Codigo
FDD-001-3-redefinir-senha

## Status
Aprovado

## Data
2026-01-06

## Descricao
Permite que o usuario redefina a senha quando nao lembrar das credenciais, via fluxo de recuperacao por e-mail. Esta subfeature complementa o login definido no HLD e na ADR-008, usando o servico de e-mail do projeto.

## Desenvolvimento
- Backend: endpoints
  - `POST /auth/forgot-password`
  - `POST /auth/reset-password`
- Backend: geracao de token temporario com expiracao e armazenamento seguro.
- Backend: envio de e-mail com link de redefinicao usando Mailtrap/SES.
- Backend: validacao de token, expiracao e atualizacao do `senha_hash`.
- Frontend: tela para solicitar redefinicao e tela para definir nova senha.

## Criterios de Aceitacao
- [ ] Usuario solicita redefinicao e recebe e-mail com link valido.
- [ ] Token expira apos tempo configurado e nao pode ser reutilizado.
- [ ] Nova senha precisa atender regras minimas configuradas.
- [ ] Fluxo nao revela se o e-mail existe ou nao no sistema.

## Testes
- Unitarios: geracao de token unico com expiracao.
- Unitarios: validacao de token expirado e token reutilizado.
- Unitarios: validacao de regras de complexidade da nova senha.
- Integracao: `POST /auth/forgot-password` enfileira envio de e-mail.
- Integracao: `POST /auth/reset-password` atualiza senha com token valido.
- Integracao: tentativa com token invalido retorna erro.
- E2E: fluxo completo de redefinicao via e-mail.

## Documentos Relacionados
- [PRD - Product Requirement Docs](../01%20-%20PRD%20-%20Product%20Requirement%20Docs.md)
- [HLD - High Level Design](../02%20-%20HLD%20-%20High%20Level%20Design.md)
- [ADR-006 - Email Mailtrap/SES](../ADRs/ADR-006-email-mailtrap-ses.md)
- [ADR-008 - Autenticacao Simples](../ADRs/ADR-008-autenticacao-simples.md)
