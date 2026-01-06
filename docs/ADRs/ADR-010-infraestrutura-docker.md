# Arquivo de Registro de Decisão Arquitetural (ADR)

## Título
Ambiente totalmente dockerizado com Docker Compose

## Status
Aceita

## Data
2026-01-06

## Contexto
Queremos um ambiente replicável, portátil e de fácil setup.

## Decisão
Usaremos Docker Compose para orquestrar todos os serviços localmente.

## Consequências
Facilita onboarding, testes locais e modularização.

## Alternativas Consideradas
- Instalação manual local.
- Kubernetes (excesso de complexidade para esse projeto).

## Documentos Relacionados
- [HLD - High Level Design](../02%20-%20HLD%20-%20High%20Level%20Design.md)
