import { useState } from "react"
import { Button, Typography } from "@mui/material"
import { Hospital as HospitalIcon, MapPin, Star } from "lucide-react"
import { Link } from "react-router-dom"
import type { HospitalCardProps } from "../../../types/interface/Hospital.interface"

const primaryGradient = "linear-gradient(135deg, #16C7D9 0%, #08AFC3 100%)"
const hoverGradient = "linear-gradient(135deg, #08AFC3 0%, #30345F 100%)"

const HospitalCard = ({ hospital }: HospitalCardProps) => {
  const [imageFailed, setImageFailed] = useState(false)

  return (
    <div className="flex flex-col rounded-3xl border border-medical-border bg-linear-to-b from-medical-bg-soft/70 to-white p-4 shadow-md shadow-medical-navy/10 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-medical-navy/25">
      {/* Name, category and rating */}
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <Typography sx={{ fontWeight: 700, color: "secondary.main" }} noWrap>
            {hospital.name}
          </Typography>
          <span className="text-xs font-medium text-medical-muted">{hospital.category}</span>
        </div>

        <span className="flex shrink-0 items-center gap-1 rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-medical-navy shadow-sm">
          <Star size={12} className="fill-amber-400 text-amber-400" />
          {hospital.rating.toFixed(1)}
        </span>
      </div>

      {/* Photo */}
      <div className="mt-3 aspect-4/3 w-full overflow-hidden rounded-2xl bg-linear-to-b from-medical-bg-soft to-medical-primary">
        {imageFailed ? (
          <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-medical-primary to-medical-navy text-white">
            <HospitalIcon size={56} />
          </div>
        ) : (
          <img
            src={hospital.image}
            alt={hospital.name}
            onError={() => setImageFailed(true)}
            className="h-full w-full object-cover"
          />
        )}
      </div>

      {/* Location + short bio */}
      <div className="mt-4 flex-1">
        <span className="flex items-center gap-1 text-xs font-semibold text-medical-primary-dark">
          <MapPin size={14} />
          {hospital.location}
        </span>
        <Typography
          sx={{ color: "text.secondary", fontSize: "0.85rem", mt: 1 }}
          className="line-clamp-3"
        >
          {hospital.bio}
        </Typography>
      </div>

      {/* Actions */}
      <div className="mt-4 flex gap-3">
        <Button
          component={Link}
          to={`/hospitals/${hospital.id}`}
          variant="outlined"
          size="small"
          fullWidth
          sx={{
            borderRadius: 999,
            textTransform: "none",
            fontWeight: 600,
            borderColor: "#16C7D9",
            color: "#08AFC3",
            "&:hover": { borderColor: "#08AFC3", bgcolor: "#EAFBFC" },
          }}
        >
          View details
        </Button>
        <Button
          component={Link}
          to="/Login"
          variant="contained"
          size="small"
          fullWidth
          disableElevation
          sx={{
            borderRadius: 999,
            textTransform: "none",
            fontWeight: 600,
            background: primaryGradient,
            "&:hover": { background: hoverGradient },
          }}
        >
          Book appointment
        </Button>
      </div>
    </div>
  )
}

export default HospitalCard