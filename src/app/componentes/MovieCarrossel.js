import Image from 'next/image';

// Componente que renderiza uma seção de carrossel
export default function MovieCarrossel({ title, movies }) {
  return (
    <section className="carrossel">
      <h2>{title}</h2>
      <div className="carrossel-wrapper">
        <button className="btn-carrossel prev" aria-label="Anterior">&lt;</button>

        <div className="carrossel-container">
          <div className="movies">
            {movies.map((movie, index) => (
              <Image 
                key={index}
                src={`/img/${movie.src}`} 
                alt={movie.alt} 
                width={200} 
                height={300}
                priority={index < 5}
              />
            ))}
          </div>
        </div>

        <button className="btn-carrossel next" aria-label="Próximo">&gt;</button>
      </div>
    </section>
  );
}