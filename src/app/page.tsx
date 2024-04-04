"use client"
import Head from 'next/head';
import Link from 'next/link';
import { useUser } from '@clerk/nextjs';
import { UserButton } from '@clerk/nextjs';
import router, { useRouter } from 'next/router';


export default function Home() {
  const { user } = useUser();
  const handleExploreClick = () => {
    if (!user) {
      router.push('/sign-in'); // Redirect to sign-in page if user is not signed in
    } else {
      router.push('/app'); // Redirect to app page if user is signed in
    }
  };

  return (
    <div>
      <Head>
        <title>Access Free AI Generated Images</title>
        <meta name="AI Generated Images" content="Access Free AI Generated Images" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation Bar */}
      <nav className="nav-0 bg-green-dark p-4 border-b border-white border-solid">
        <div className="nav-1 max-w-6xl mx-auto flex justify-between items-center">
          <div className="nav-2 flex space-x-4 gap-7">
            <a href="/" className="text-white font-semibold hover:text-opacity-90 transition duration-300">Home</a>
            <a href="/about" className="text-white font-semibold hover:text-opacity-90 transition duration-300">About</a>
            <a href="/sign-up" className="text-white font-semibold hover:text-opacity-90 transition duration-300">Images</a>
            <a href="/ai-images" className="text-white font-semibold hover:text-opacity-90 transition duration-300">Contact</a>
          </div>
          <div>
          <div className="flex items-center">
         
          {user ? (
        <Link href="/app">
          <button className="explore bg-white text-green-dark px-3 py-3 rounded-lg text-l hover:bg-green-dark hover:text-white transition duration-300 ease-in-out mr-4">
            Explore Now!
          </button>
        </Link>
      ) : null}
      <div>
        {user ? (
          <main>
            <UserButton afterSignOutUrl="/" />
          </main>
        ) : (
          <Link href="/sign-up">
            <button className="sign-in bg-white text-green-dark px-3 py-3 rounded-lg text-l hover:bg-green-dark hover:text-white transition duration-300 ease-in-out">
              Sign Up
            </button>
          </Link>
        )}
        </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-green-light min-h-screen flex mt-20 justify-center items-center flex-wrap">
        <div className="max-w-4xl w-full text-center p-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Access Free AI Generated Images
          </h1>

          <Link href="/app">
          <button className="explore2 bg-white text-green-dark px-3 py-3 rounded-lg text-l hover:bg-green-dark hover:text-white transition duration-300 ease-in-out mr-4">
            Explore Now!
          </button>
        </Link>

          <div className="grid grid-cols-2 md:grid-cols-4 card gap-5 mt-10">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
              <div key={index} className="relative">
                <img
                  src={`/${index === 6 ? `${index}.avif` : `${index}.png`}`}
                  alt={`Image ${index}`}
                  className="rounded-lg object-cover hover:opacity-90 transition duration-300 ease-in-out"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
