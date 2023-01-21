import React from "react";

export default function Paginated({ vgPerPage, allVideoGames, setCurrentPage }) {

  const pageNumbers = [];

  const paginated = (e) => {
    setCurrentPage(e.target.value);
    for (const value of pageNumbers) {
      let button = document.getElementById(value);
      button.classList.remove("is_active");
    }
    e.target.classList.add("is_active");
  }

  for (let i = 0; i < Math.ceil(allVideoGames/vgPerPage); i++) {
    pageNumbers.push(i+1);
  }

  return(
    <nav>
      <ul>
        {
          pageNumbers && pageNumbers.map(n => {
            if (n === 1) {
              return(
                <li key={n}>
                  <button id={n} className="is_active" value={n} onClick={e=>paginated(e)}>{n}</button>
                </li>
              )
            } else {
              return(
                <li key={n}>
                  <button id={n} value={n} onClick={e=>paginated(e)}>{n}</button>
                </li>
              )
            }
          })
        }
      </ul>
    </nav>
  )
}
