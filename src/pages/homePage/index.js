import React, { useEffect, useState } from "react";
import Styles from './homePage.module.scss';
import Product from "../../components/productBox";
import { sampleData } from "../../utils/sampleData";
import { Row, Col, Container } from 'react-bootstrap';
import { useSelector } from "react-redux";

function HomePage() {
    const [mensClothing, setMensClothingData] = useState([]);
    const [womenClothing, setWomenClothingData] = useState([]);
    const cart = useSelector(({decaMart}) => decaMart?.cartItems);

    useEffect(() => {
        const menFilteredData = sampleData.filter((a) => {
            return a.category == "men's clothing";
        });
        setMensClothingData(menFilteredData);

        const womenFilteredData = sampleData.filter((a) => {
            return a.category == "women's clothing";
        });
        setWomenClothingData(womenFilteredData);
    }, [sampleData]);

    return (
        <Container className={Styles.HomeContainer}>
            <h2>Men's Wear</h2>
            <Row>
                {
                    mensClothing.map((data, index) => (
                        <Col md={3} key={index}>
                            <Product
                                details={data}
                            />
                        </Col>
                    ))
                }
            </Row>

            <h2>Women's Wear</h2>
            <Row>
                {
                    womenClothing.map((data, index) => (
                        <Col md={3} key={index}>
                            <Product
                                details={data}
                            />
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}
  
export default HomePage