# Arquivo de Registro de Decisão Arquitetural (ADR)

## Título
Uso de testes automatizados no projeto

## Status
Aceita

## Data
2026-01-06

## Contexto
O projeto MotoTrack precisa de testes automatizados para garantir confiabilidade, prevenir regressões e facilitar refatorações seguras. A cobertura de testes incluirá tanto o backend quanto o frontend, com abordagens adequadas a cada camada.

## Decisão
Utilizaremos as seguintes ferramentas:

- **Backend:** `pytest` para testes unitários e integração.
- **Frontend:** 
  - `vitest` para testes unitários e de componentes.
  - `playwright` para testes end-to-end (E2E) automatizados.

## Consequências
- Garantia de estabilidade e confiança nas funcionalidades implementadas.
- Redução do custo de manutenção e depuração.
- Facilidade para adotar integração contínua no futuro.

## Alternativas Consideradas
- Testes manuais: inviáveis a longo prazo, propensos a erro humano.
- Outras ferramentas como `unittest` (Python), `jest` (JS): viáveis, mas optamos por soluções mais modernas e integradas ao stack do projeto.

## Documentos Relacionados
- [HLD - High Level Design](../02%20-%20HLD%20-%20High%20Level%20Design.md)

---

## Ferramentas e Documentação

### pytest (backend)
- Framework popular para testes em Python.
- Suporte a fixtures, parametrização e plugins.
- [Documentação](https://docs.pytest.org)

### vitest (frontend unit tests)
- Framework de testes moderno e rápido baseado em Vite.
- Integrado nativamente com Vue 3 + TypeScript.
- [Documentação](https://vitest.dev)

### playwright (frontend E2E)
- Framework da Microsoft para testes automatizados de UI com múltiplos navegadores.
- Suporte a modo headless e gravação de testes.
- [Documentação](https://playwright.dev)
