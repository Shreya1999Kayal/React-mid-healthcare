import { Button, Typography } from "@mui/material"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import HospitalCard from "./HospitalCard"
import { Home_Hospitals_Count, hospitalsList } from "../../../constants/hospital.constants"

const FindHospitals = () => {
  const featuredHospitals = hospitalsList.slice(0, Home_Hospitals_Count)

  return (
    <section className="w-full bg-white px-6 py-16 md:px-16">
      {/* Heading */}
      <div className="mx-auto max-w-2xl text-center">
        <Typography
          variant="h3"
          sx={{ fontSize: { xs: "1.8rem", md: "2.5rem" }, lineHeight: 1.2 }}
        >
          Our Hospitals
        </Typography>
        <Typography sx={{ color: "text.secondary", mt: 2 }}>
          Verified hospitals with trusted care, emergency support and easy appointment booking.
        </Typography>
      </div>

      {/* Hospital cards */}
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredHospitals.map((hospital) => (
          <HospitalCard key={hospital.id} hospital={hospital} />
        ))}
      </div>

      {/* See more */}
      <div className="mt-10 flex justify-center">
        <Button
          component={Link}
          to="/hospitals"
          variant="contained"
          size="large"
          disableElevation
          endIcon={<ArrowRight size={18} />}
          sx={{
            borderRadius: 999,
            px: 4,
            background: "linear-gradient(135deg, #16C7D9 0%, #08AFC3 100%)",
            "&:hover": { background: "linear-gradient(135deg, #08AFC3 0%, #30345F 100%)" },
          }}
        >
          See more
        </Button>
      </div>
    </section>
  )
}

export default FindHospitals