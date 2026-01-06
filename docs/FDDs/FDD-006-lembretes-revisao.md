# Feature Design Document

## Titulo
Lembretes automaticos de revisao

## Codigo
FDD-006-lembretes-revisao

## Status
Aprovado
## Data
2026-01-06

## Descricao
Envia lembretes por e-mail 7 dias antes do vencimento por tempo, usando agendamento via cron/Lambda, conforme PRD e HLD. A funcionalidade garante que o usuario seja avisado antes da revisao.

## Desenvolvimento
- Backend: rotinas agendadas
  - Job diario para buscar manutencoes com vencimento em 7 dias.
  - Job para evitar reenvio duplicado do mesmo lembrete.
- Backend: servico de e-mail integrado ao Mailtrap/SES.
- Backend: regra de negocio para calculo de vencimento por tempo.
- Frontend: opcionalmente, exibicao do status de lembretes no historico.

## Criterios de Aceitacao
- [ ] Sistema envia e-mail 7 dias antes do vencimento por tempo.
- [ ] Lembretes nao sao enviados em duplicidade para a mesma manutencao.
- [ ] Falhas de envio sao registradas para reprocessamento.
- [ ] Servico de e-mail usa Mailtrap em dev e SES em prod.

## Testes
- Unitarios: calculo da janela de 7 dias considerando fuso horario.
- Unitarios: regra que impede envio duplicado.
- Integracao: job diario dispara consulta e enfileira envios.
- Integracao: envio de e-mail bem sucedido registra status de lembrete.
- Integracao: falha de envio marca lembrete para reprocessamento.
- E2E: simulacao de vencimento em 7 dias dispara lembrete.

## Documentos Relacionados
- [PRD - Product Requirement Docs](../01%20-%20PRD%20-%20Product%20Requirement%20Docs.md)
- [HLD - High Level Design](../02%20-%20HLD%20-%20High%20Level%20Design.md)
- [ADR-006 - Email Mailtrap/SES](../ADRs/ADR-006-email-mailtrap-ses.md)
- [ADR-007 - Agendamento de Lembretes](../ADRs/ADR-007-agendamento-lembretes.md)
