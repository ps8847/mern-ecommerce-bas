import axios from "../axios";
import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import categories from "../categories";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { updateProducts } from "../features/productSlice";
import ProductPreview from "../components/ProductPreview";

function Home() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);
    const lastProducts = products.slice(0, 8);

    useEffect(() => {
        axios.get("/products").then(({ data }) => dispatch(updateProducts(data)));
    }, []);

    return (
        <div>
            <div className="featured-products-container container mt-4">
                <h2 className="section-title">Featured Products</h2>
                <div className="d-flex justify-content-center flex-wrap">
                    {lastProducts.map((product) => (
                        <ProductPreview key={product.id} {...product} />
                    ))}
                </div>
                <div className="see-more-link">
                    <Link to="/category/all">See more &gt;&gt;</Link>
                </div>
            </div>
            <div className="sale-banner-container mt-4">
                <img src="https://res.cloudinary.com/learn-code-10/image/upload/v1654093280/xkia6f13xxlk5xvvb5ed.png" alt="Sale Banner" />
            </div>
            <div className="recent-products-container container mt-4">
                <h2 className="section-title">Categories</h2>
                <Row>
                    {categories.map((category) => (
                        <LinkContainer key={category.id} to={`/category/${category.name.toLocaleLowerCase()}`}>
                            <Col md={4}>
                                <div className="category-tile" style={{ backgroundImage: `url(${category.img})` }}>
                                    <span>{category.name}</span>
                                </div>
                            </Col>
                        </LinkContainer>
                    ))}
                </Row>
            </div>
        </div>
    );
}

export default Home;
