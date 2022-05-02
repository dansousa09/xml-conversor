import { LoadingProvider } from "./loading";
import { MediaQueryProvider } from "./mobile";

const ContextProvider = ({ children }) => {
    return (
        <LoadingProvider>
            <MediaQueryProvider>
                {children}
            </MediaQueryProvider>
        </LoadingProvider>
    );
}

export default ContextProvider;