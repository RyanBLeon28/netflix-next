import Image from 'next/image';

// Componente que renderiza uma seção de carrossel
export default function MovieCarrossel({ title, movies }) {
  // Nota: A lógica real de movimentação do carrossel (prev/next) 
  // deve ser adicionada aqui usando 'use client' e hooks.

  return (
    <section className="carrossel">
      <h2>{title}</h2>
      <div className="carrossel-wrapper">
        {/* Botões do carrossel - A lógica deve ser implementada em React */}
        <button className="btn-carrossel prev" aria-label="Anterior">&lt;</button>

        <div className="carrossel-container">
          <div className="movies">
            {movies.map((movie, index) => (
              // Usar o componente Next/Image para melhor performance e Lighthouse
              <Image 
                key={index}
                src={`/img/${movie.src}`} 
                alt={movie.alt} 
                width={200} // Defina tamanhos apropriados para suas imagens
                height={300} // Defina tamanhos apropriados para suas imagens
                priority={index < 5} // Otimiza o carregamento dos primeiros
                unoptimized // Opcional: Remova se quiser usar a otimização de imagem do Next.js
              />
            ))}
          </div>
        </div>

        <button className="btn-carrossel next" aria-label="Próximo">&gt;</button>
      </div>
    </section>
  );
}