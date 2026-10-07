import type { BloodService } from "../types/type/Blood.type"

// Put the photos in /public/images/blood/ (donors.jpeg, camps.jpeg, blood-banks.jpeg).
// If a photo is missing, the card shows a droplet icon instead.
// Links go to the future Blood page, which will open the matching tab.
export const bloodServices: BloodService[] = [
  {
    id: "donors",
    title: "Blood donors",
    description:
      "Find registered donors by blood group and reach out quickly when someone needs blood.",
    highlight: "120+ donors registered",
    image: "/images/blood/donors.jpeg",
    path: "/blood?tab=donors",
    buttonLabel: "Find a donor",
  },
  {
    id: "camps",
    title: "Upcoming blood camps",
    description:
      "Join a donation camp near you and help save lives. See dates, venues and timings.",
    highlight: "Next camp: 12 Oct, Salt Lake",
    image: "/images/blood/camps.jpeg",
    path: "/blood?tab=camps",
    buttonLabel: "See all camps",
  },
  {
    id: "blood-banks",
    title: "Blood banks",
    description:
      "Check blood availability at blood banks near you before you travel.",
    highlight: "8 banks open now",
    image: "/images/blood/blood-banks.jpeg",
    path: "/blood?tab=blood-banks",
    buttonLabel: "View blood banks",
  },
]