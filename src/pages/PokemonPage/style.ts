import styled from "styled-components";
import { colors } from "../../constants/colors";

export const DetailsWrapper = styled.div`
    height: calc(100vh - 130.4px);
    max-width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const PokemonDetailImage = styled.div<{ $bgColor: string, $bgTypeColor: string }>`
    width: 30%;
    height: 100%;
    background-color: ${(props) => props.$bgColor};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    & > img {
        max-width: 80%;
        height: auto;
    }
    & > span {
        background: ${(props) => props.$bgTypeColor};
        color: #FFFFFF;
        font-size: 32px;
        text-transform: capitalize;
        padding: 10px;
        border-radius: 10px;
        margin: 40px 0;
    }
`;

export const Details = styled.div`
    width: 70%;
    height: 100%;
    background-color: #FFFFFF;
    padding: 40px;
`;

export const PokemonName = styled.span`
    display: block;
    font-size: 48px;
    font-weight: 400;
    text-transform: capitalize;
`;

export const PokemonInfo = styled.div`
    width: 100%;
    border-bottom: 1px solid ${colors.charcoal};
    font-size: 24px;
    margin: 20px 0;
    & span {
        color: #616161;
    }
`;