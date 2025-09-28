import { Hero } from './components/Hero'
import { StatsBar } from './components/home/StatsBar'
import { Services } from './components/home/Services'
import { FeaturedProjects } from './components/home/FeaturedProjects'

export default function Home() {
  return (
    <main className="flex flex-col gap-0">
      <Hero />
      <StatsBar />
      <Services />
      <FeaturedProjects />
    </main>
  )
}