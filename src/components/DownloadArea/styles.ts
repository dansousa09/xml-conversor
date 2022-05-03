import styled from "styled-components";
import { FormControl as MuiFormControl } from "@mui/material";
import { GrDocumentDownload } from "react-icons/gr";

export const Container = styled.div`
    width: 50%;
    height: 80%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    border-right: 2px solid ${(props) => props.theme.colors.border};
`;

export const DownloadIcon = styled(GrDocumentDownload)`
    width: 8rem;
    height: 8rem;

    margin-bottom: 2rem;

    cursor: pointer;
`;

export const DownloadText = styled.h3`
    margin-bottom: 0.5rem;
`;

export const DownloadSubText = styled.h5``;

export const FormControl = styled(MuiFormControl)`
    padding: 0.5rem;
    margin: 2rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border-bottom: 2px solid #e6e6e6;
`;
