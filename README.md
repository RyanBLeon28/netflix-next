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

Comparativo das métricas principais entre a versão original (HTML/JS) e a versão final migrada (Next.js na Vercel):

| Métrica | Versão Original | Versão Next.js (Vercel) | Observações |
| :--- | :---: | :---: | :--- |
| **Performance** | 70 | **81** | Melhoria no tempo de carregamento e execução de scripts. |
| **Acessibilidade** | 100 | **100** | Manutenção da excelente estrutura de etiquetas e navegação por teclado. |
| **Boas Práticas** | 93 | **100** | Otimização de segurança e uso de HTTPS/HTTP2 providos pela Vercel. |
| **SEO** | 91 | **100** | Aumento significativo graças à semântica do Next.js e metadados dinâmicos. |
| **LCP** | 6.7s | **3.4s** | Redução de ~50% no tempo de pintura. O uso do componente <Image> otimizou o carregamento do background, tirando a métrica da zona crítica (vermelha). |

> **Conclusão:** A migração resultou em uma aplicação mais robusta,segura e com significativo aumento de performance e renderização, atingindo pontuação máxima em 3 dos 4 critérios avaliados pelo Google Lighthouse.
Sendo assim, conclui-se que o Next/Vercel junto com práticas de renderização são essencial no aumento de performance do projeto e experiência do usuário.

---

## Como Rodar o Projeto

1. **Instale as dependências:**
   ```bash
   npm install