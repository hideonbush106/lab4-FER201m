import React from 'react'
import FilmPresentation from './FilmPresentation';
import listOfFilms from '../shared/ListOfFilms';

export default function Main() {
    return <FilmPresentation films={listOfFilms} />
}