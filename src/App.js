
import React from 'react';
import ProductName from './conponent/Name';
import ProductPrice from './conponent/Price';
import ProductDescription from './conponent/Description';
import ProductImage from './conponent/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

const App = () => {
    const firstName = "Khadim"; // Remplacez "VotrePrénom" par votre vrai prénom
    const displayGreeting = firstName ? `Bonjour, ${firstName}!` : "Bonjour !";

    return (
        <div className="App">
            <Card style={{ width: '18rem', margin: '20px auto' }}>
                <Card.Body>
                    <ProductName />
                    <ProductPrice />
                    <ProductDescription />
                    <ProductImage />
                </Card.Body>
            </Card>
            {firstName && <img src="https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp" alt="Chaussuren Jordan" style={{ width: '200px', height:'200px'}} />}
            <h5>{displayGreeting}</h5>
        </div>
    );
}

export default App;

