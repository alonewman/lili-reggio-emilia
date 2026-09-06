import Navbar from './components/Navbar'
import Hero from './components/Hero'
import DifferenceSection from './components/sections/DifferenceSection'
import CapabilitiesSection from './components/sections/CapabilitiesSection'
import ExamplesSection from './components/sections/ExamplesSection'
import MemorySection from './components/sections/MemorySection'
import ActionPipelineSection from './components/sections/ActionPipelineSection'
import EcosystemSection from './components/sections/EcosystemSection'
import DashboardSection from './components/sections/DashboardSection'
import ImpactSection from './components/sections/ImpactSection'
import CharacterSection from './components/sections/CharacterSection'
import ClosingSection from './components/sections/ClosingSection'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <DifferenceSection />
      <CapabilitiesSection />
      <ExamplesSection />
      <MemorySection />
      <ActionPipelineSection />
      <EcosystemSection />
      <DashboardSection />
      <ImpactSection />
      <CharacterSection />
      <ClosingSection />
    </>
  )
}
