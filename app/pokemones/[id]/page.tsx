// app/pokemones/[id]/page.tsx
import Image from "next/image";
import Link from "next/link";

type PokemonData = {
  name: string;
  sprites: {
    front_default: string;
  };
  // Agrega otros campos según lo necesites
};

interface PageProps {
  params: {
    id: string;
  };
}

export default async function PokemonPage({ params }: PageProps) {
  const { id } = await params;
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  if (!response.ok) {
    return <div>No se pudo cargar el Pokémon.</div>;
  }

  const data: PokemonData = await response.json();

  return (
    <div>
      <h1>{data.name}</h1>
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
