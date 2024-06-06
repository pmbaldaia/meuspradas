import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { SocialIcon } from 'react-social-icons';

function Profile() {
    const currentDate = new Date().toLocaleDateString('pt-PT', { year: 'numeric', month: 'long', day: 'numeric' });

    return (
        <Container fluid className='container-profile'>
            <Row>
                <Col md={12}>
                    <Image
                        className='img-profile'
                        src="./img/pedroalves.png"
                        alt="Profile Image"
                        style={{ borderRadius: '50%' }}
                    />
                </Col>
                <Col>
                    <SocialIcon url="https://twitch.tv/pedro77alves" style={{ margin: '10px', width: 40, height: 40 }} />
                    <SocialIcon url="https://instagram.com/pedro.n.alves" style={{ margin: '10px', width: 40, height: 40 }} />
                    <SocialIcon url="https://discord.com/invite/yUxNMyGQZ4" style={{ margin: ' 10px', width: 40, height: 40 }} />
                </Col>
            </Row>

            <p className='update-data'>Última atualização: {currentDate}</p>
        </Container>
    );
}

export default Profile;
