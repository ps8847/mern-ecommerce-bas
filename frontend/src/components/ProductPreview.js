import React from "react";
import { Badge, Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./ProductPreview.css"; // Create a separate CSS file for styling

function ProductPreview({ _id, category, name, pictures }) {
    return (
        <LinkContainer to={`/product/${_id}`} className="product-link">
            <Card className="product-card">
                <Card.Img variant="top" className="product-image" src={pictures[0].url} alt={name} />
                <Card.Body className="product-body">
                    <Card.Title className="product-title">{name}</Card.Title>
                    <Badge className="product-category" bg="warning" text="dark">
                        {category}
                    </Badge>
                </Card.Body>
            </Card>
        </LinkContainer>
    );
}

export default ProductPreview;
