'use client';

import { useRouter, useParams } from 'next/navigation';

export default function MovieDetails() {
  const router = useRouter();
  const params = useParams(); 
  
  const { id } = params;

  return (
    <div className="browse-bg" style={{ minHeight: '100vh', padding: '100px 4rem' }}>
      
      <p style={{ maxWidth: '600px', fontSize: '1.2rem', lineHeight: '1.5', paddingTop:"20%"
      }}>
        Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.
    </p>

      <div className="buttons-trailer" style={{ marginTop: '20px', paddingLeft: 0 }}>
        <button className="btn btn-play">Watch Now</button>
        <button className="btn btn-trailer">My List</button>
      </div>
    </div>
  );
}