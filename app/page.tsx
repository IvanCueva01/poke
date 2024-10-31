import React from "react";
import Link from "next/link";

type Pokemon = {
  name: string;
  url: string;
};

async function fetchPokemons(): Promise<Pokemon[]> {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  const data = await response.json();
  return data.results;
}
export default async function Pokemones() {
  const pokemones = await fetchPokemons();
  return (
    <div>
      <h1>Pokemones</h1>
      <ol>
        {pokemones.map((poke) => {
          const id = poke.url.split("/").filter(Boolean).pop();
          // console.log(
          //   poke.url
          //     .split("/")
          //     .filter((x) => x)
          //     .pop()
          // );
          return (
            <li key={poke.name}>
              <Link href={`/pokemones/${id}`}>{poke.name}</Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
