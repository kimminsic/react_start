
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";

function Detail(){
  const {id} = useParams();
  const [loading,setLoading] = useState(true);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setLoading(false);
    console.log(json);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return <div>{loading ? <h1>Loading...</h1> : null}</div>
}

export default Detail;