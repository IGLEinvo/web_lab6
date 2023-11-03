import React from "react";
import MainPhoto from "/Users/igorlevocko/Desktop/labs/HTML PROJECTS/labs_react/labs_react/src/Icons/main_photo.jpeg"
import styles from "./Home.styled"
import Diamond from "/Users/igorlevocko/Desktop/labs/HTML PROJECTS/labs_react/labs_react/src/Icons/diamond1.jpeg"
import Rubin from "/Users/igorlevocko/Desktop/labs/HTML PROJECTS/labs_react/labs_react/src/Icons/rubin.png"
import Sapphire from "/Users/igorlevocko/Desktop/labs/HTML PROJECTS/labs_react/labs_react/src/Icons/Sapphire_Gem.jpg"
import CardItem from "../../components/CardItem/CardItem";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const data = [
    {
        mark: "Diamond",
        carat: "1.4",
        image: Diamond,
        description: "Діаманти - це найтвердіший природний матеріал, відомий своєю блискучістю та чистотою. Вони використовуються для виготовлення коштовних прикрас і володіють великою блискучістю та спроможністю розсіювати світло.",
    },
    {
        mark: "Rubin",
        carat: "0.9",
        image: Rubin,
        description: "Рубіни - це червоні корунди, які символізують страсть та кохання. Вони володіють багатством кольору та використовуються в коштовних прикрасах. Рубіни є одними з найдорожчих дорогоцінних каменів",
    },
    {
        mark: "Sapphire",
        carat: "0.5",
        image: Sapphire,
        description: "Сапфіри - це корунди інших кольорів, окрім червоного (який називається рубінами). Сапфіри можуть бути синіми, жовтими, рожевими та іншими кольорами. Вони також використовуються в прикрасах і відзначаються яскравими кольорами та вишуканістю.",
    },
];

const Home = () => {
    return (
        <div className="container">
            <div style={styles.container} className="row">
                <div className="col-md-6">
                    <img style={styles.img}
                        src={MainPhoto}
                        alt="Зображення"
                        className="img-fluid"
                    />
                    </div>
                    <div className="col-md-6">
                    <h2 style={styles.textHeader}>Магазин коштовних каменів</h2>
                    <p style={styles.text}>
                        В нашому магазині великий асортимент коштовних каменів та прикрас
                    </p>
                </div>
            </div>
            <div style={styles.cardWrapper}>
                {data.map(({ mark, carat, image, description}, idx) => (
                    <CardItem
                        mark={mark}
                        carat={carat}
                        imageSrc={image}
                        description={description}
                        id={idx}
                    />
                ))}
            </div>
            <div style={styles.button_container}>
                <button style={styles.button} className="btn btn-primary">
                    <a className="nav-link" href="#">View more</a>
                </button>
            </div>
        </div>
    );
}

export default Home