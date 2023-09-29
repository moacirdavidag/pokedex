import { styled } from 'styled-components';
import { colors } from '../../../../constants/colors';
import { device } from '../../../../styles/globals';

export const PokemonListWrapper = styled.div`
    width: 920px;
    height: auto;
    margin: 20px auto;
    border-radius: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 5px;
    @media ${device.mobile } {
        grid-template-columns: 1fr;
        max-width: 100vw;
    }
    @media ${device.tablets} {
        max-width: 100vw;
        grid-template-columns: 1fr;
    }
    @media ${device.large} {
        max-width: 100vw;
        grid-template-columns: 1fr;
    }
`;

export const PokemonCard = styled.div<{ $bgColor: string, $bgTypeColor: string }>`
    width: 300px;
    height: 150px;
    border-radius: 10px;
    background-color: ${props => props.$bgColor};
    color: #FFF;
    display: grid;
    grid-template-columns: 1fr 1fr;
    transition: 200ms ease-out;
    &:hover {
        background-color: ${colors.charcoal};
    }
    & div {
        width: auto;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    & div > img {
        max-width: 90px;
        height: auto;
    }
    & div span.pokemonName {
        font-weight: 400;
        font-size: 28px;
        text-transform: capitalize;
    }
    & div span.type {
        min-width: 80px;
        width: auto;
        height: auto;
        margin: 10px 0;
        padding: 5px;
        border-radius: 5px;
        font-size: 20px;
        text-align: center;
        text-transform: capitalize;
        background-color: ${props => props.$bgTypeColor};
    }
    & span.idPokemon {
        font-size: 14px;
        align-self: flex-end;
    }
    @media ${device.mobile } {
        width: 350px;
        grid-template-columns: 1fr;
        height: 250px;
    }
    @media ${device.tablets} {
        width: 720px;
        grid-template-columns: 1fr;
        height: auto;
    }
    @media ${device.large} {
        width: 920px;
        grid-template-columns: 1fr;
        height: auto;
    }
`;

export const Pagination = styled.div`
    margin: 20px auto;
    width: 200px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    & button {
        width: auto;
        height: auto;
        padding: 10px;
        border-radius: 5px;
        background-color: ${colors.charcoal};
        outline: none;
        border: none;
        font-size: 18px;
        font-weight: 400;
        cursor: pointer;
        color: #FFFFFF;
    }
    & button:hover {
        background-color: ${colors.lapislazuli};
    }
`;