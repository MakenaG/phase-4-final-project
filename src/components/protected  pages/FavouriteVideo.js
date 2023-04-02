import '../Extra.css'
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getToken } from '../utils/auth';

function FaveVids(){
    const [favs, setFavs] = useState([]);
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(false);
    let navigate = useNavigate()
    
    let token = getToken()
    useEffect(() => {
      setLoading(true)  
      // Fetch films data and update state
      fetch("https://backend-dc1w.onrender.com/favorites",{
        headers: {
            Authorization: `Bearer ${token}`
          }
      })
        .then((res) => {
          if(res.ok){
            res.json().then((data)=>{
              setFavs(data)
            })
          }else{
            res.json().then((err)=>setErrors([err.errors]))
          }
          setLoading(false)
        })
    },[setLoading, setFavs, setErrors,token])
    
    function handleMovie(id){
      navigate(`/favorites/${id}`)
      console.log(id)
    }
    // console.log(errors)
    return (
        <div className="bg-warning" id="VideoContainer">
            <div className="container">
                <h1>MyFavourites</h1>
            </div>
            <br/><br/>
            {errors.length > 0 && (
                <div className="text-danger">
                {errors.map((error, index) => (
                    <p key={index}>{error}</p>
                ))}
                </div>
            )}
                <div className="container">
                { loading ? (<div className="d-flex align-items-center">
                                        <strong>Please Wait...</strong>
                        <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                        </div> ): (
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {/* where the movie cards will go :) */}
                              {favs.length > 0 ? (
                                favs.map(film => (
                                <div className="col" key={film.id}>
                                    <div className="card mb-3" onClick={()=>handleMovie(film.id)}>
                                    <img src={film.movie.image_src} className="card-img-top" alt={film.movie.title}/>
                                    </div>
                                </div>
                                ))
                            ) : (
                                <p>You haven't added anything to favorites yet.</p>
                            )}
                    </div>
                        )}
                </div>
        </div>
    )
}

export default FaveVids