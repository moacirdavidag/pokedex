import styled from "styled-components";
import { colors } from "../../constants/colors";
import { device } from "../../styles/globals";

export const DetailsWrapper = styled.div`
    height: calc(100vh - 130.4px);
    max-width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media ${device.mobile} {
        flex-direction: column;
    }
    @media ${device.tablets} {
        flex-direction: column;
    }
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
    @media ${device.mobile} {
        width: 100vw;
        padding: 20px;
    }
    @media ${device.tablets} {
        width: 100vw;
        padding: 40px;
        & > img {
            max-width: 100%;
            height: auto;
        }
    }
`;

export const Details = styled.div`
    width: 70%;
    height: 100%;
    background-color: #FFFFFF;
    padding: 40px;
    @media ${device.mobile} {
        width: 100vw;
    }
    @media ${device.tablets} {
        width: 100vw;
    }
    @media ${device.large} {
        padding: 10px;
    }
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
    @media ${device.tablets} {
        font-size: 32px;
    }
`;