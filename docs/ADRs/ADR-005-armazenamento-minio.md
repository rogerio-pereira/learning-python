# Arquivo de Registro de Decisão Arquitetural (ADR)

## Título
Armazenamento local com MinIO (compatível com AWS S3)

## Status
Aceita

## Data
2026-01-06

## Contexto
Precisamos armazenar arquivos localmente em dev e migrar facilmente para S3 em produção.

## Decisão
Usaremos MinIO localmente e manteremos compatibilidade com S3.

## Consequências
Fácil integração com bibliotecas AWS SDK, flexível e pronto para migração.

## Alternativas Consideradas
- Sistema de arquivos local.
- Google Cloud Storage (exige adaptação e não é o foco).

## Documentos Relacionados
- [HLD - High Level Design](../02%20-%20HLD%20-%20High%20Level%20Design.md)
