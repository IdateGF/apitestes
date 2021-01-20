import React from 'react';
import { useEffect, useState } from 'react'
import database from '../../functions/database'

import { Container, Card, Cards } from './styles';

function main() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      let list = await database.getList();
      console.log(list.filmes);
      setMovies(list.filmes)
    }
    loadAll();
  }, [])
  return (
    <>
      <Cards>
        {movies.map((filme, index) => {
          return (
            <Card>
              <h2>{filme.name}</h2>
              <p>{filme.gender}</p>
              <p>{filme.description}</p>
            </Card>
          )
        })}
      </Cards>
      {/* <ul>{movies.map((filme, index) =>{
        return(
          <li key={index}>
            <h2>{filme.name}</h2>
            <p>Gênero: {filme.gender}</p>
            <p>Descrição: {filme.description}</p>
          </li>
        )
      })}</ul> */}
    </>
  );
}

export default main;