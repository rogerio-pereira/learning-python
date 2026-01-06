# Feature Design Document

## Titulo
Manutencoes atrasadas no cadastro de moto

## Codigo
FDD-002-2-manutencoes-atrasadas-cadastro-moto

## Status
Aprovado

## Data
2026-01-06

## Descricao
Ao cadastrar uma moto, o sistema assume o pior cenario (nenhuma manutencao anterior) e inicia a moto com `kilometragem_atual = 0`, garantindo que o usuario comece com a moto "zerada". Em seguida, pergunta se o usuario deseja fazer a manutencao inicial; se sim, direciona para a tela de registro de manutencao, onde ele informa a kilometragem atual e o sistema calcula os servicos necessarios. Isso e util quando o usuario compra uma moto usada e quer partir do estado mais seguro.

## Desenvolvimento
- Backend: ao cadastrar a moto, definir `kilometragem_atual = 0` para iniciar do pior cenario.
- Frontend: ao finalizar o cadastro, perguntar se o usuario deseja fazer a manutencao inicial.
- Frontend: se o usuario confirmar, redirecionar para a tela de registro de manutencao.

## Criterios de Aceitacao
- [ ] Ao cadastrar a moto, `kilometragem_atual` e definida como 0 (pior cenario).
- [ ] Sistema pergunta se o usuario deseja fazer a manutencao inicial.
- [ ] Ao confirmar, usuario e levado para a tela de registro de manutencao.

## Testes
- Unitarios: cadastro de moto define `kilometragem_atual` como 0.
- E2E: ao cadastrar moto, usuario recebe prompt para manutencao inicial.
- E2E: ao confirmar, usuario e direcionado para a tela de registro de manutencao.

## Documentos Relacionados
- [PRD - Product Requirement Docs](../01%20-%20PRD%20-%20Product%20Requirement%20Docs.md)
- [HLD - High Level Design](../02%20-%20HLD%20-%20High%20Level%20Design.md)
