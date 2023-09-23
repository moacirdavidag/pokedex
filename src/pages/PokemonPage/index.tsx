import { useParams } from 'react-router-dom';
import { Details, DetailsWrapper, PokemonDetailImage, PokemonInfo, PokemonName } from './style';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import pokemonTypeColors from '../../constants/colors';

export const PokemonPage = () => {
    const { id } = useParams();
    const [pokemon, setPokemon]: any = useState(null);

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const response = await api.get(`/${id}`);
                setPokemon(response.data);
            } catch (error : any) {
                console.log(`Ocorreu um erro: ${error.message}`);
            }
        };

        fetchPokemon();
    }, [id]);

    if (!pokemon || !pokemon.sprites || !pokemon.sprites.other || !pokemon.sprites.other.dream_world || !pokemon.sprites.other.dream_world.front_default) {
        return <p>Carregando...</p>;
    }

    return (
        <DetailsWrapper>
            <PokemonDetailImage $bgColor={pokemonTypeColors[pokemon.types[0].type.name].primary} $bgTypeColor={pokemonTypeColors[pokemon.types[0].type.name].secondary}>
                <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
                <span>
                    {pokemon.types[0].type.name}
                </span>
            </PokemonDetailImage>
            <Details>
                <PokemonName>
                    {pokemon.name}
                </PokemonName>
                <PokemonInfo>
                    Altura: <span>{pokemon.height}</span>
                </PokemonInfo>
                <PokemonInfo>
                    Peso: <span>{pokemon.weight}</span>
                </PokemonInfo>
                <PokemonInfo>
                    Habilidades: {
                        pokemon.abilities.map((ability : any) => {
                            return(
                                <span>
                                    {`${ability.ability.name} `}
                                </span>
                            )
                        })
                    }
                </PokemonInfo>
                <PokemonInfo>
                    Estatísticas: {
                        pokemon.stats.map((stats : any) => {
                            return(
                                <div>
                                    {String(stats.stat.name).toUpperCase()}: <span>{stats.base_stat}</span>
                                </div>
                            )
                        })
                    }
                </PokemonInfo>
            </Details>
        </DetailsWrapper>
    );
};
