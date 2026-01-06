# Feature Design Document

## Titulo
Exportacao em PDF

## Codigo
FDD-007-exportacao-pdf

## Status
Proposto
## Data
2026-01-06

## Descricao
Permite exportar em PDF tanto o registro de manutencao concluida quanto o historico completo por moto, conforme PRD e HLD. A implementacao sera definida apos a decisao da ADR-004.

## Desenvolvimento
- Disponibilizar exportacao de PDF para manutencao concluida.
- Disponibilizar exportacao de PDF para historico completo por moto.

## Criterios de Aceitacao
- [ ] Usuario baixa PDF de uma manutencao concluida com dados completos.
- [ ] Usuario baixa PDF do historico da moto com todas as manutencoes listadas.
- [ ] PDFs gerados possuem layout consistente e legivel.
- [ ] Erro de geracao retorna mensagem clara no frontend.

## Testes
- Unitarios: validacao de dados obrigatorios para exportacao de manutencao.
- Unitarios: tratamento de manutencao inexistente para geracao de PDF.
- Integracao: exportacao de manutencao retorna PDF valido.
- Integracao: exportacao de historico retorna PDF valido.
- Integracao: historico vazio gera PDF com estado vazio.
- E2E: download de PDF em tela de manutencao.
- E2E: download de PDF em tela de historico.

## Documentos Relacionados
- [PRD - Product Requirement Docs](../01%20-%20PRD%20-%20Product%20Requirement%20Docs.md)
- [HLD - High Level Design](../02%20-%20HLD%20-%20High%20Level%20Design.md)
- [ADR-004 - Geracao de PDF](../ADRs/ADR-004-geracao-pdf.md)
