import { Hero } from './components/Hero'
import dynamic from 'next/dynamic'
import { FlowBackground } from './components/home/FlowBackground'

// Skeleton helpers kept very small to avoid layout shift
function SectionSkeleton({ className }: { className?: string }) {
  return (
    <div className={`animate-pulse px-6 max-w-7xl mx-auto ${className || ''}`}>
      <div className="h-8 w-40 bg-white/10 rounded mb-6" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-24 bg-white/5 rounded-xl" />
        ))}
      </div>
    </div>
  )
}

const StatsBar = dynamic(() => import('./components/home/StatsBar').then(m => m.StatsBar), {
  loading: () => <SectionSkeleton className="pt-16 md:pt-20" />
})

const Services = dynamic(() => import('./components/home/Services').then(m => m.Services), {
  loading: () => <SectionSkeleton className="pt-16 md:pt-20" />
})

const FeaturedProjects = dynamic(() => import('./components/home/FeaturedProjects').then(m => m.FeaturedProjects), {
  loading: () => <SectionSkeleton className="pt-16 md:pt-20" />
})

export default function Home() {
  return (
    <main className="relative flex flex-col gap-0 bg-black text-white overflow-hidden">
      <FlowBackground className="z-0" />
      <div className="relative z-10">
  <Hero />
  <StatsBar />
  <Services />
  <FeaturedProjects />
      </div>
    </main>
  )
}