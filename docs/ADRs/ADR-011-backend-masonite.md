# Arquivo de Registro de Decisão Arquitetural (ADR)

## Título
Uso de Masonite como backend

## Status
Aceita

## Data
2026-01-06

## Contexto
Precisamos de um framework web para o backend do MotoTrack que seja produtivo, organizado e com uma estrutura familiar para quem vem de Laravel.

## Decisão
Escolhemos o Masonite como framework principal do backend.

## Consequências
- Estrutura MVC e convenções próximas ao Laravel, facilitando a transição.
- Ecossistema com ferramentas integradas para rotas, validação, ORM e migrations.
- Menor exposição a padrões assíncronos, mantendo o foco em clareza e produtividade.

## Alternativas Consideradas
- **FastAPI**: moderno e performático, mas menos familiar para quem vem do Laravel.
- **Django**: completo e maduro, porém com mais peso e opiniões fortes.

## Documentos Relacionados
- [HLD - High Level Design](../02%20-%20HLD%20-%20High%20Level%20Design.md)
- [ADR-001 - Backend FastAPI](ADR-001-backend-fastapi.md)
