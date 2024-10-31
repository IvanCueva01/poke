import Image from "next/image";
import Link from "next/link";

type PokemonData = {
  name: string;
  sprites: {
    front_default: string;
  };
  // Agrega otros campos según lo necesites
};

export default async function PokemonPage({
  params,
}: {
  params: { id: string };
}) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${params.id}`
  );
  const data: PokemonData = await response.json();
  return (
    <div>
      <h1>
        {data.name} #{params.id}
      </h1>
      <Image
        src={data.sprites.front_default}
        alt={data.name}
        width={300}
        height={300}
      />
      <Link href="/">Volver al inicio</Link>
    </div>
  );
}
