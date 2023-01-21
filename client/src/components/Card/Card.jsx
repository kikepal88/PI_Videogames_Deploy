import React from "react";
import { Link } from "react-router-dom";

export default function Card({ id, name, bgi_url, rating, genres, platforms }) {
  return(
    <Link to={`/videogames/${id}`}>
      <article>
        <div className="vg_img">
          <img src={bgi_url} alt={name} width='250px' height='250px' />
        </div>
        <div className="vg_info">
          <h4>{name}</h4>
          <h5>⭐ {rating}</h5>
          <div className="genreplatform">
            <div className="vg_genres">
              <h5>Genres:</h5>
              <br></br>
              {
                genres && genres.map(g => {
                  return(
                    <p key={g}>{g}</p>
                  )
                })
              }
            </div>
            <div className="vg_platforms">
              <h5>Platforms:</h5>
              {
                platforms && platforms.map(p => {
                  return(
                    <p key={p}>{p}</p>
                  )
                })
              }
            </div>
          </div>
        </div>
      </article>

    </Link>
  )
}