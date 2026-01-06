# Documento de Requisitos do Produto (PRD)

## Nome do Projeto
MotoTrack

## Data
2026-01-06

## Visão Geral
MotoTrack é uma aplicação web voltada para o controle de manutenções periódicas de motocicletas. O objetivo é permitir que usuários registrem serviços, acompanhem histórico, recebam lembretes e mantenham suas motos em dia com as revisões. Inicialmente desenvolvido como projeto pessoal para aprendizado, o sistema possui potencial de expansão futura para um produto SaaS.

## Problema a Resolver
Muitos motociclistas (e mecânicos) não possuem um método eficiente e estruturado para acompanhar manutenções periódicas, o que pode levar a esquecimentos, custos inesperados ou falhas mecânicas evitáveis. O sistema busca resolver esse problema organizando e automatizando esse controle.

## Usuários Alvo
- Usuário único (o próprio dono ou mecânico responsável pela moto).
- No futuro, possibilidade de múltiplos usuários.

## Funcionalidades Principais

1. **Cadastro de Motos**
   - Informações básicas da moto (fabricante, modelo, placa, ano)

2. **Registro de Manutenção**
   - Data, tipo de serviço (pode incluir varios servicos na mesma manutencao), kilometragem atual
   - Upload de nota fiscal (armazenada em S3 local com MinIO)
   - Agendamento automático do próximo serviço com base em tempo/quilometragem
   - Atualização automática da próxima revisão ao registrar novo serviço

3. **Tipos de Serviço**
   - Cada tipo com periodicidade configurável (tempo e/ou quilometragem).

4. **Histórico de Serviços**
   - Exibe serviços realizados

5. **Lembretes de Revisão**
   - Envio de e-mails 7 dias antes do vencimento (por tempo)
   - Implementado com cronjob + scheduler

6. **Exportação em PDF**
   - Servico concluido
   - Histórico de serviços exportável por moto

## Requisitos Técnicos

- Frontend: Vue 3 (SPA responsiva)
- Backend: FastAPI
- Banco de Dados: PostgreSQL
- Testes: Automatizados
- Infra: Docker (incluindo Localstack, MinIO, Mailtrap)
- Documentação da API: Swagger/OpenAPI

## Critérios de Sucesso

- O sistema deve funcionar localmente, via Docker
- Deve permitir o registro completo de manutenções
- Agendamentos e lembretes devem ocorrer corretamente
- Exportação de histórico em PDF deve estar disponível
- Experiência fluida em dispositivos móveis

## Notas Finais

MotoTrack é um projeto de aprendizado, priorizando boas práticas e tecnologias modernas. A arquitetura visa ser modular e escalável, com possibilidade de evolução futura sem reescrita completa.
