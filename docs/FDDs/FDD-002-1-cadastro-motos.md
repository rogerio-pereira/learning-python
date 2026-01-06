# Feature Design Document

## Titulo
Cadastro de motos

## Codigo
FDD-002-cadastro-motos

## Status
Aprovado
## Data
2026-01-06

## Descricao
Permite cadastrar, editar, listar e remover motos com dados basicos (fabricante, modelo, placa, ano, kilometragem atual e data da ultima manutencao), conforme o PRD e HLD. Essa funcionalidade e base para registrar manutencoes e historicos.

## Desenvolvimento
- Backend: endpoints
  - `GET /motos`
  - `POST /motos`
  - `PUT /motos/{id}`
  - `DELETE /motos/{id}`
- Backend: modelo `Moto` com campos obrigatorios e validacao de tipo para `ano`.
- Backend: validacao para `kilometragem_atual` nao negativa.
- Backend: validacao para `data_ultima_manutencao` nao futura.
- Frontend: tela de cadastro/listagem com formulario e tabela de motos.
- Frontend: selecao de moto ativa para outras telas (manutencoes, historico).

## Criterios de Aceitacao
- [ ] Usuario cria uma moto com fabricante, modelo, placa, ano, kilometragem atual e data da ultima manutencao validos.
- [ ] Lista de motos exibe os dados cadastrados e permite selecao.
- [ ] Edicao persiste alteracoes e reflete na listagem.
- [ ] Remocao elimina a moto e seus registros nao aparecem mais na listagem.

## Testes
- Unitarios: validacao de campos obrigatorios, tipo de `ano` e `kilometragem_atual` nao negativa.
- Unitarios: validacao de `data_ultima_manutencao` nao futura.
- Integracao: CRUD completo de motos via API.
- Integracao: tentativa de criar moto com campos vazios retorna erro 422.
- E2E: fluxo de cadastro, edicao e remocao de moto pela interface.
- E2E: estado vazio quando nao ha motos cadastradas.

## Documentos Relacionados
- [PRD - Product Requirement Docs](../01%20-%20PRD%20-%20Product%20Requirement%20Docs.md)
- [HLD - High Level Design](../02%20-%20HLD%20-%20High%20Level%20Design.md)
