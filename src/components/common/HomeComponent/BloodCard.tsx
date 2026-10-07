import { useState } from "react"
import { Typography } from "@mui/material"
import { ArrowRight, Droplet } from "lucide-react"
import { Link } from "react-router-dom"
import type { BloodCardProps } from "../../../types/interface/Blood.interface"


const BloodCard = ({ service }: BloodCardProps) => {
  const [imageFailed, setImageFailed] = useState(false)

  return (
    // The whole card is one link. The "button" inside is a span (a button inside a link is invalid HTML).
    <Link
      to={service.path}
      className="group flex flex-col rounded-3xl border border-medical-border bg-white p-4 shadow-md shadow-medical-navy/10 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-medical-navy/25 md:flex-row md:items-center md:gap-5 lg:flex-col lg:items-stretch lg:gap-0"
    >
      {/* Photo: top on mobile, left on tablet, top again on large screens */}
      <div className="h-48 w-full shrink-0 overflow-hidden rounded-2xl bg-linear-to-b from-red-100 to-red-400 md:h-44 md:w-52 lg:h-44 lg:w-full">
        {imageFailed ? (
          <div className="flex h-full w-full items-center justify-center text-white">
            <Droplet size={56} />
          </div>
        ) : (
          <img
            src={service.image}
            alt={service.title}
            onError={() => setImageFailed(true)}
            className="h-full w-full object-cover"
          />
        )}
      </div>

      {/* Text */}
      <div className="flex flex-1 flex-col justify-between pt-4 md:pt-0 lg:pt-4">
        <div>
          <span className="inline-block rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-600">
            {service.highlight}
          </span>
          <Typography sx={{ fontWeight: 700, color: "secondary.main", fontSize: "1.2rem", mt: 1.5 }}>
            {service.title}
          </Typography>
          <Typography sx={{ color: "text.secondary", fontSize: "0.9rem", mt: 1, mb: 3 }}>
            {service.description}
          </Typography>
        </div>

        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-medical-border bg-medical-bg px-4 py-2 text-sm font-semibold text-medical-navy transition-colors group-hover:border-transparent group-hover:bg-medical-primary group-hover:text-white">
            {service.buttonLabel}
            <ArrowRight size={16} />
          </span>
        </div>
      </div>
    </Link>
  )
}

export default BloodCard