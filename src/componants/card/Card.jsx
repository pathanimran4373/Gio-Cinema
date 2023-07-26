import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Img from "../lazyLoadImage/Img"
import CircleRating from "../circleRating/CircleRating"
import Genres from "../genres/Genres"
import "./style.scss"

const Cards = ({ movie }) => {
    //for show scalatan
    const [isLoading, setIsLoading] = useState(true)
    //load scalatan of page
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, [])

    return <>
        <Link className="movieCard" to={`/movie/${movie.id}`} style={{ textDecoration: "none", color: "white" }}>
            {/* show category page */}

            <div className='posterBlock'>
                <Img className="posterImg" src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}`} alt="horar muvie" />
                <CircleRating rating={movie.vote_average.toFixed(1)} />

                <Genres data={movie.genre_ids.slice(0, 2)} />
               
            </div>

            <div className='textBlock'>
                <div className='title'>{movie ? movie.original_title : ""}</div>
                <div className='date'>
                    {movie ? movie.release_date : ""}

                </div>
            </div>
        </Link>

    </>
}

export default Cards