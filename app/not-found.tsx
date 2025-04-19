// app/not-found.tsx
export default function NotFound() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-6xl font-bold text-blue-600">404</h1>
        <p className="text-lg text-gray-700 mt-4">Oops! The page you're looking for doesn't exist.</p>
        <a href="/" className="mt-6 inline-block text-blue-500 hover:underline">
          Go back to Home
        </a>
      </div>
    );
  }
  