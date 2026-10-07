import { useState } from "react"
import { Typography } from "@mui/material"
import { Link } from "react-router-dom"
import type { DoctorCardProps } from "../../../types/interface/Doctor.interface"

// "Dr. Leslie Alexander" -> "LA"
const getInitials = (name: string) =>
  name
    .replace("Dr.", "")
    .trim()
    .split(" ")
    .map((word) => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase()

const DoctorCard = ({ doctor }: DoctorCardProps) => {
  const [imageFailed, setImageFailed] = useState(false)

  return (
    <Link
      to={`/doctors/${doctor.id}`}
      className="block rounded-3xl border border-medical-border bg-white p-3 text-center shadow-md shadow-medical-navy/10 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-medical-navy/25"
    >
      {/* Photo (same teal gradient as the rest of the site, shows behind the photo) */}
      <div className="aspect-square w-full overflow-hidden rounded-2xl bg-linear-to-b from-medical-bg-soft to-medical-primary">
        {imageFailed ? (
          <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-medical-primary to-medical-navy text-5xl font-bold text-white">
            {getInitials(doctor.name)}
          </div>
        ) : (
          <img
            src={doctor.image}
            alt={doctor.name}
            onError={() => setImageFailed(true)}
            className="h-full w-full object-cover object-top"
          />
        )}
      </div>

      {/* Name + speciality */}
      <div className="px-2 pb-3 pt-4">
        <Typography sx={{ fontWeight: 700, color: "secondary.main" }}>
          {doctor.name}
        </Typography>
        <span className="mt-2 inline-block rounded-full bg-medical-bg px-3 py-1 text-xs font-semibold text-medical-primary-dark">
          {doctor.speciality}
        </span>
      </div>
    </Link>
  )
}

export default DoctorCard