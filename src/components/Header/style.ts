import styled from "styled-components";
import { colors } from "../../constants/colors";
import { device } from "../../styles/globals";

export const HeaderPokedex = styled.header`
    max-width: 100vw;
    height: auto;
    padding: 20px;
    text-align: center;
    display: block;
    background-color: #FFFFFF;
    margin: 0;
`;

export const PageTitle = styled.h1`
    font-size: 72px;
    display: block;
    font-weight: 800;
    & > a:hover {
        color: ${colors.charcoal};
    }
    & > a {
        color: ${colors.lapislazuli};
    }
`;

export const Tools = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: auto;
    padding: 6px;
    & > form {
        width: 100%;
        position: relative;
        @media ${device.mobile} {
            width: auto;
        }
        & .inputIcon {
            position: absolute;
            right: 250px;
            top: 6px;
            color: ${colors.charcoal};
            @media ${device.mobile} {
                right: 20px;
            }
            @media ${device.tablets} {
                right: 70px;
            }
            @media ${device.large} {
                right: 120px;
            }
        }
    }
`;

export const InputSearch = styled.input`
    width: auto;
    height: 30px;
    border-radius: 50px;
    outline: none;
    border: 2px solid ${colors.charcoal};
    padding-left: 25px;
    color: ${colors.charcoal};
    font-weight: 600;
    font-size: 18px;
    &::placeholder {
        color: ${colors.charcoal};
    }
`;