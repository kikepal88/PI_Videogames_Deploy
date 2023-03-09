import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return(
    <main>
      <section className="landing">
        <h1>Welcome Gamer to Henry Games</h1>
        <h3>A video game library where you can find information about your favorite titles, or those you want to get.</h3>
        <h4> You will be able to see their description, rating, platforms where they can be played and much more. Enter now and start looking for your games.</h4>
        <Link to={'/home'}>
          <button>START</button>
        </Link>
      </section>
    </main>
  )
}
