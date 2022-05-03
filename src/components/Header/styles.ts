import styled from "styled-components";
import { IconButton as MuiIconButton, Typography } from "@mui/material";
import { AiOutlineDownload } from "react-icons/ai";

export const Container = styled.header`
    width: 100vw;
    height: 10vh;

    display: flex;
    justify-content: space-around;
    align-items: center;


    background: linear-gradient(
        to right,
        rgb(32, 106, 131) 0%,
        rgb(23, 48, 70) 100%
    );
`;

export const Title = styled(Typography)`
    font-size: 2rem;
    font-weight: bold;
    color: ${(props) => props.theme.colors.background};
`;

export const DownloadGuide = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0 1rem;
    border-radius: 0.5rem;

    background-color: ${(props) => props.theme.colors.background};

    gap: 0.5rem;

    transform: scale(0.95);
    transition: all 0.3s ease;

    cursor: pointer;
    > label {
        cursor: pointer;
    }

    &:hover {
        /* opacity: 0.9; */
        transform: scale(1);
    }
`;

export const IconButton = styled(MuiIconButton)``;

export const DownloadIcon = styled(AiOutlineDownload)``;
