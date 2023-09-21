import styled from "styled-components";
import { colors } from "../../constants/colors";

export const HeaderPokedex = styled.header`
    width: 100vw;
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