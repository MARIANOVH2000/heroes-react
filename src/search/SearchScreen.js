import React, { useMemo } from "react";
import { useLocation } from "react-router";
import { heroes } from "../data/heroes";
import { HeroCard } from "../heroes/HeroCard";
import { useForm } from "../hooks/useForm";
import { getHeroesByName } from "../selectors/getHeroesByName";
//para enviar varios datos por loa url
const queryString = require("query-string");

export const SearchScreen = ({ history }) => {
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);
  console.log(q);

  const [formValues, handleInputChange, reset] = useForm({
    searchText: "",
  });
  const { searchText } = formValues;
  const heroesFirst = heroes;
  const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

  const handleSearch = (e) => {
    e.preventDefault();
    //con el push y el history se pasa los dates por la url
    history.push(`?q=${searchText}`);
    console.log(searchText);
    reset();
  };
  return (
    <div>
      <h1>Search Screen</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Find your hero"
              className="form-control"
              name="searchText"
              value={searchText}
              autoComplete="off"
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="btn m-1 btn-block btn-outline-primary"
            >
              Search...
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Result</h4>
          <hr />
          {q === "" && (
            <div className="btn-info">
              Usted no hay buscado aun...
              <br />
              Ingrese un dato
            </div>
          )}
          {q !== "" && heroesFiltered.length === 0 && <div className="btn-danger">No hay heroes con {q}
            </div>}
          <div className="row">
            {q === ""
              ? heroesFirst.map((hero) => <HeroCard key={hero.id} {...hero} />)
              : heroesFiltered.map((hero) => (
                  <HeroCard key={hero.id} {...hero} />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};
