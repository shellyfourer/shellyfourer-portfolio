import ProjectsCarousel from '@/components/projects/ProjectsCarousel'

export const metadata = {
  title: 'Projects — Shelly Fourer',
  description: 'Design + development — end to end.',
}

export default function ProjectsPage() {
  return (
    <div className="font-sans text-foreground flex-1 flex flex-col">
      <ProjectsCarousel />
    </div>
  )
}