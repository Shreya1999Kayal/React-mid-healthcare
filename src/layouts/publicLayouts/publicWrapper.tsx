import { Box, Stack } from "@mui/material"


import Navbar from "./Navbar"

import { Outlet } from "react-router-dom"
import Footer from "./Footer"


const PublicWrapper = () => {
  return (
    // <Container maxWidth="lg" sx={{bgcolor: "red", paddingLeft: 0, paddingRight: 0}}>
    // <Container sx={{minWidth: "100vw", minHeight: "100vh", }}>  //still white space coming because container has its own padding left  and margin left

    <Box sx={{width: "100%", minHeight: "100vh", margin: 0, padding: 0}}>
      <Stack sx={{display: "flex", flexDirection: "column"}}>
        <Navbar />
        <Outlet />
        <Footer />
      </Stack>
    </Box>

    // </Container>
  )
}

export default PublicWrapper