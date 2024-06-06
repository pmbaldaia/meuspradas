import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function Cards() {
    const cards = [
        {
            id: 1,
            title: 'LedBull',
            text: 'Bónus de boas vindas até € 400 no 1 depósito',
            imgSrc: './img/Logo_Lebull - Dark.svg',
            buttonLink: 'https://www.lebull.pt/?partner=p70172p70383p7254#registration',
            buttonText: 'QUERO BÓNUS',
            cardTextButton: '+18 | T&C APPLY | NEW CUSTOMERS ONLY'
        },
        {
            id: 2,
            title: 'Telegram',
            text: 'Canal exclusivo com giveaways e drops de MB Way.',
            imgSrc: './img/telegramlogo.jpeg',
            buttonLink: 'https://t.me/pradasbet',
            buttonText: 'QUERO BÓNUS',
            cardTextButton: '+18 | T&C APPLY | NEW CUSTOMERS ONLY'
        },
        {
            id: 3,
            title: 'Bónus de boas vindas até € 1000 no 1 depósito',
            text: '25 rodadas grátis com o código: luck77 no primeiro registo - SLOT CAPTAINS TREASURE',
            imgSrc: './img/vemapostar.jpeg',
            buttonLink: 'https://www.lebull.pt/?partner=p70172p70383p7254#registration',
            buttonText: 'QUERO BÓNUS',
            cardTextButton: '+18 | T&C APPLY | NEW CUSTOMERS ONLY'
        }
    ];

    return (
        <Container className="container-cards">
            <Row className="flex-container">
                {cards.map((card, index) => (
                    <Col xs={12} key={index}>
                        <Card className="card-custom" style={{ border: `2px solid ${getRandomColor()}` }}>
                            <Row className="align-items-center">
                                <Col xs={12} md={2} className="text-md-start text-center order-md-1 order-1">
                                    <Card.Img className="card-image" src={card.imgSrc} style={{ maxWidth: '150px' }} />
                                </Col>
                                <Col xs={12} md className="text-center order-md-2 order-2">
                                    <Card.Body>
                                        <Card.Title>{card.title}</Card.Title>
                                        <Card.Text className='card-text'>{card.text}</Card.Text>
                                    </Card.Body>
                                </Col>
                                <Col xs={12} md="auto" className="text-end order-md-3 order-3">
                                    <Card.Body className="d-flex flex-column align-items-center align-items-md-center">
                                        <div className="d-flex mb-2">
                                            <Button href={card.buttonLink} className="button-click me-2">{card.buttonText}</Button>
                                        </div>
                                        <Card.Text className='card-text-button'>{card.cardTextButton}</Card.Text>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Cards;
