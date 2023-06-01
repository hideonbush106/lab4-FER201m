import React from 'react'
import listOfFilms from '../shared/ListOfFilms'
import { Link, useParams } from 'react-router-dom'
import { Box, Container, Typography } from '@mui/material'
const Detail = () => {
    const { id } = useParams()
    const film = listOfFilms.find((film) => film.id === Number(id))
    console.log(film)
    return (
        <Container sx={{ display: "flex", justifyContent: "space-between", marginTop: "2rem" }}>
            <Box sx={{ marginRight: "2rem", width: "60vw" }}>
                <img width="100%" src={`../../${film.image}`} alt={film.title} />
            </Box>
            <Box>
                <Typography variant="h4" component="h1">
                    {film.title}
                </Typography>
                <Typography variant="body1">
                    {film.description}
                </Typography>
                <Typography variant="body2">
                    Nation: {film.nation}
                </Typography>
                <Typography variant="body2">
                    Year: {film.year}
                </Typography>
                <iframe width="700" height="400" src={film.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </Box>
        </Container>
    )
}

export default Detail