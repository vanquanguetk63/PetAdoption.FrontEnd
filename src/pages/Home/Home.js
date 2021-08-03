import React from "react";
import { Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import DonateNow from "../../components/Home/DonateNow";
import Information from "../../components/Home/Infor/Information";

const Home = () => {
    return (
        <Container fluid>
            <Row>
                <Header />
                <Information />
                <DonateNow />
                <Footer />
            </Row>
        </Container>
    );
};

export default Home;
