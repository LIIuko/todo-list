import React from 'react';
import {Link} from "react-router-dom";

const About: React.FC = () => {

    return (
        <>
            <h1>Страница информации</h1>
            <p>Lorem</p>
            <Link to="/" className="btn">Обратно к списку дел</Link>
        </>
    );
};

export default About;