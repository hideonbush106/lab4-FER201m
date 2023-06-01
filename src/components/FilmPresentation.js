import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import useTheme from "@mui/material/styles/useTheme";

export default function FilmPresentation({ films }) {
    const theme = useTheme()
    return (
        <Grid bgcolor={theme.palette.mode === "dark" ? "#121212" : "white"} container columns={2} spacing={3} sx={{ padding: "2rem", marginTop: "0" }} >
            {
                films.map((film) => (
                    <Grid item key={film.id}>
                        <Card sx={{ width: 345, minHeight: "75vh" }}>
                            <CardMedia
                                sx={{ height: 500 }}
                                image={film.image}
                                title={film.title}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {film.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Nation: {film.nation}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Year: {film.year}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button><Link to={`/detail/${film.id}`}>Detail</Link></Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))
            }
        </ Grid>
    )
}
