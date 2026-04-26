import { useEffect, useState } from "react"

import Header from "./components/Header"
import HeaderSp from "./components/HeaderSp"
import FloatingRequest from "./components/FloatingRequest"
import FloatingRequestSp from "./components/FloatingRequestSp"
import FlowBand from "./components/FlowBand"
import FlowBandSp from "./components/FlowBandSp"

import Hero from "./sections/Hero"
import HeroSp from "./sections/HeroSp"
import Problem from "./sections/Problem"
import ProblemSp from "./sections/ProblemSp"
import Concept from "./sections/Concept"
import ConceptSp from "./sections/ConceptSp"
import Service from "./sections/Service"
import ServiceSp from "./sections/ServiceSp"
import UseCases from "./sections/UseCases"
import UseCasesSp from "./sections/UseCasesSp"
import Strength from "./sections/Strength"
import StrengthSp from "./sections/StrengthSp"
import Process from "./sections/Process"
import ProcessSp from "./sections/ProcessSp"
import FAQ from "./sections/FAQ"
import FAQSp from "./sections/FAQSp"
import Contact from "./sections/Contact"
import ContactSp from "./sections/ContactSp"
import Footer from "./sections/Footer"
import FooterSp from "./sections/FooterSp"

function useIsSp() {
  const [isSp, setIsSp] = useState(() => {
    if (typeof window === "undefined") return false
    return window.matchMedia("(max-width: 767px)").matches
  })

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)")

    const handleChange = () => {
      setIsSp(media.matches)
    }

    handleChange()
    media.addEventListener("change", handleChange)

    return () => {
      media.removeEventListener("change", handleChange)
    }
  }, [])

  return isSp
}

function PcLayout() {
  return (
    <>
      <Header />

      <main id="main-content">
        <Hero />
        <FlowBand />
        <Problem />
        <Concept />
        <Service />
        <UseCases />
        <Strength />
        <Process />
        <FAQ />
        <Contact />
      </main>

      <Footer />
      <FloatingRequest />
    </>
  )
}

function SpLayout() {
  return (
    <>
      <HeaderSp />

      <main id="main-content">
        <HeroSp />
        <FlowBandSp />
        <ProblemSp />
        <ConceptSp />
        <ServiceSp />
        <UseCasesSp />
        <StrengthSp />
        <ProcessSp />
        <FAQSp />
        <ContactSp />
      </main>

      <FooterSp />
      <FloatingRequestSp />
    </>
  )
}

export default function App() {
  const isSp = useIsSp()

  return (
    <div className="min-h-screen bg-nexus-bg text-nexus-ink">
      {isSp ? <SpLayout /> : <PcLayout />}
    </div>
  )
}