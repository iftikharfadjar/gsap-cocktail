import React from "react";
import { cocktailLists, mockTailLists } from "../constants";

const Cocktails = () => {
  return (
    <section id="cocktails" className="noisy">
      <img
        src="/images/cocktail-left-leaf.png"
        alt="left-leaf"
        id="c-left-leaf"
      />
      <img
        src="/images/cocktail-right-leaf.png"
        alt="right-leaf"
        id="c-right-leaf"
      />

      <div className="list">
        <div className="popular">
          <h2>Most Popular Cocktails : </h2>

          <ul>
            {cocktailLists.map((cocktail) => (
              <li key={cocktail.name}>
                <div className="md:me-28">
                  <h3>{cocktail.name}</h3>
                  <p>
                    {cocktail.country} | {cocktail.detail}
                  </p>
                </div>
                <span>- {cocktail.price}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="loved">
          <h2>Most Loved Cocktails : </h2>

          <ul>
            {mockTailLists.map((cocktail) => (
              <li key={cocktail.name}>
                <div className="md:me-28">
                  <h3>{cocktail.name}</h3>
                  <p>
                    {cocktail.country} | {cocktail.detail}
                  </p>
                </div>
                <span>- {cocktail.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Cocktails;
