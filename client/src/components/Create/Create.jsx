import React from 'react';
import {useState, useEffect} from 'react';
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getVideoGames, getGenres, postVideogame } from '../../actions';

function validate(input) {
  const errors = {};
  if (!input.name) {
    errors.name = "Name is required"
  }
  if (!input.bgi_url) {
    errors.bgi_url = "Image is required"
  }
  if (!input.description) {
    errors.description = "Description is required"
  }
  if (!input.released) {
    errors.released = "Released date is required"
  }
  if (input.rating < 0 || 5 < input.rating || !input.rating) {
    errors.rating = "Rating range is 0-5"
  }
  if (!input.platforms.length) {
    errors.platforms = "you must select at least 1 Platform"
  }
  if (!input.genres.length) {
    errors.genres = "you must select at least 1 Genre"
  }
  return errors;
}

export default function Create() {
  const dispatch = useDispatch();
  const history = useHistory();
  const allVideoGames = useSelector((state) => state.videogames);
  const genres = useSelector(state => state.genres);
  const [errors, setErrors] = useState({
    name: "",
    bgi_url: "",
    description: "",
    released: "",
    rating: "",
    platforms: "",
    genres:"",
  });

  const [platforms, setPlatforms] = useState([]);
  const [input, setInput] = useState({
    name: "",
    bgi_url: "",
    description: "",
    released: "",
    rating: "",
    platforms: [],
    genres:[],
  })

  function handleChange(e) {
    e.preventDefault();
    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value,
    }));
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleSelectPlatforms(e) {
    setInput({
      ...input,
      platforms: [...input.platforms, e.target.value]
    })
    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSelectGenres(e) {
    setInput({
      ...input,
      genres: [...input.genres, e.target.value]
    })
    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postVideogame(input));
    setInput({
      name: "",
      bgi_url: "",
      description: "",
      released: "",
      rating: "",
      platforms: [],
      genres:[],
    })
    setErrors({
      name: "",
      bgi_url: "",
      description: "",
      released: "",
      rating: "",
      platforms: "",
      genres:"",
    });
    history.push('/home');
  }

  function handleDeletePlatform(el) {
    setInput({
      ...input,
      platforms: input.platforms.filter(p => p !== el)
    })
  }

  function handleDeleteGenres(el) {
    setInput({
      ...input,
      genres: input.genres.filter(p => p !== el)
    })
  }

  const getExistingPlatforms = () => {
    allVideoGames.map(vg =>
      vg.platforms.forEach(g => {
        if (!platforms.includes(g)) {
          platforms.push(g)
        }
      })
    )
  }

  getExistingPlatforms();

  useEffect(() => {
    dispatch(getVideoGames());
    dispatch(getGenres());
    return(() => {
      dispatch(getVideoGames());
    })
  }, [dispatch]);

  return(
    <main className='main_create'>
      <Link to="/Home" className='back'>
        <button>
          Go Back to Home
        </button>
      </Link>
      <section className='create'>
        <h3>Create Videogame</h3>
        <form onSubmit={e => handleSubmit(e)}>
          <div>
            <label htmlFor='name'><h5>*Name:</h5></label>
            <input
              type="text"
              name='name'
              id='name'
              value={input.name}
              onChange={e => handleChange(e)}
              placeholder="Write the Videogame Name"
              required
            />
            {errors.name && (<p>{errors.name}</p>)}
          </div>

          <div>
            <label htmlFor='bgi_url'><h5>*Image:</h5></label>
            <input
              type="text"
              name='bgi_url'
              id='bgi_url'
              value={input.bgi_url}
              onChange={e => handleChange(e)}
              placeholder="Write the Videogame URL"
              required
            />
            {errors.bgi_url && (<p>{errors.bgi_url}</p>)}
          </div>

          <div className='description'>
            <label htmlFor='description'><h5>*Description:</h5></label>
            <textarea
              type="text"
              name='description'
              id='description'
              value={input.description}
              onChange={e => handleChange(e)}
              placeholder="Write the Videogame Description"
              required
            />
            {errors.description && (<p>{errors.description}</p>)}
          </div>

          <div className='released'>
            <label htmlFor='released'><h5>Released Date:</h5></label>
            <input
              type="date"
              name='released'
              id='released'
              value={input.released}
              onChange={e => handleChange(e)}
            />
            {errors.released && (<p>{errors.released}</p>)}
          </div>

          <div className='rating'>
            <label htmlFor='rating'><h5>Rating:</h5></label>
            <input
              type="number"
              min="0"
              max="5"
              step="0.01"
              name='rating'
              id='rating'
              value={input.rating}
              onChange={e => handleChange(e)}
              placeholder="Write the Videogame Rating"
            />
            {errors.rating && (<p>{errors.rating}</p>)}
          </div>

          <div className='create_platforms'>
            <label><h5>*Platforms:</h5></label>
            <select name='platforms' defaultValue="None" onChange={e => handleSelectPlatforms(e)}>
              <option value="None">None</option>
              {
                platforms && platforms.map( p =>
                  <option key={p} value={p}>{p}</option>
                )
              }
            </select>
            <div className='added_platforms'>
            {input.platforms.map(p =>
                <article key={p}>
                  <p>{p}</p>
                  <button onClick={() => handleDeletePlatform(p)}>X</button>
                </article>
            )}
            </div>
            {errors.platforms && (<p>{errors.platforms}</p>)}
          </div>

          <div className='create_genres'>
            <label><h5>*Genres:</h5></label>
            <select name='genres' defaultValue="None" onChange={e => handleSelectGenres(e)}>
              <option value="None">None</option>
              {
                genres && genres.map( g =>
                  <option key={g.name} value={g.name}>{g.name}</option>
                )
              }
            </select>
            <div className='added_genres'>
            {input.genres.map(g =>
              <article key={g}>
                <p>{g}</p>
                <button onClick={() => handleDeleteGenres(g)}>X</button>
              </article>
            )}
            </div>
            {errors.genres && (<p>{errors.genres}</p>)}
          </div>
          {
            !Object.values(errors).length?
              <button className='submit_button' type='submit'>Create VideoGame</button> :
              null
          }
        </form>
        <h5>The spaces with * are required</h5>
      </section>
    </main>
  )

}
