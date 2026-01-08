# Arquivo de Registro de Decisão Arquitetural (ADR)

## Título
Uso de FastAPI como backend

## Status
Depreciada

## Data
2026-01-06

## Contexto
Precisamos de um framework web para o backend do MotoTrack que seja leve, rápido e moderno.

## Decisão
Escolhemos o FastAPI como framework principal do backend.  
Esta ADR foi substituída por `ADR-011-backend-masonite.md`.

## Consequências
- Suporte nativo ao padrão **OpenAPI (Swagger)** para documentação automática da API.
- Uso de **Pydantic** para validação e serialização de dados com base em tipagem.
- Alta performance com suporte a aplicações assíncronas via **ASGI**.

## Alternativas Consideradas
- **Flask**: mais simples, mas menos performático e sem tipagem forte.
- **Django**: muito completo, mas pesado para este projeto.

## Documentos Relacionados
- [HLD - High Level Design](../02%20-%20HLD%20-%20High%20Level%20Design.md)

---

## Notas Técnicas

### Pydantic
- Biblioteca de validação de dados com base em tipagem estática.
- Usada no FastAPI para receber e retornar dados JSON de forma segura e validada.
- Exemplo:
  ```python
  from pydantic import BaseModel

  class Moto(BaseModel):
      modelo: str
      ano: int
      placa: str
  ```
- Documentação oficial: [https://docs.pydantic.dev](https://docs.pydantic.dev)

---

### ASGI (Asynchronous Server Gateway Interface)
- Interface padrão para aplicações web assíncronas em Python.
- Permite uso de `async/await`, WebSockets e maior performance.
- FastAPI é baseado em ASGI e não WSGI.
- Documentação oficial: [https://asgi.readthedocs.io](https://asgi.readthedocs.io)

---

### OpenAPI (Swagger)
- Especificação para definição de APIs REST.
- FastAPI gera automaticamente a documentação interativa em Swagger UI.
- Documentação: [https://fastapi.tiangolo.com/features/#automatic-docs](https://fastapi.tiangolo.com/features/#automatic-docs)
