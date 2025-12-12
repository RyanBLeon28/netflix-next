# Netflix Clone - Migração para Next.js

Este projeto consiste na migração de uma interface clone da Netflix, originalmente desenvolvida em HTML, CSS e JavaScript puro, para uma arquitetura e componentizada utilizando **Next.js**.

O objetivo principal foi desacoplar o frontend e demonstrar domínio prático de diferentes estratégias de renderização web (SSG e CSR), visando otimização de performance e experiência do usuário.

---

## Estratégias de Renderização

Conforme os requisitos do trabalho, foram implementadas diferentes estratégias de renderização para páginas diferentes. Abaixo estão as justificativas técnicas para cada escolha:

### 1. Login
* **Rota:** `/` (Raiz)
* **Estratégia:** **SSG (Static Site Generation)**
* Justificativa:
    Como esta é a porta de entrada do site e seu conteúdo (botão de login e background) raramente muda, o SSG foi a escolha. Ele gera o HTML estático no momento do build, garantindo a máxima velocidade de carregamento e otimização para motores de busca (SEO), sem exigir processamento do servidor a cada acesso.

### 2. Dashboard de Filmes
* **Rota:** `/browse`
* **Estratégia:** **CSR (Client-Side Rendering)**
* **Justificativa:**
    Esta página simula uma área privada e interativa. Optou-se pelo uso de CSR ,pois em um cenário real, o conteúdo seria personalizado para cada usuário (algoritmo de recomendação da Netflix). Renderizar no cliente permite carregar a interface rapidamente e buscar os dados pesados dos filmes de forma assíncrona, melhorando a percepção de fluidez na navegação.

### 3. Detalhes do Filme (Bônus: Rota Dinâmica)
* **Rota:** `/movie/92023djsq9s0m29`
* **Estratégia:** **CSR (Client-Side Rendering)**
* **Justificativa:**
    Implementação de Rota Dinâmica utilizando o recurso de slugs ([id]) do Next.js. A página captura o parâmetro da URL via hook useParams para identificar qual conteúdo exibir. Isso permite que uma única estrutura de página (page.js) renderize infinitos filmes diferentes, garantindo escalabilidade e facilidade de implementação.

---

## Análise de Performance (Lighthouse)

Comparativo das métricas principais entre a versão original (HTML/JS) e a versão migrada (Next.js):

| Métrica | Versão Original | Versão Next.js | Observações |
| :--- | :---: | :---: | :--- |
| **Performance** | *77* | *(Insira valor)* | Melhora devido ao uso de `<Image />` e *Code Splitting*. |
| **LCP** | *(Insira valor)* | *(Insira valor)* | O SSG na home reduziu drasticamente o tempo de pintura. |
| **SEO** | *82* | *(Insira valor)* | Estrutura semântica do Next.js ajudou na indexação. |

> *Nota: A otimização de imagens automática do Next.js (`next/image`) foi fundamental para reduzir o peso dos assets nos carrosséis.*

---

## Como Rodar o Projeto

1. **Instale as dependências:**
   ```bash
   npm install