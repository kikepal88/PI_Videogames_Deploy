import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideoGames } from '../../actions/index';
import { Link } from "react-router-dom";
import CardsContainer from "../CardsContainer/CardsContainer";
import Paginated from "../Paginated/Paginated";
import FindFilterOrder from "../FindFilterOrder/FindFilterOrder";

export default function Home() {
  const allVideoGames = useSelector((state) => state.videogames);
  const allVideogames = useSelector((state) => state.allVideogames);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [vgPerPage, setVgPerPage] = useState(15);
  const [genres, setGenres] = useState([]);
  const [platforms, setPlatforms] = useState([]);

  const indexLastVg = currentPage * vgPerPage;
  const indexFirstVg = indexLastVg - vgPerPage;
  const currentVgs = allVideoGames.slice(indexFirstVg, indexLastVg);

  const getExistingGenres = () => {
    allVideogames.map(vg =>
      vg.genres.forEach(g => {
        if (!genres.includes(g)) {
          genres.push(g)
        }
      })
    )
  }

  getExistingGenres();

  const getExistingPlatforms = () => {
    allVideogames.map(vg =>
      vg.platforms.forEach(g => {
        if (!platforms.includes(g)) {
          platforms.push(g)
        }
      })
    )
  }

  getExistingPlatforms();

  useEffect(() => {
    if (allVideoGames.length === 0) {
      dispatch(getVideoGames());
    }
  },[dispatch, allVideoGames]);

  return (
    <main>
      <section className="main">
        <FindFilterOrder
          setCurrentPage={setCurrentPage}
          genres={genres}
          platforms={platforms}
        />
        <section className="vgs_container">
          <section className="paginatedandcreate">
            <Paginated
              vgPerPage={vgPerPage}
              allVideoGames={allVideoGames.length}
              setCurrentPage={setCurrentPage}
              // paginated={paginated}
            />
            <Link to='/videogame'>
              <button>
                Create Videogame
              </button>
            </Link>
          </section>
          <CardsContainer
            currentVgs={currentVgs}
          />
        </section>
      </section>
    </main>
  )

}
