# Feature Design Document

## Titulo
Historico de manutencoes

## Codigo
FDD-005-historico-manutencoes

## Status
Aprovado
## Data
2026-01-06

## Descricao
Exibe o historico de servicos realizados por moto, conforme PRD e HLD. A visualizacao do historico permite acompanhar manutencoes passadas e preparar exportacoes futuras.

## Desenvolvimento
- Backend: endpoints
  - `GET /motos/{id}/manutencoes`
- Backend: ordenacao padrao por data decrescente.
- Backend: suporte a filtros por periodo e tipo de servico (quando aplicavel).
- Frontend: tela de historico com tabela, detalhes da manutencao e acesso aos comprovantes.

## Criterios de Aceitacao
- [ ] Historico exibe manutencoes da moto selecionada em ordem cronologica.
- [ ] Cada registro mostra data, km e tipos de servico.
- [ ] Tela mostra estado vazio quando nao ha manutencoes.
- [ ] Comprovantes de nota fiscal ficam acessiveis quando existir upload.

## Testes
- Unitarios: ordenacao de manutencoes por data.
- Unitarios: filtro por periodo retorna apenas itens no intervalo.
- Integracao: `GET /motos/{id}/manutencoes` retorna somente manutencoes da moto informada.
- Integracao: historico vazio retorna lista vazia e status 200.
- E2E: visualizacao de historico com e sem manutencoes.
- E2E: abertura de comprovante anexado em manutencao.

## Documentos Relacionados
- [PRD - Product Requirement Docs](../01%20-%20PRD%20-%20Product%20Requirement%20Docs.md)
- [HLD - High Level Design](../02%20-%20HLD%20-%20High%20Level%20Design.md)
