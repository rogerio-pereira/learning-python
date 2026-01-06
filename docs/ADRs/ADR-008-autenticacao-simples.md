# Arquivo de Registro de Decisão Arquitetural (ADR)

## Título
Autenticação simples com e-mail e senha (bcrypt)

## Status
Aceita

## Data
2026-01-06

## Contexto
Precisamos autenticar usuários com segurança, mas sem complexidade desnecessária.

## Decisão
Usaremos autenticação via e-mail/senha com hash usando bcrypt.

## Consequências
Simples, eficaz e com baixo overhead.

## Alternativas Consideradas
- JWT: desnecessário neste momento.
- OAuth2: complexidade alta para projeto pessoal.

## Documentos Relacionados
- [HLD - High Level Design](../02%20-%20HLD%20-%20High%20Level%20Design.md)
