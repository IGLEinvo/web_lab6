import React from "react";
import { Card } from "antd";
import styles from "./CardItem.styled";

const CardItem = ({ mark='No title.', carat, imageSrc, description }) => (
    <Card
        hoverable
        style={{ width: 350, borderRadius: "20px" }}
        cover={
            <img style={styles.image} alt="example" src={imageSrc} />
        }
    >
        <div>
            <h2>{mark}</h2>
            <p>Carat: {carat} ct</p>
            <p>{description}</p>
        </div>
    </Card>
);

export default CardItem;