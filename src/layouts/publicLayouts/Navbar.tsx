import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material"
import { HeartPulse } from "lucide-react"
import { NavLink } from "react-router-dom"

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
   { label: "Doctors", to: "/doctors" },
  { label: "Hospitals", to: "/hospitals" },
   { label: "News", to: "/news" },
  { label: "About us", to: "/about" },
  { label: "Contact us", to: "/contact" },
  { label: "Blood", to: "/blood" },
 
]

const primaryGradient = "linear-gradient(135deg, #16C7D9 0%, #08AFC3 100%)"
const hoverGradient = "linear-gradient(135deg, #08AFC3 0%, #30345F 100%)"

const Navbar = () => {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        background: "linear-gradient(90deg, #FFFFFF 0%, #EAFBFC 50%, #D9F6F8 100%)",
        borderBottom: "1px solid #CDECEF",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", gap: 2, px: { xs: 2, md: 6 } }}>
        {/* Left: logo */}
        <Box
          component={NavLink}
          to="/"
          sx={{ display: "flex", alignItems: "center", gap: 1, textDecoration: "none" }}
        >
          <HeartPulse size={28} color="#16C7D9" />
          <Typography
            variant="h6"
            sx={{
              fontWeight: 800,
              background: hoverGradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Seva
          </Typography>
        </Box>

        {/* Middle: page links (hidden on small screens) */}
        <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 0.5 }}>
          {navLinks.map((link) => (
            <Button
              key={link.to}
              component={NavLink}
              to={link.to}
              end={link.to === "/"}
              color="secondary"
              sx={{
                fontWeight: 600,
                borderRadius: 999,
                px: 2,
                transition: "all 0.2s ease",
                "&:hover": {
                  background: primaryGradient,
                  color: "#FFFFFF",
                },
                "&.active": {
                  background: primaryGradient,
                  color: "#FFFFFF",
                },
              }}
            >
              {link.label}
            </Button>
          ))}
        </Box>

        {/* Right: Login / Sign up */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Button
            component={NavLink}
            to="/Login"
            variant="outlined"
            size="small"
            sx={{
              borderRadius: 999,
              px: 2.5,
              "&:hover": {
                background: primaryGradient,
                color: "#FFFFFF",
                borderColor: "transparent",
              },
            }}
          >
            Login
          </Button>
          <Button
            component={NavLink}
            to="/Signup"
            variant="contained"
            size="small"
            disableElevation
            sx={{
              borderRadius: 999,
              px: 2.5,
              background: primaryGradient,
              "&:hover": { background: hoverGradient },
            }}
          >
            Sign up
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar