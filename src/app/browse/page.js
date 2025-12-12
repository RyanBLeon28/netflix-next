'use client'; // CSR

import { useEffect, useState } from 'react';
import MovieCarrossel from '../componentes/MovieCarrossel';
import { useRouter } from 'next/navigation';

const fetchMovies = () => {

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
    const data = fetchMovies();
    setMoviesData(data);
    
  }, []);

  if (!moviesData) {
    return <div style={{color: 'white', padding: '2rem'}}>Loading movies and series...</div>;
  }

  return (
    <main className="browse-bg"> 
      
      <div className="buttons-trailer">
          <button 
            className="btn btn-play" 
            onClick={() => router.push('/movie/92023djsq9s0m29')}
          >
            Play
          </button>
          
          <button className="btn btn-trailer">
            Watch Trailer
          </button>
      </div>

      <MovieCarrossel title="New this week" movies={moviesData.newThisWeek} />
      <MovieCarrossel title="Top 10" movies={moviesData.top10} />
      
    </main>
  );
}