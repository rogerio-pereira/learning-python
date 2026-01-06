# Feature Design Document

## Titulo
Cadastro de servicos

## Codigo
FDD-003-servico

## Status
Aprovado

## Data
2026-01-06

## Descricao
Permite definir servicos com periodicidade por tempo e/ou quilometragem, conforme PRD e HLD. Esses servicos alimentam o registro de manutencoes e o calculo de revisoes.

## Desenvolvimento
- Backend: endpoints
  - `GET /servicos`
  - `POST /servicos`
  - `PUT /servicos/{id}`
  - `DELETE /servicos/{id}`
- Backend: modelo `Servico` com `nome`, `periodicidade_dias` e `periodicidade_km`.
- Backend: validacao para exigir pelo menos uma periodicidade.
- Frontend: tela de cadastro/listagem de servicos.

## Seeder (Servicos predefinidos)
- 30 dias ou 500 milhas
  - Inspect tire condition & pressure
  - Inspect lights/controls/electrical
- 90 dias ou 2,000 milhas
  - Inspect/adjust chain tension
  - Lubricate chain
- 180 dias ou 4,000 milhas
  - Change engine oil
  - Replace engine oil filter
  - Inspect brake pads/shoes wear
  - Check battery condition & terminals
- 180 dias ou 5,000 milhas
  - Replace air filter (dusty use)
- 365 dias ou 8,000 milhas
  - Inspect/clean air filter
  - Inspect spark plug
  - Check/adjust valve clearance
  - Inspect brake fluid level & quality
  - Inspect fuel system lines & connections
  - Inspect suspension components
- 730 dias ou 16,000 milhas
  - Replace brake fluid
  - Replace spark plug
- 1095 dias ou 24,000 milhas
  - Inspect/replace coolant

## Criterios de Aceitacao
- [ ] Usuario cria um servico com nome e periodicidade valida (dias e/ou km).
- [ ] Sistema rejeita cadastro sem periodicidade configurada.
- [ ] Lista de servicos exibe dados completos e ordenados por nome.
- [ ] Edicao atualiza periodicidade e afeta novos agendamentos.

## Testes
- Unitarios: validacao de periodicidade (dias e km nao podem ser nulos ao mesmo tempo).
- Unitarios: validacao de valores negativos ou zero para periodicidade.
- Integracao: CRUD completo de servicos via API.
- Integracao: tentativa de criar servico sem periodicidade retorna erro 400.
- E2E: fluxo de cadastro e edicao de servico.
- E2E: listagem renderiza servicos cadastrados.

## Documentos Relacionados
- [PRD - Product Requirement Docs](../01%20-%20PRD%20-%20Product%20Requirement%20Docs.md)
- [HLD - High Level Design](../02%20-%20HLD%20-%20High%20Level%20Design.md)
