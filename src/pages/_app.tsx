import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import ContextProvider from '../context';
import GlobalStyle from "../styles/global";
import theme from "../styles/theme";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <ThemeProvider theme={theme}>
            <ContextProvider>
                <Component {...pageProps} />
                <GlobalStyle />
            </ContextProvider>
        </ThemeProvider>
    );
};

export default MyApp;
