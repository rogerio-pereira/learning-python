# Arquivo de Registro de Decisão Arquitetural (ADR)

## Título
Geração de PDF no sistema

## Status
Proposto

## Data
2026-01-06

## Contexto
O sistema MotoTrack precisa oferecer uma forma de exportar dados de manutenções em PDF. Essa funcionalidade não é primordial, mas é desejável como complemento à experiência do usuário.

A geração do PDF pode ser feita no backend (via Python) ou diretamente no frontend (via JavaScript). Cada abordagem tem prós e contras.

## Opções Consideradas

### 1. **WeasyPrint** (Python)
- Biblioteca para converter HTML + CSS em PDF.
- Sem dependências externas de navegador.

**Prós:**
- Excelente qualidade visual e tipográfica.
- Totalmente Python, fácil de integrar com FastAPI.
- Suporte moderno a CSS.

**Contras:**
- Mais lenta em documentos grandes.
- HTML não pode depender de JavaScript.
- Pode aumentar a complexidade do backend.

**Documentação:**  
https://weasyprint.readthedocs.io

---

### 2. **pdfkit (com wkhtmltopdf)** (Python)
- Wrapper Python para `wkhtmltopdf`, que usa WebKit para renderizar páginas HTML em PDF.

**Prós:**
- Muito rápido na geração.
- Suporte limitado a JavaScript.
- Compatível com layout real de páginas web.

**Contras:**
- Requer instalação do binário externo `wkhtmltopdf` no sistema operacional.
- Maior risco de problemas de compatibilidade em containers/Docker.

**Documentação:**  
- pdfkit: https://pypi.org/project/pdfkit/  
- wkhtmltopdf: https://wkhtmltopdf.org/

---

### 3. **html2pdf.js** (JavaScript)
- Biblioteca client-side que converte elementos DOM em PDF usando `html2canvas` e `jsPDF`.

**Prós:**
- Roda no navegador (sem backend).
- Simples de usar com Vue.
- Bom para documentos simples.

**Contras:**
- Baseado em imagem (não vetorial).
- Quebra de página pode ser imprecisa.

**Documentação:**  
https://ekoopmans.github.io/html2pdf.js/

---

### 4. **jsPDF com html2canvas** (JavaScript)
- Cria PDFs diretamente por código, com suporte a exportar HTML via canvas.

**Prós:**
- Controle detalhado do conteúdo.
- Boa integração com Vue.

**Contras:**
- Layouts complexos exigem trabalho manual.
- Não lida bem com conteúdo longo.

**Documentação:**  
https://github.com/parallax/jsPDF

---

### 5. **Puppeteer (Node.js)** 
- Usado em backend (Node) para renderizar páginas com Chrome headless e gerar PDF.

**Prós:**
- Qualidade profissional.
- Suporte total a HTML, CSS e JavaScript.

**Contras:**
- Exige Node.js e ambiente com Chromium.
- Não roda em browser.

**Documentação:**  
https://pptr.dev/

## Documentos Relacionados
- [HLD - High Level Design](../02%20-%20HLD%20-%20High%20Level%20Design.md)

## Consequências
- A decisão final impactará onde será gerado o PDF: no backend ou no frontend.
- Soluções frontend simplificam o backend e eliminam dependências.
- Soluções backend oferecem mais controle e padronização, mas com maior complexidade.

## Alternativas Consideradas
Todas listadas acima. A escolha final será baseada na complexidade real das telas que precisarão de exportação, e na prioridade desta funcionalidade.

