import { Container, Typography } from '@mui/material'
import React from 'react'

const Contact = () => {
    return (
        <Container sx={{ height: "100vh", margin: "5rem" }}>
            <Typography variant="h4" component="h1">
                Contact
            </Typography>
            <Typography variant="body1">
                Phone: 0834575757
            </Typography>
            <Typography variant="body1">
                Email: andyhoaiphong2003@gmail.com
            </Typography>
        </Container>
    )
}

export default Contact