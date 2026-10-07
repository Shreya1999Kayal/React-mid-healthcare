import type { Slide } from "../types/type/Slide.type"

// files are in the /public/slides folder
export const slides: Slide[] = [

    {
        type: "video",
        src: "/slides/slide1.mp4",
        title: "Trusted care, close to you",
        subtitle: "Find doctors and hospitals near you and book an appointment in minutes.",
    },
    {
        type: "video",
        src: "/slides/slide2.mp4",
        title: "Emergency help, fast",
        subtitle: "Locate ambulances, ICU beds and blood banks when every minute counts.",
    },
    {
        type: "video",
        src: "/slides/slide3.mp4",
        title: "Donate blood, save lives",
        subtitle: "Join donation camps and respond to urgent blood requests.",
    },
]

export const SLIDE_DURATION = 5000 // ms