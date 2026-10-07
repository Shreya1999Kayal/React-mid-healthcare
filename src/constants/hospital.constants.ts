import type { Hospital } from "../types/type/Hospital.type"

export const ALL_HOSPITALS = "All Hospitals"

export const hospitalCategories: string[] = [
  ALL_HOSPITALS,
  "Multi-speciality",
  "Emergency & trauma",
  "Children's",
  "Eye care",
  "Cardiac care",
]

// Put the photos in /public/images/hospitals/ (hospital1.jpeg ... hospital6.jpeg).
// If a photo is missing, the card shows a hospital icon instead.
export const Home_Hospitals_Count = 3 

export const hospitalsList: Hospital[] = [
  {
    id: "1",
    name: "Seva City Hospital",
    category: "Multi-speciality",
    location: "Salt Lake, Kolkata",
    rating: 4.9,
    bio: "A 400-bed multi-speciality hospital with 24x7 emergency care, advanced diagnostics and experienced specialists under one roof.",
    image: "/images/hospitals/hospital1.jpeg",
  },
  {
    id: "2",
    name: "Lifeline Trauma Centre",
    category: "Emergency & trauma",
    location: "Park Street, Kolkata",
    rating: 4.8,
    bio: "Round-the-clock trauma and emergency unit with ambulance support, ICU beds and a rapid response team for critical cases.",
    image: "/images/hospitals/hospital2.jpeg",
  },
  {
    id: "3",
    name: "Little Steps Children's Hospital",
    category: "Children's",
    location: "New Town, Kolkata",
    rating: 4.9,
    bio: "Child-friendly care from newborn to adolescent, with paediatric specialists, vaccination clinics and a dedicated NICU.",
    image: "/images/hospitals/hospital3.jpeg",
  },
  {
    id: "4",
    name: "ClearView Eye Institute",
    category: "Eye care",
    location: "Ballygunge, Kolkata",
    rating: 4.7,
    bio: "Specialised eye hospital offering cataract surgery, retina care, LASIK and complete vision check-ups with modern equipment.",
    image: "/images/hospitals/hospital4.jpeg",
  },
  {
    id: "5",
    name: "HeartCare Institute",
    category: "Cardiac care",
    location: "Howrah, West Bengal",
    rating: 4.8,
    bio: "Dedicated cardiac centre for angiography, bypass surgery and heart rehabilitation, backed by a 24x7 cardiac ICU.",
    image: "/images/hospitals/hospital5.jpeg",
  },
  {
    id: "6",
    name: "Green Cross Medical Centre",
    category: "Multi-speciality",
    location: "Dum Dum, Kolkata",
    rating: 4.6,
    bio: "Trusted community hospital with outpatient clinics, day-care surgery, pathology and a well-stocked in-house pharmacy.",
    image: "/images/hospitals/hospital6.jpeg",
  },
]