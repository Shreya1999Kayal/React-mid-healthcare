import type { Doctor } from "../types/type/Doctor.type"

// Put the photos in /public/images/doctors/ (doctor1.jpg ... doctor4.jpg).
// If a photo is missing, the card shows the doctor's initials instead.

export const Home_Doctors_Count = 4

export const doctorsList: Doctor[] = [
  {
    id: "1",
    name: "Dr. Leslie Alexander",
    speciality: "Dental Surgery",
    image: "/images/doctors/doctor1.jpeg",
  },
  {
    id: "2",
    name: "Dr. Kathryn Murphy",
    speciality: "Podiatric Medicine",
    image: "/images/doctors/doctor2.jpeg",
  },
  {
    id: "3",
    name: "Dr. Robert Fox",
    speciality: "Gastroenterologist",
    image: "/images/doctors/doctor3.jpeg",
  },
  {
    id: "4",
    name: "Dr. Esther Howard",
    speciality: "Thoracic Surgeon",
    image: "/images/doctors/doctor4.jpeg",
  },
  { 
    id: "5", 
    name: "Dr. Jenny Wilson", 
    speciality: "Cardiologist", 
    image: "/images/doctors/doctor1.jpeg" 
  },

  { 
    id: "6", 
    name: "Dr. Cody Fisher", 
    speciality: "Neurologist", 
    image: "/images/doctors/doctor2.jpeg" 
  },
  { 
    id: "7", 
    name: "Dr. Darlene Robertson", 
    speciality: "Pediatrician", 
    image: "/images/doctors/doctor3.jpeg" 
  },
  { 
    id: "8", 
    name: "Dr. Guy Hawkins", 
    speciality: "Orthopedic", 
    image: "/images/doctors/doctor4.jpeg" 
  },
]