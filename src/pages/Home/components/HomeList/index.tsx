import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Pagination, PokemonCard, PokemonListWrapper } from "./style";

import { api } from "../../../../services/api";
import axios, { AxiosResponse } from "axios";
import pokemonTypeColors from "../../../../constants/colors";
import { Loading } from "../../../../components/Loading";

export const HomeList = () => {
    const [pokemons, setPokemons]: any = useState([]);
    const [offset, setOffset] = useState(0);

    const handleOffset = (value: number) => {
        const newOffset = offset + value;
        if (newOffset >= 0 && newOffset !== offset) {
            setOffset(newOffset);
        }
    }

    useEffect(() => {
        setPokemons([]);
        const fetchPokemons = () => {
            api.get(`?limit=9&offset=${offset}`)
                .then((res: AxiosResponse<any>) => {
                    const pokemons = res.data.results;
                    const pokemonPromises: Array<Promise<any>> = pokemons.map((pokemon: any) => {
                        return axios.get(pokemon.url)
                            .then((response) => {
                                return response.data;
                            });
                    });

                    Promise.all(pokemonPromises)
                        .then((pokemonDetails) => {
                            setPokemons((prev: any) => [...prev, ...pokemonDetails]);
                        })
                        .catch((error) => {
                            console.error("Erro ao buscar detalhes dos pokemons", error);
                        });
                })
                .catch((error) => {
                    console.error("Erro ao buscar a lista de pokemons", error);
                });
        };
        fetchPokemons();
    }, [offset]);
    return (
        <>
            <PokemonListWrapper>
                {pokemons.length === 0 && <Loading />}
                {
                    pokemons.map((pokemon: any) => {
                        return (
                            <Link to={`/pokemon/${pokemon.id}`} key={pokemon.id}>
                                <PokemonCard $bgColor={pokemonTypeColors[pokemon.types[0].type.name].primary} $bgTypeColor={pokemonTypeColors[pokemon.types[0].type.name].secondary}>
                                    <div>
                                        <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
                                    </div>
                                    <div>
                                        <span className="idPokemon">
                                            {`#${pokemon.id}`}
                                        </span>
                                        <span className="pokemonName">
                                            {pokemon.name}
                                        </span>
                                        <span className="type">
                                            {pokemon.types[0].type.name}
                                        </span>
                                    </div>
                                </PokemonCard>
                            </Link>)
                    })
                }
            </PokemonListWrapper>
            {pokemons.length !== 0 &&
                <Pagination>
                    <button onClick={() => {
                        handleOffset(-9);
                    }}>Anterior</button>
                    <button onClick={() => {
                        handleOffset(9);
                    }}>Próximo</button>
                </Pagination>}
        </>
    )
}
