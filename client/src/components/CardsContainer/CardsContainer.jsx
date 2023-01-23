import React from "react";
import Card from "../Card/Card";
import { useSelector } from "react-redux";
import Loader from "../Loader/Loader";

export default function CardsContainer({currentVgs}) {

  const allVideogames = useSelector((state) => state.allVideogames);

  return(
    <section className="cards_container">
      {
        currentVgs.length ?
        currentVgs && currentVgs.map(vg =>
            <Card
              key={vg.id}
              id={vg.id}
              name={vg.name}
              bgi_url={vg.bgi_url}
              rating={vg.rating}
              genres={vg.genres}
              platforms={vg.platforms}
            />
          ) :
        !currentVgs.length && allVideogames.length ?
        <div className="cards_empty">
          <h2>There are no video games for the filters applied!!😱</h2>
        </div>:
        <Loader />
      }
    </section>
  )
}


