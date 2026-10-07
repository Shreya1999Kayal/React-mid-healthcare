
import { Button, Typography } from "@mui/material"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { bloodServices } from "../../../constants/bloods.constants"
import BloodCard from "./BloodCard"


const FindBlood = () => {
  return (
    <section className="w-full bg-medical-bg px-6 py-16 md:px-16">
      {/* Heading */}
      <div className="mx-auto max-w-2xl text-center">
        <Typography
          variant="h3"
          sx={{ fontSize: { xs: "1.8rem", md: "2.5rem" }, lineHeight: 1.2 }}
        >
          Blood when it matters
        </Typography>
        <Typography sx={{ color: "text.secondary", mt: 2 }}>
          Find donors, join a donation camp or check blood banks near you, all in one place.
        </Typography>
      </div>

      {/* Cards */}
      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {bloodServices.map((service) => (
          <BloodCard key={service.id} service={service} />
        ))}
      </div>

      {/* Explore */}
      <div className="mt-10 flex justify-center">
        <Button
          component={Link}
          to="/blood"
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
          Explore blood services
        </Button>
      </div>
    </section>
  )
}

export default FindBlood