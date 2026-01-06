# Feature Design Document

## Titulo
Login e autenticacao simples

## Codigo
FDD-001-login-autenticacao

## Status
Aprovado
## Data
2026-01-06

## Descricao
Permite que o usuario acesse o sistema MotoTrack com e-mail e senha, conforme o fluxo de login descrito no HLD e a decisao de autenticacao simples no ADR-008. A autenticacao e necessaria para proteger os cadastros e historicos.

## Desenvolvimento
- Backend: endpoints
  - `POST /auth/login`
- Backend: persistencia do usuario com `email` e `senha_hash` usando bcrypt.
- Frontend: tela de login com validacao de campos e tratamento de erro.
- Frontend: protecao de rotas autenticadas (ex.: motos, manutencoes, historico).

## Criterios de Aceitacao
- [ ] Usuario autentica com credenciais validas e recebe token/sessao.
- [ ] Credenciais invalidas retornam erro padrao sem expor detalhes sensiveis.
- [ ] Rotas protegidas nao sao acessiveis sem autenticacao.
- [ ] Senhas sao armazenadas somente em formato hash.

## Testes
- Unitarios: validacao de senha (hash/compare) e normalizacao de e-mail.
- Integracao: `POST /auth/login` com sucesso, erro por senha invalida e erro por usuario inexistente.
- Integracao: acesso a rota protegida sem token retorna 401.
- E2E: fluxo completo de login e redirecionamento para tela principal.

## Documentos Relacionados
- [PRD - Product Requirement Docs](../01%20-%20PRD%20-%20Product%20Requirement%20Docs.md)
- [HLD - High Level Design](../02%20-%20HLD%20-%20High%20Level%20Design.md)
- [ADR-008 - Autenticacao Simples](../ADRs/ADR-008-autenticacao-simples.md)
