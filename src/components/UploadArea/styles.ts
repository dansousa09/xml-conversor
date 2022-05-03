import styled, { css } from "styled-components";
import { IconButton as IconButtonMui } from '@mui/material';
import { AiOutlineFileProtect, AiOutlineDownload } from "react-icons/ai";

interface IDropzoneProps {
    isDragActive: boolean;
    isDragReject: boolean;
}

interface IUploadMessageProps {
    type?: string;
}

const colorMessages = css`
    ${(props: IUploadMessageProps) => {
        switch (props.type) {
            case "error":
                return css`
                    color: ${(props) => props.theme.colors.redBorder};
                `;
            case "success":
                return css`
                    color: ${(props) => props.theme.colors.greenBorder};
                `;
            default:
                return css`
                    color: ${(props) => props.theme.colors.text};
                `;
        }
    }}
`;

const dragActive = css`
    border-color: ${(props) => props.theme.colors.greenBorder};
`;

const dragReject = css`
    border-color: ${(props) => props.theme.colors.redBorder};
`;

export const Container = styled.div`
    width: 50%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const DropzoneContainer = styled.div<IDropzoneProps>`
    border: 2px dashed ${(props) => props.theme.colors.border};
    border-radius: 5px;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    min-width: 80%;
    padding: 4rem 2rem;

    transition: height 0.2s ease;

    ${(props) => props.isDragActive && dragActive}
    ${(props) => props.isDragReject && dragReject}
`;

export const UploadMessage = styled.p<IUploadMessageProps>`
    display: flex;
    ${(props) => props.type && colorMessages}
`;

export const DownloadConvertedFileButton = styled.button`
    background: ${(props) => props.theme.colors.greenBorder};
    color: ${(props) => props.theme.colors.background};
    font-weight: bold;

    outline: none;
    border: none;

    padding: 1rem;
    margin-top: 1rem;

    border-radius: 5px;

    cursor: pointer;
`;

export const DownloadConvertedFileArea = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 80%;

    padding: 1rem 2rem;
    gap: 1rem;
`;

export const IconButton = styled(IconButtonMui)``;

export const FileIcon = styled(AiOutlineFileProtect)`
    font-size: 2rem;
`;

export const FileInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    width: 100%; 

    > p:last-child {
        opacity: 0.7; 
        font-size: 0.8rem;
    }
`;


export const DownloadFileIcon = styled(AiOutlineDownload)`
    font-size: 2rem;
`;
