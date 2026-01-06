# Arquivo de Registro de Decisão Arquitetural (ADR)

## Título
Agendamento com AWS EventBridge + Lambda (via LocalStack)

## Status
Aceita

## Data
2026-01-06

## Contexto
Precisamos agendar verificação periódica de revisões e enviar lembretes automáticos.

## Decisão
Usaremos EventBridge + Lambda com LocalStack em dev.

## Consequências
Arquitetura realista e escalável, com consistência entre desenvolvimento e produção.

## Alternativas Consideradas
- Cronjob local simples (não reflete a arquitetura final).
- Celery + Redis (mais complexo para este caso).

## Documentos Relacionados
- [HLD - High Level Design](../02%20-%20HLD%20-%20High%20Level%20Design.md)
