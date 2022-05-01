import { createContext, useContext, useState } from "react";
import { Backdrop, CircularProgress } from "@mui/material";

const LoadingContext = createContext({
    isLoading: false,
    setLoading: (newValue: boolean) => {}
});

export const LoadingProvider = ({ children }) => {
    const [isLoading, setLoading] = useState(false);

    const handleClose = () => {
        setLoading(false);
    }; 

    return (
        <LoadingContext.Provider value={{ isLoading, setLoading }}>
            <Backdrop
                sx={{
                    color: "#fff",
                    zIndex: (theme) => theme.zIndex.drawer + 1
                }}
                open={isLoading}
                onClick={handleClose}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            {children}
        </LoadingContext.Provider>
    );
};

export const useLoading = () => {
    const loading = useContext(LoadingContext);
    return loading;
};

