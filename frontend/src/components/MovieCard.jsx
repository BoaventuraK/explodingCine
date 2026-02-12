import styles from "./MovieCard.module.css";
import { RiMoneyDollarCircleLine } from "react-icons/ri"

function MovieCard(props){
    return(
        <section className={styles.card}>

            <div className={styles.poster}>
                <img src={props.poster} alt={props.title + " - poster"}/>
            </div>

            <div className={styles.about_section}>

                <div className={styles.about_movie}>
                    <h3>{props.title}</h3>
                    <p>{props.duration}</p>

                    <a href="#"> <RiMoneyDollarCircleLine className={styles.icon} size={25} /> </a>
                </div>

                <div className={styles.avaliation}>
                    <p>{props.avaliation == 0 ? "Esse filmes não possui avaliações" : props.avaliation}</p>
                </div>

                <div className={styles.informarions}>
                    <p>{props.isdub ? "Dublado" : "Legendado"}</p>

                    {props.section.map((sec, i) =>(
                        <p key={i}>{sec}</p>
                    ))}
                </div>  

            </div>

        </section>
    );
}

export default MovieCard