# Iniciando com Python

Este guia foca no essencial para começar a trabalhar com Python de forma clara e legível.  
Todo o código abaixo está em inglês, mantendo consistência com boas práticas do projeto.

---

## Diferenças importantes para quem vem do PHP

- **Blocos sem chaves**: não há `{}`. Use `:` e indentação para definir blocos.
- **Sem `public/protected/private`**: visibilidade é por convenção. Um underline (`_`) indica "uso interno"; dois underlines (`__`) ativam name mangling para evitar acesso direto.
- **Sem `;`**: Python não usa ponto e vírgula no fim das linhas.
- **Imports explícitos**: não há autoload como no Composer; você importa o que usa.
- **`None` vs `null`**: `None` é o valor nulo em Python.
- **Verdadeiro/Falso**: use `True` e `False` (com maiúscula).
- **Listas e dicionários**: lista é sequência ordenada (acesso por índice). Dicionário é mapa chave/valor (acesso por chave). São diferentes de arrays PHP, que misturam ambos.
- **Strings**: podem usar aspas simples ou duplas, e f-strings para interpolação (`f"{name}"`).

---

## 1) Variáveis e constantes (por convenção)

Variáveis são criadas por atribuição simples.  
Python não possui palavra-chave para “constante”, então a convenção é usar nomes em MAIÚSCULAS e não reatribuir.

```python
name = "Rogerio"
age = 32

MAX_RETRIES = 3  # constant by convention
```

---

## 2) Tipos básicos

Estes são os tipos mais usados no dia a dia: booleano, inteiro, float e string.

```python
is_active = True
count = 10
price = 19.99
title = "MotoTrack"
```

---

## 3) Coleções essenciais

### Lista (mutável)
Uma lista guarda itens em ordem e pode ser modificada (adicionar/remover/alterar).
```python
services = ["oil change", "brake check"]
services.append("chain lubrication")
```

### Tupla (imutável)
Uma tupla é parecida com lista, mas não pode ser alterada depois de criada.
```python
coordinates = (10, 20)
```

### Dicionário (chave/valor)
Um dicionário associa uma chave a um valor, útil para dados nomeados.
```python
motorcycle = {"model": "CB 500", "year": 2020}
```

### Conjunto (valores únicos)
Um conjunto guarda valores únicos, sem ordem garantida.
```python
unique_ids = {1, 2, 3}
```

---

## 4) Funções

Funções encapsulam uma lógica com entrada e saída claras.  
Em Python não existem chaves `{}` para blocos; a indentação define o bloco.  
Também não existe `public/protected/private` como no PHP. A visibilidade é por convenção:
- `public_function` (sem underline) é pública.
- `_internal_function` (um underline) é tratada como interna (equivalente a "protected" por convenção).
- `__very_internal_function` (dois underlines) ativa name mangling e evita acesso externo direto.

Pense em name mangling como colocar um "prefixo" automático no nome para evitar confusão.  
Se duas classes diferentes tiverem um método chamado `__reset`, Python evita conflitos mudando o nome por baixo dos panos:
- Dentro da classe `User`, `__reset` vira algo como `_User__reset`.
- Dentro da classe `Admin`, `__reset` vira algo como `_Admin__reset`.

Analogia simples: é como ter duas pessoas chamadas "João" na mesma sala e começar a chamá-las de "João Silva" e "João Souza" para não confundir.  
O objetivo não é esconder o método, e sim evitar colisões e desencorajar uso direto fora da classe.

Exemplo ilustrativo:
```python
class User:
    def __reset(self):
        return "user reset"

    def reset_public(self):
        return self.__reset()

class Admin:
    def __reset(self):
        return "admin reset"

    def reset_public(self):
        return self.__reset()
```

Aqui, cada classe tem seu próprio `__reset` "renomeado" internamente, sem conflito entre elas.

```python
def calculate_total(price, quantity):
    total = price * quantity
    return total
```

Exemplo de convenção de visibilidade:

```python
def public_function():
    return "public"

def _internal_function():
    return "internal use"

def __very_internal_function():
    return "avoid external access"
```

---

## 5) Classes (use quando há estado ou conceito de domínio)

Classes fazem sentido quando existe um conceito com estado e comportamento.  
Métodos são funções dentro da classe e recebem `self` para acessar o próprio objeto.  
Aqui a moto guarda dados e sabe responder se é antiga.

```python
class Motorcycle:
    def __init__(self, model, year):
        self.model = model
        self.year = year

    def is_classic(self):
        return self.year < 2000
```

---

## 6) Estruturas condicionais

Condicionais permitem tomar decisões com base em regras simples e explícitas.  
Note que `:` inicia o bloco e a indentação define o corpo do `if/elif/else`.

```python
if age >= 18:
    status = "adult"
elif age >= 13:
    status = "teen"
else:
    status = "child"
```

---

## 7) Estruturas de repetição

### For (iteráveis)
Use `for` quando você quer percorrer itens de uma coleção.  
O bloco também é definido por `:` e indentação (sem chaves).
```python
for service in services:
    process(service)
```

### While (condição)
Use `while` quando a repetição depende de uma condição que pode mudar.
```python
attempts = 0

while attempts < MAX_RETRIES:
    attempts += 1
```

---

## 8) Exceções (lançar e capturar)

Exceções sinalizam erros que interrompem o fluxo normal.  
Você pode lançar um erro com `raise` e capturá-lo com `try/except`.

```python
def divide(a, b):
    if b == 0:
        raise ValueError("b must be non-zero")
    return a / b

try:
    result = divide(10, 0)
except ValueError as error:
    print(str(error))
```

---

## 9) Importação de módulos

Módulos permitem reutilizar código pronto da biblioteca padrão ou de pacotes externos.

```python
from datetime import date

today = date.today()
```

---

## 10) Tipagem opcional (anotações)

As anotações não mudam o comportamento em tempo de execução, mas deixam o código mais claro e ajudam ferramentas como mypy e editores.
Pense nelas como "documentação executável" para humanos e ferramentas.

### Exemplo simples (parâmetros e retorno)
Aqui você declara que `value` deve ser um `float` e que a função retorna `str`.  
Se alguém passar uma string, ferramentas de análise vão apontar o erro antes da execução.

```python
def format_price(value: float) -> str:
    return f"${value:.2f}"
```

### Exemplo com tipos compostos
`List[int]` indica uma lista de inteiros.  
`Optional[float]` significa "float ou None", útil quando não há dados suficientes.
```python
from typing import List, Optional

def average(values: List[int]) -> Optional[float]:
    if not values:
        return None
    return sum(values) / len(values)
```

### Exemplo com dicionário tipado
`Dict[str, int]` diz que as chaves são `str` e os valores são `int`.  
Isso deixa explícito o formato esperado do dicionário de retorno.
```python
from typing import Dict

def build_motorcycle_data(model: str, year: int) -> Dict[str, int]:
    return {"model_year": year}
```

---

## 11) Docstrings (documentação interna)

Docstrings são textos dentro de funções, classes ou módulos para explicar o que eles fazem.  
Elas ficam acessíveis em tempo de execução e são usadas por ferramentas de documentação.

```python
def calculate_mileage(km_start, km_end):
    """Return the traveled distance in kilometers."""
    return km_end - km_start
```

---

## 12) Trabalhando com arquivos (o básico)

O `with` garante que o arquivo será fechado mesmo se houver erro.

```python
with open("notes.txt", "w") as file:
    file.write("Hello, MotoTrack!")
```

---

## 13) Padrões de estilo (equivalente a PSR no Python)

Essas duas cobrem o essencial, mas outras PEPs ajudam a manter um bom projeto.

- PEP 8 (estilo de código): https://peps.python.org/pep-0008/
- PEP 257 (docstrings): https://peps.python.org/pep-0257/
- PEP 20 (Zen of Python, filosofia): https://peps.python.org/pep-0020/
- PEP 484 (type hints): https://peps.python.org/pep-0484/
- PEP 526 (anotações de variáveis): https://peps.python.org/pep-0526/

---

## Observações finais

- Python é simples na superfície, mas o que mais importa é escrever código claro e previsível.
- Prefira código explícito a “tricks” idiomáticos difíceis de ler.
- Se houver dúvida entre concisão e clareza, escolha clareza.
