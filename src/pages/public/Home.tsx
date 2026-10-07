import { useCallback, useEffect, useState } from "react"
import { IconButton } from "@mui/material"
import { ChevronLeft, ChevronRight } from "lucide-react"
import PopularSearches from "../../components/common/HomeComponent/PopularSearches"
import FindCareSteps from "../../components/common/HomeComponent/FindCareSteps"
import WhyChooseSeva from "../../components/common/HomeComponent/WhyChooseSeva"
import Slides from "../../components/common/HomeComponent/Slides"
import { slides, SLIDE_DURATION } from "../../constants/slides.constants"
import FindDoctors from "../../components/common/HomeComponent/FindDoctors"
import FindHospitals from "../../components/common/HomeComponent/FindHospitals"
import FindBlood from "../../components/common/HomeComponent/FindBlood"

const Home = () => {
  const [current, setCurrent] = useState(0)

  // The modulo makes the slider loop: last -> first, first -> last
  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), [])
  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + slides.length) % slides.length),
    []
  )

  // Auto slide. Re-runs whenever `current` changes (auto or manual),
  // so every click on an arrow or dot restarts the 5 second timer.
  useEffect(() => {
    const timer = setTimeout(next, SLIDE_DURATION)
    return () => clearTimeout(timer)
  }, [current, next])

  return (
    <>
      <section
        className="relative h-[70vh] min-h-105 w-full overflow-hidden bg-medical-navy"
        aria-roledescription="carousel"
        aria-label="Featured healthcare services"
      >
        {/* Slides (stacked, cross-fade) */}
        <Slides slides={slides} current={current} />

        {/* Previous arrow */}
        <IconButton
          onClick={prev}
          aria-label="Previous slide"
          sx={{
            position: "absolute",
            left: { xs: 8, md: 24 },
            top: "50%",
            transform: "translateY(-50%)",
            color: "#FFFFFF",
            bgcolor: "rgba(48, 52, 95, 0.45)",
            "&:hover": { background: "linear-gradient(135deg, #16C7D9 0%, #08AFC3 100%)" },
          }}
        >
          <ChevronLeft />
        </IconButton>

        {/* Next arrow */}
        <IconButton
          onClick={next}
          aria-label="Next slide"
          sx={{
            position: "absolute",
            right: { xs: 8, md: 24 },
            top: "50%",
            transform: "translateY(-50%)",
            color: "#FFFFFF",
            bgcolor: "rgba(48, 52, 95, 0.45)",
            "&:hover": { background: "linear-gradient(135deg, #16C7D9 0%, #08AFC3 100%)" },
          }}
        >
          <ChevronRight />
        </IconButton>

        {/* Dots */}
        <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.src}
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${index === current ? "w-8 bg-medical-primary" : "w-2.5 bg-white/60 hover:bg-white"
                }`}
            />
          ))}
        </div>
      </section>
      <WhyChooseSeva />
      <FindCareSteps />
      <FindDoctors />
      <FindHospitals />
      <FindBlood />
      <PopularSearches />

      
    </>
  )
}

export default Home