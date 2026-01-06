# Feature Design Document

## Titulo
Registro de manutencao

## Codigo
FDD-004-registro-manutencao

## Status
Aprovado
## Data
2026-01-06

## Descricao
Permite registrar manutencoes com data, kilometragem e multiplos servicos, incluindo upload de nota fiscal e agendamento automatico da proxima revisao. Ao registrar a manutencao, atualiza a kilometragem atual da moto. Esta funcionalidade e central no PRD e detalhada no HLD.

## Fluxo Operacional
1. Usuario seleciona a moto.
2. Usuario entra a kilometragem.
3. Sistema calcula a ultima manutencao (data).
4. Sistema calcula diferencas em milhas.
5. Sistema popula automaticamente servicos a serem feitos.
6. Usuario aprova cada servico individualmente.
7. Usuario faz upload de notas fiscais.
8. Usuario salva.
9. Sistema atualiza moto (kilometragem atual e ultima manutencao).

## Desenvolvimento
- Backend: endpoints
  - `POST /manutencoes`
- Backend: persistencia da manutencao e relacionamento N:N com tipos de servico.
- Backend: atualizacao da `kilometragem_atual` da moto com o valor informado.
- Backend: atualizacao da `data_ultima_manutencao` da moto com a data registrada.
- Backend: calculo da ultima manutencao e diferencas em milhas para sugestao de servicos.
- Backend: upload da nota fiscal para MinIO/S3 e armazenamento do link.
- Backend: calculo da proxima revisao por tempo e/ou km e atualizacao automatica.
- Frontend: formulario de registro com selecao de moto, kilometragem, sugestoes de servico e upload.

## Criterios de Aceitacao
- [ ] Usuario registra manutencao com data, km e pelo menos um tipo de servico.
- [ ] Kilometragem atual da moto e atualizada ao registrar a manutencao.
- [ ] Data da ultima manutencao da moto e atualizada ao registrar a manutencao.
- [ ] Sistema sugere servicos com base na diferenca em milhas desde a ultima manutencao.
- [ ] Usuario pode aprovar ou remover servicos sugeridos antes de salvar.
- [ ] Sistema aceita upload de nota fiscal e armazena o link no registro.
- [ ] Proxima revisao e calculada automaticamente conforme periodicidade.
- [ ] Manutencao registrada aparece no historico da moto.

## Testes
- Unitarios: calculo de proxima revisao por tempo.
- Unitarios: calculo de proxima revisao por quilometragem.
- Unitarios: atualizacao de `kilometragem_atual` da moto apos registro.
- Unitarios: atualizacao de `data_ultima_manutencao` da moto apos registro.
- Unitarios: sugestao de servicos com base na diferenca em milhas.
- Unitarios: validacao de payload com lista vazia de servicos retorna erro.
- Integracao: `POST /manutencoes` persiste manutencao e associa tipos de servico.
- Integracao: upload de nota fiscal salva arquivo no storage e referencia no banco.
- Integracao: manutencao registrada aparece em `GET /motos/{id}/manutencoes`.
- E2E: fluxo completo de registro com upload e confirmacao na tela de historico.

## Documentos Relacionados
- [PRD - Product Requirement Docs](../01%20-%20PRD%20-%20Product%20Requirement%20Docs.md)
- [HLD - High Level Design](../02%20-%20HLD%20-%20High%20Level%20Design.md)
- [ADR-005 - Armazenamento MinIO](../ADRs/ADR-005-armazenamento-minio.md)
