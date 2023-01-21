import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getDteailVg, updateVgDetail } from '../../actions/index';


export default function Detail() {
  const { id } = useParams();
  const vgData = useSelector(state => state.detail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDteailVg(id));
    return(() => {
      dispatch(updateVgDetail());
    })
  }, [dispatch, id]);


  return(
    <main className="main_detail">
      <section className="detail">
        {
          vgData ?
            <section className="vginfo_container">
              <div className="detail_img">
                <img src={vgData.bgi_url} alt={vgData.name} />
              </div>
              <div className="detail_info">
                <h3>{vgData.name}</h3>
                <h4>⭐ {vgData.rating}</h4>
                <h5>Released date: {vgData.released}</h5>
                <p>Platforms:</p>
                <div className="detail_platforms">
                {
                  vgData.platforms && vgData.platforms.map(p => {
                    return <article key={p}>{p}</article>
                  })
                }
                </div>
                <p>Genres:</p>
                <div className="detail_genres">
                {
                  vgData.genres && vgData.genres.map(g => {
                    return <article key={g}>{g}</article>
                  })
                }
                </div>
              </div>
              <div className="vg_description">
                <p>DESCRIPTION:</p>
                <p>{vgData.description}</p>
              </div>
            </section> :
            <div>LOADING...</div>
        }
      </section>
      <Link to='/home'>
        <button>
          Go Back to Home
        </button>
      </Link>
    </main>
  )

}
