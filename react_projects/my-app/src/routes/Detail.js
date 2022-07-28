
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import styles from "./Detail.module.css";
function Detail(){
  const {id} = useParams();
  const [loading,setLoading] = useState(true);
  const [movie,setMovie] = useState([]);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();

    setMovie(json.data.movie);
    setLoading(false);
    console.log(json);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
  <div>
    {loading ? <h1>Loading...</h1> :
     <> <img src={movie.background_image} className={styles.back_img} />
    <div className={styles.items}>
     
       <h1>제목 : {movie.title}</h1>
       <h2>년도 : {movie.year}</h2>
       <h3>언어 : {movie.language}</h3>
     <img src={movie.large_cover_image} className={styles.imgs} ></img>
     <br />
     <p>{movie.description_intro}</p>
    </div>
    </>
  }
  </div>
  )
}

export default Detail;