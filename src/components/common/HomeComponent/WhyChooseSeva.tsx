import { useState } from "react"
import { Button, Typography } from "@mui/material"
import { CircleCheck, HeartPulse } from "lucide-react"
import { Link } from "react-router-dom"

const reasons = [
  "Doctors, hospitals and blood banks together in one place",
  "Book appointments online without waiting in queues",
  "Live blood availability and urgent blood requests",
  "Ambulance, ICU and oxygen bed help when every minute counts",
  "Verified doctors, hospitals and blood banks you can trust",
]

// Put your picture at public/images/why-seva.png (transparent PNG works best)
const IMAGE_SRC = "/images/why-seva.png"

const WhyChooseSeva = () => {
  const [imageFailed, setImageFailed] = useState(false)

  return (
    <section className="w-full bg-linear-to-b from-white to-medical-bg px-6 py-16 md:px-16">
      <div className="grid items-center gap-12 md:grid-cols-2">
        
        {/* Left: picture (sizes itself, no background panel) */}
        <div className="flex justify-center">
          {imageFailed ? (
            <div className="flex h-72 w-full max-w-lg items-center justify-center rounded-3xl border border-medical-border text-medical-primary">
              <HeartPulse size={96} />
            </div>
          ) : (
            <img
              src={IMAGE_SRC}
              alt="Seva healthcare"
              onError={() => setImageFailed(true)}
              className="h-auto w-full max-w-lg rounded-3xl object-cover shadow-xl shadow-medical-navy/15"
            />
          )}
        </div>

        {/* Right: heading, checklist, button */}
        <div>
          <Typography
            variant="h3"
            sx={{ fontSize: { xs: "1.8rem", md: "2.5rem" }, lineHeight: 1.2 }}
          >
            Why you choose Seva
          </Typography>
          <Typography sx={{ color: "text.secondary", mt: 2, mb: 4, maxWidth: 460 }}>
            Seva gives you the tools and information you need to get care faster and with confidence.
          </Typography>

          <ul className="mb-8 flex flex-col gap-4">
            {reasons.map((reason) => (
              <li key={reason} className="flex items-start gap-3">
                <span className="mt-0.5 shrink-0 text-medical-primary">
                  <CircleCheck size={22} />
                </span>
                <Typography sx={{ color: "secondary.main", fontWeight: 500, fontSize: "0.95rem" }}>
                  {reason}
                </Typography>
              </li>
            ))}
          </ul>

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
        </div>
      </div>
    </section>
  )
}

export default WhyChooseSeva