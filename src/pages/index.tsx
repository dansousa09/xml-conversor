import React from "react";
import Head from "next/head";

import Logo from "../assets/vercel.svg";
import { Container } from "../styles/pages/Home";

const Home: React.FC = () => {
    return (
        <Container>
            <Head>
                <title>Livnow</title>
            </Head>

            <Logo />
            <h1>Basic Structure Example</h1>
            <p>Now you're ready to code...</p>
        </Container>
    );
};

export default Home;
