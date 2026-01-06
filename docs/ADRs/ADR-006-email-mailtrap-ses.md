# Arquivo de Registro de Decisão Arquitetural (ADR)

## Título
Serviço de E-mail com Mailtrap (dev) e AWS SES (prod)

## Status
Aceita

## Data
2026-01-06

## Contexto
Precisamos enviar e-mails de lembrete e notificações de forma segura e testável.

## Decisão
Usaremos Mailtrap para ambiente de desenvolvimento e AWS SES em produção.

## Consequências
Ambientes isolados, testabilidade de envio e compatibilidade com produção real.

## Alternativas Consideradas
- SMTP próprio (exige manutenção).
- SendGrid (poderia ser alternativa equivalente ao SES).

## Documentos Relacionados
- [HLD - High Level Design](../02%20-%20HLD%20-%20High%20Level%20Design.md)
