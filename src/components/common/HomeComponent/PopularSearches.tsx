import { useState } from "react"
import { Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import type { LucideIcon } from "lucide-react"
import {
    Activity,
    Ambulance,
    BedDouble,
    Baby,
    Bone,
    Brain,
    Building2,
    CalendarDays,
    CalendarRange,
    Clock,
    Droplet,
    Droplets,
    Ear,
    Eye,
    Hospital,
    MapPin,
    ShieldCheck,
    Siren,
    Smile,
    Stethoscope,
    HeartPulse,
    Users,
    Wind,
} from "lucide-react"

type SearchItem = { label: string; icon: LucideIcon }

type Category = {
    id: string
    label: string
    path: string
    items: SearchItem[]
}

const categories: Category[] = [
    {
        id: "doctors",
        label: "Doctors",
        path: "/doctors",
        items: [
            { label: "Cardiologist", icon: HeartPulse },
            { label: "Dermatologist", icon: Activity },
            { label: "Pediatrician", icon: Baby },
            { label: "General physician", icon: Stethoscope },
            { label: "Dentist", icon: Smile },
            { label: "ENT", icon: Ear },
            { label: "Neurologist", icon: Brain },
            { label: "Orthopedic", icon: Bone },
        ],
    },
    {
        id: "hospitals",
        label: "Hospitals",
        path: "/hospitals",
        items: [
            { label: "Multi-speciality", icon: Hospital },
            { label: "Emergency & trauma", icon: Siren },
            { label: "Children's", icon: Baby },
            { label: "Eye care", icon: Eye },
            { label: "NABH accredited", icon: ShieldCheck },
            { label: "Hospitals near me", icon: MapPin },
        ],
    },
    {
        id: "blood-banks",
        label: "Blood banks",
        path: "/blood-banks",
        items: [
            { label: "Near me", icon: MapPin },
            { label: "Open 24x7", icon: Clock },
            { label: "A+ available", icon: Droplet },
            { label: "O+ available", icon: Droplet },
            { label: "Plasma & platelets", icon: Droplets },
        ],
    },
    {
        id: "donors",
        label: "Blood donors",
        path: "/donors",
        items: [
            { label: "A+", icon: Droplet },
            { label: "B+", icon: Droplet },
            { label: "O+", icon: Droplet },
            { label: "AB+", icon: Droplet },
            { label: "Negative groups", icon: Droplets },
        ],
    },
    {
        id: "camps",
        label: "Blood camps",
        path: "/blood-camps",
        items: [
            { label: "Camps near me", icon: MapPin },
            { label: "This week", icon: CalendarDays },
            { label: "This month", icon: CalendarRange },
            { label: "Blood bank camps", icon: Building2 },
            { label: "Health check-up", icon: Users },
        ],
    },
    {
        id: "emergency",
        label: "Emergency",
        path: "/emergency",
        items: [
            { label: "Ambulance", icon: Ambulance },
            { label: "ICU beds", icon: BedDouble },
            { label: "Oxygen beds", icon: Wind },
            { label: "Urgent blood", icon: Droplet },
        ],
    },
]

// Same teal gradient used on the buttons across the site
const primaryGradient = "bg-[linear-gradient(135deg,#16C7D9_0%,#08AFC3_100%)]"

const PopularSearches = () => {
    const navigate = useNavigate()
    const [activeId, setActiveId] = useState(categories[0].id)
    const [selected, setSelected] = useState(0)

    const activeCategory = categories.find((c) => c.id === activeId) ?? categories[0]

    const handleTabClick = (id: string) => {
        setActiveId(id)
        setSelected(0)
    }

    const handleChipClick = (index: number, label: string) => {
        setSelected(index)
        navigate(`${activeCategory.path}?search=${encodeURIComponent(label)}`)
    }

    return (
        <section className="w-full bg-linear-to-b from-white to-medical-bg px-6 py-16 md:px-16">
            <Typography
                variant="h3"
                sx={{ fontSize: { xs: "1.8rem", md: "2.5rem" }, mb: { xs: 4, md: 6 } }}
            >
                Popular searches on Seva
            </Typography>

            <div className="flex flex-col gap-6 md:flex-row md:gap-12">
                {/* Left: category tabs */}
                <div
                    role="tablist"
                    aria-orientation="vertical"
                    className="flex shrink-0 gap-2 overflow-x-auto pb-2 md:w-56 md:flex-col md:overflow-visible md:pb-0"
                >
                    {categories.map((category) => {
                        const isActive = category.id === activeId
                        return (
                            <button
                                key={category.id}
                                role="tab"
                                aria-selected={isActive}
                                onClick={() => handleTabClick(category.id)}
                                className={`relative cursor-pointer whitespace-nowrap rounded-xl border px-5 py-3 text-left text-base transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-medical-primary ${isActive
                                    ? "border-medical-border bg-white font-bold text-medical-navy shadow-md shadow-medical-navy/10"
                                    : "border-transparent font-medium text-medical-muted hover:bg-white/70 hover:text-medical-navy"
                                    }`}
                            >
                                {/* Active indicator bar (desktop only) */}
                                {isActive && (
                                    <span
                                        aria-hidden="true"
                                        className={`absolute left-0 top-1/2 hidden h-6 w-1 -translate-y-1/2 rounded-r-full md:block ${primaryGradient}`}
                                    />
                                )}
                                {category.label}
                            </button>
                        )
                    })}
                </div>

                {/* Right: pill chips (wrap onto new lines, no sideways scroll) */}
                <div className="flex min-w-0 flex-1 flex-wrap content-start items-start gap-3 pt-1">
                    {activeCategory.items.map((item, index) => {
                        const Icon = item.icon
                        const isSelected = index === selected
                        return (
                            <button
                                key={item.label}
                                onClick={() => handleChipClick(index, item.label)}
                                aria-pressed={isSelected}
                                className={`flex cursor-pointer items-center gap-3 rounded-full border py-2 pl-2 pr-6 text-sm font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-medical-primary ${isSelected
                                    ? `border-transparent text-white shadow-lg shadow-medical-primary/30 ${primaryGradient}`
                                    : "border-medical-border bg-white text-medical-navy shadow-sm shadow-medical-navy/5 hover:-translate-y-0.5 hover:border-medical-primary hover:shadow-md hover:shadow-medical-navy/10"
                                    }`}
                            >
                                <span
                                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${isSelected
                                        ? "bg-white text-medical-primary-dark"
                                        : "bg-medical-bg-soft text-medical-primary-dark"
                                        }`}
                                >
                                    <Icon size={18} />
                                </span>
                                {item.label}
                            </button>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default PopularSearches