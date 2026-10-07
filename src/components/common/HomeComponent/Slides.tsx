import { useEffect, useRef } from "react"
import { Box, Button, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import type { SlidesProps, VideoSlideProps } from "../../../types/interface/Slides.interface"

const VideoSlide = ({ src, isActive }: VideoSlideProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.muted = true
    if (isActive) {
      video.currentTime = 0
      video.play().catch((err) => console.error("Video play failed:", err))
    } else {
      video.pause()
    }
  }, [isActive])

  return (
    <video
      ref={videoRef}
      src={src}
      muted
      loop
      playsInline
      preload="auto"
      onError={() => console.error("Video failed to load:", src)}
      className="h-full w-full object-cover"
    />
  )
}

// Renders ALL slides stacked on top of each other; only the active one is visible (cross-fade)
const Slides = ({ slides, current }: SlidesProps) => {
  return (
    <>
      {slides.map((slide, index) => {
        const isActive = index === current

        return (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-700 ${
              isActive ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
            aria-hidden={!isActive}
          >
            {slide.type === "video" ? (
              <VideoSlide src={slide.src} isActive={isActive} />
            ) : (
              <img src={slide.src} alt={slide.title} className="h-full w-full object-cover" />
            )}

            {/* Dark-to-transparent overlay so the text is readable */}
            <div className="absolute inset-0 bg-linear-to-r from-medical-navy/85 via-medical-navy/40 to-transparent" />

            {/* Text content */}
            <div className="absolute inset-0 flex items-center px-6 md:px-16">
              <Box sx={{ maxWidth: 560 }}>
                <Typography
                  variant="h3"
                  sx={{ color: "#FFFFFF", fontSize: { xs: "1.9rem", md: "3rem" } }}
                >
                  {slide.title}
                </Typography>
                <Typography
                  sx={{ color: "#E6F7F9", mt: 2, mb: 3, fontSize: { xs: "1rem", md: "1.15rem" } }}
                >
                  {slide.subtitle}
                </Typography>
                <Button
                  component={Link}
                  to="/Signup"
                  variant="contained"
                  size="large"
                  disableElevation
                  sx={{
                    borderRadius: 999,
                    px: 4,
                    background: "linear-gradient(135deg, #16C7D9 0%, #08AFC3 100%)",
                    "&:hover": { background: "linear-gradient(135deg, #08AFC3 0%, #30345F 100%)" },
                  }}
                >
                  Get started
                </Button>
              </Box>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Slides