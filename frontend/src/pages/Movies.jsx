import { useState } from "react";
import MovieCard from "../components/MovieCard";

import styles from "./Movies.module.css"

function Movies(){
    const [movies, setMovies] = useState([
        {
            poster: "steven-universo.png", 
            title: "Steven Universo Futuro", 
            duration: "1h42", 
            isdub: false, 
            avaliation: 0.0,
            section: ["14h30", "17h"]
        },

        {
            poster: "hilda.jpeg", 
            title: "Hilda", 
            duration: "1h15", 
            isdub: false, 
            avaliation: 0.0,
            section: ["12h30", "19h"]
        },

        {
            poster: "trolls.jpeg", 
            title: "Os caçadores de Trolls", 
            duration: "2h10", 
            isdub: false, 
            avaliation: 0.0,
            section: ["15h", "18h15", "20h"]
        },

        {
            poster: "atom-eve.jpeg", 
            title: "Invencivel: Atom eve", 
            duration: "1h55", 
            isdub: false, 
            avaliation: 0.0,
            section: ["21h"]
        },
    ])

    return(
        <section className={styles.container}>
            <h1 className={styles.page_title}>Movies</h1>

            {movies.map((movie, i) =>(
                <div  className={styles.cards} key={i}>
                    <MovieCard poster={movie.poster} 
                                title={movie.title} 
                                duration={movie.duration}
                                isdub={movie.isdub}
                                avaliation={movie.avaliation}
                                section={movie.section}
                    />
                </div>
            ))}
        </section>
    );
}

export default Movies