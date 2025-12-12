import Link from 'next/link';

export default function WelcomePage() {
  return (
    <div className="welcome-bg"> 
        <Link href="/browse">
          <button className="welcome-btn">
            Log in
          </button>
        </Link>
    </div>
  );
}