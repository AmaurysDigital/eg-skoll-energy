import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-50 text-gray-800 text-center p-10">
      <h1 className="text-6xl font-extrabold text-emerald-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Página no encontrada</h2>
      <p className="text-gray-600 max-w-md mb-6">
        Lo sentimos, la página que buscas no existe o ha sido movida.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-emerald-600 text-white font-semibold rounded-full shadow-md hover:bg-emerald-700 transition"
      >
        Volver al inicio
      </Link>
    </div>
  )
}
