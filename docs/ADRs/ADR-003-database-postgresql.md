# Arquivo de Registro de Decisão Arquitetural (ADR)

## Título
Uso de PostgreSQL com Docker

## Status
Aceita

## Data
2026-01-06

## Contexto
Precisamos de um banco de dados relacional e robusto.

## Decisão
Escolhemos PostgreSQL, rodando em container Docker.

## Consequências
Excelente suporte a integridade de dados, ACID, JSONB e escalabilidade.

## Alternativas Consideradas
- MySQL/MariaDB: menos avançado em alguns recursos.
- SQLite: não recomendado para produção.

## Documentos Relacionados
- [HLD - High Level Design](../02%20-%20HLD%20-%20High%20Level%20Design.md)
