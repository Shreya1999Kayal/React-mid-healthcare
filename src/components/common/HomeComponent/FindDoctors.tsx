import { Button, Typography } from "@mui/material"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import DoctorCard from "./DoctorCard"
import { doctorsList, Home_Doctors_Count } from "../../../constants/doctors.constants"


const FindDoctors = () => {

  const featuredDoctors = doctorsList.slice(0, Home_Doctors_Count)

  return (
    <section className="w-full bg-medical-bg px-6 py-16 md:px-16">
      {/* Heading */}
      <div className="mx-auto max-w-2xl text-center">
        <Typography
          variant="h3"
          sx={{ fontSize: { xs: "1.8rem", md: "2.5rem" }, lineHeight: 1.2 }}
        >
          Meet Our Specialists
        </Typography>
        <Typography sx={{ color: "text.secondary", mt: 2 }}>
          Meet our verified specialists and book an appointment with the doctor you trust.
        </Typography>
      </div>

      {/* Doctor cards */}
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featuredDoctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>

      {/* See more */}
      <div className="mt-10 flex justify-center">
        <Button
          component={Link}
          to="/doctors"
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

export default FindDoctors