import { LoadingProvider } from "./loading";
import { MediaQueryProvider } from "./mobile";
import { InputProvider } from "./input";

const ContextProvider = ({ children }) => {
    return (
        <LoadingProvider>
            <MediaQueryProvider>
                <InputProvider>
                    {children}
                </InputProvider>
            </MediaQueryProvider>
        </LoadingProvider>
    );
}

export default ContextProvider;