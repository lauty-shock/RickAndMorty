import axios from "axios";
import { useEffect, useState } from "react";
import { CharactersFromApi } from "../../types";

import css from "./Characters.module.css";

const Characters = () => {
  const [characters, setCharacters] = useState<CharactersFromApi>([]);

  useEffect(() => {
    const charactersApi = (): Promise<CharactersFromApi> => {
      return axios
        .get("https://rickandmortyapi.com/api/character")
        .then((response) => response.data.results);
    };
    charactersApi().then((results) => {
      setCharacters(results);
    });
  }, []);

  const renderCharacters = (): JSX.Element[] => {
    return characters?.map((c) => {
      return (
        <div key={c.name} className={css.containerCharacter}>
          <img className={css.image} src={c.image} alt={c.name} />
          <section className={css.sectionData}>
            <h5 className={css.name}>{c.name}</h5>

            <span className={css.status}>
              <div
                className={
                  c.status === "Alive"
                    ? `${css.Alive}`
                    : c.status === "Dead"
                    ? `${css.Dead}`
                    : `${css.unknown}`
                }
              ></div>
              {c.status} - {c.species}
            </span>

            <div className={css.gender}>
              <span className={css.genderGray}>Gender</span>
              <span className={css.genderWhite}>{c.gender}</span>
            </div>

            <div className={css.gender}>
              <span className={css.genderGray}>Last known location</span>
              <span className={css.genderWhite}>{c.location.name}</span>
            </div>
          </section>
        </div>
      );
    });
  };

  return <div className={css.container}>{renderCharacters()}</div>;
};

export default Characters;
