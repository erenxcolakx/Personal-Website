import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 py-24">
      <p className="text-sm font-semibold tracking-wider text-blue-500 mb-4">404</p>
      <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Page Not Found</h1>
      <p className="text-gray-600 dark:text-gray-400 max-w-md mb-10">
        The page you’re looking for doesn’t exist or was moved. You can go back home or explore selected work.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/" className="px-6 py-3 rounded-full text-sm font-medium bg-white text-black dark:bg-white dark:text-black shadow hover:shadow-lg transition">Go Home</Link>
        <Link href="/projects" className="px-6 py-3 rounded-full text-sm font-medium border border-white/20 text-white bg-black/40 dark:bg-white/10 hover:bg-black/70 dark:hover:bg-white/20 transition">View Projects</Link>
      </div>
    </main>
  )
}