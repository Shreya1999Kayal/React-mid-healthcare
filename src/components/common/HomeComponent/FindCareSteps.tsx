import { useState } from "react"
import { Typography } from "@mui/material"
import { CalendarCheck, FileText, Search } from "lucide-react"
import type { LucideIcon } from "lucide-react"

type Step = { title: string; description: string; icon: LucideIcon }

const steps: Step[] = [
  {
    title: "Search nearby care",
    description:
      "Find doctors, hospitals and blood banks near you by speciality, blood group or availability.",
    icon: Search,
  },
  {
    title: "Book an appointment",
    description:
      "Pick the doctor you trust and schedule a visit in a few taps, online or at the clinic.",
    icon: CalendarCheck,
  },
  {
    title: "Consult and keep your records",
    description:
      "Meet your doctor, then keep your prescriptions and medical records safe in your Seva account.",
    icon: FileText,
  },
]

// Put your picture at public/images/doctor.png (transparent PNG works best)
const IMAGE_SRC = "/images/doctor.jpeg"

const FindCareSteps = () => {
  const [imageFailed, setImageFailed] = useState(false)

  return (
    <section className="w-full bg-white px-6 py-16 md:px-16">
      <div className="grid items-center gap-12 md:grid-cols-2">
        {/* Left: heading + steps */}
        <div>
          <Typography
            variant="h3"
            sx={{ fontSize: { xs: "1.8rem", md: "2.5rem" }, lineHeight: 1.2 }}
          >
            Find the right healthcare service at your fingertips
          </Typography>
          <Typography sx={{ color: "text.secondary", mt: 2, mb: 5, maxWidth: 480 }}>
            Seva brings doctors, hospitals, blood banks and emergency help together in one place.
          </Typography>

          <div>
            {steps.map((step, index) => {
              const Icon = step.icon
              const isLast = index === steps.length - 1
              return (
                <div key={step.title} className="flex gap-4">
                  {/* Icon + connector line */}
                  <div className="flex flex-col items-center">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-medical-bg-soft to-medical-primary/40 text-medical-navy">
                      <Icon size={20} />
                    </span>
                    {!isLast && <span className="my-1 min-h-8 w-px flex-1 bg-medical-border" />}
                  </div>

                  {/* Text */}
                  <div className={isLast ? "" : "pb-6"}>
                    <Typography sx={{ fontWeight: 700, color: "secondary.main", mt: 1 }}>
                      {step.title}
                    </Typography>
                    <Typography sx={{ color: "text.secondary", fontSize: "0.9rem", mt: 0.5, maxWidth: 420 }}>
                      {step.description}
                    </Typography>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Right: picture with rings */}
        <div className="flex justify-center">
          <div className="relative flex aspect-square w-full max-w-md items-center justify-center">
            {/* Outer rings */}
            <span className="absolute inset-0 rounded-full border border-medical-border" />
            <span className="absolute inset-6 rounded-full border border-medical-border/70" />

            {/* Gradient circle */}
            <div className="relative flex h-[78%] w-[78%] items-end justify-center overflow-hidden rounded-full bg-linear-to-br from-medical-bg-soft via-medical-primary to-medical-navy shadow-xl shadow-medical-navy/20">
              {!imageFailed && (
                <img
                  src={IMAGE_SRC}
                  alt="Doctor ready to help"
                  onError={() => setImageFailed(true)}
                  className="h-full w-full object-cover object-top"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FindCareSteps

