import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { LoadingProvider } from '../context/loading';
import GlobalStyle from "../styles/global";
import theme from "../styles/theme";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <ThemeProvider theme={theme}>
            <LoadingProvider>
                <Component {...pageProps} />
                <GlobalStyle />
            </LoadingProvider>
        </ThemeProvider>
    );
};

export default MyApp;
