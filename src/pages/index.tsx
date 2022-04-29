import React from "react";
import Head from "next/head";
import * as C from "../styles/pages/Home";

import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

const Home: React.FC = () => {
    return (
        <C.Container>
            <Head>
                <title>XML-Conversor</title>
            </Head>

            <Header />
            <Main />
            <Footer />
        </C.Container>
    );
};

export default Home;
