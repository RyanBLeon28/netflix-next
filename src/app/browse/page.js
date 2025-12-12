'use client'; // Indica (CSR)

import { useEffect, useState } from 'react';
import MovieCarrossel from '../componentes/MovieCarrossel';
import { useRouter } from 'next/navigation';

// Simulação de busca de dados (que ocorreria no lado do cliente)
const fetchMovies = () => {
  // No seu projeto real, aqui você faria um 'fetch' para uma API externa.
  // Por agora, vamos simular a estrutura dos seus carrosséis:

  const newThisWeek = [
    { src: 'filme1.png', alt: 'Filme 1' },
    { src: 'filme2.png', alt: 'Filme 2' },
    { src: 'filme3.png', alt: 'Filme 3' },
    { src: 'filme4.png', alt: 'Filme 4' },
    { src: 'filme5.png', alt: 'Filme 5' },
    { src: 'filme7.png', alt: 'Filme 7' },
    { src: 'filme11.png', alt: 'Filme 11' },
    { src: 'filme8.png', alt: 'Filme 8' },
    { src: 'filme9.png', alt: 'Filme 9' },
    { src: 'filme10.png', alt: 'Filme 10' },
  ];

  const top10 = [
    { src: 'filme11.png', alt: 'Filme 11' },
    { src: 'filme12.png', alt: 'Filme 12' },
    { src: 'filme1.png', alt: 'Filme 1' },
    { src: 'filme2.png', alt: 'Filme 2' },
    { src: 'filme3.png', alt: 'Filme 3' },
    { src: 'filme4.png', alt: 'Filme 4' },
    { src: 'filme5.png', alt: 'Filme 5' },
    { src: 'filme10.png', alt: 'Filme 10' },
    { src: 'filme7.png', alt: 'Filme 7' },
    { src: 'filme8.png', alt: 'Filme 8' },
  ];

  return { newThisWeek, top10 };
};

export default function BrowsePage() {
  const router = useRouter();
  const [moviesData, setMoviesData] = useState(null);

  useEffect(() => {
    // A lógica do 'script.js' de manipulação de carrossel iria aqui.
    // Usamos useEffect para simular o carregamento de dados *após* o componente montar (CSR).
    const data = fetchMovies();
    setMoviesData(data);
    
    // Simulação do botão 'Play' original que ia para netflix.html.
    // Agora, ele pode ser o botão que leva à tela do filme.
    // O router.push('/movie/details') faria esse papel.
  }, []);

  if (!moviesData) {
    // Pode colocar um estilo simples de loading aqui se quiser
    return <div style={{color: 'white', padding: '2rem'}}>Carregando catálogo...</div>;
  }

  return (
    // Aplicamos a classe que criamos no CSS para dar o background e padding
    <main className="browse-bg"> 
      
      <div className="buttons-trailer">
          {/* Botão Play replicando o onclick original via router.push */}
          <button 
            className="btn btn-play" 
            onClick={() => router.push('/movie/92023djsq9s0m29')} // Simula ir para o filme
          >
            Play
          </button>
          
          <button className="btn btn-trailer">
            Watch Trailer
          </button>
      </div>

      {/* Os componentes de carrossel já contêm as sections e h2 */}
      <MovieCarrossel title="New this week" movies={moviesData.newThisWeek} />
      <MovieCarrossel title="Top 10" movies={moviesData.top10} />
      
    </main>
  );
}