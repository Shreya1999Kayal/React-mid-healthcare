import { Typography } from "@mui/material"
import { HeartPulse, Mail, MapPin, Phone } from "lucide-react"
import { Link } from "react-router-dom"

const careLinks = [
  { label: "Find doctors", to: "/doctors" },
  { label: "Hospitals", to: "/hospitals" },
  { label: "Blood banks", to: "/blood-banks" },
  { label: "Blood donors", to: "/donors" },
  { label: "Blood camps", to: "/blood-camps" },
  { label: "Emergency help", to: "/emergency" },
]

const companyLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "News", to: "/news" },
  { label: "About us", to: "/about" },
  { label: "Contact us", to: "/contact" },
]

const linkClass = "text-sm text-white/75 transition-colors hover:text-medical-primary"

const Footer = () => {
  return (
    <footer className="w-full bg-linear-to-br from-medical-navy via-medical-navy to-[#1E2148] px-6 pt-14 pb-6 text-white md:px-16">
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <Link to="/" className="flex items-center gap-2 no-underline">
            <HeartPulse size={28} color="#16C7D9" />
            <Typography variant="h6" sx={{ fontWeight: 800, color: "#FFFFFF" }}>
              Seva
            </Typography>
          </Link>
          <Typography sx={{ color: "rgba(255,255,255,0.75)", fontSize: "0.9rem", mt: 2, maxWidth: 280 }}>
            Doctors, hospitals, blood banks and emergency help together in one place, so care is
            never far away.
          </Typography>
        </div>

        {/* Find care */}
        <div>
          <h3 className="mb-4 text-base font-bold text-white">Find care</h3>
          <ul className="flex flex-col gap-3">
            {careLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className={linkClass}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="mb-4 text-base font-bold text-white">Company</h3>
          <ul className="flex flex-col gap-3">
            {companyLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className={linkClass}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-4 text-base font-bold text-white">Contact</h3>
          <ul className="flex flex-col gap-3 text-sm text-white/75">
            <li className="flex items-start gap-3">
              <Phone size={18} className="mt-0.5 shrink-0 text-medical-primary" />
              <span>+91 00000 00000</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={18} className="mt-0.5 shrink-0 text-medical-primary" />
              <span>support@seva.com</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-medical-primary" />
              <span>Your address here</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/15 pt-6 text-sm text-white/60 md:flex-row">
        <p>© {new Date().getFullYear()} Seva. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="/privacy" className="transition-colors hover:text-medical-primary">
            Privacy policy
          </Link>
          <Link to="/terms" className="transition-colors hover:text-medical-primary">
            Terms of use
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer