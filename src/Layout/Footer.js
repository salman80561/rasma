import React from "react";
import you from '../Images/youtube.png';
import spoo from '../Images/SpotifyLogo.png';
import face from '../Images/FacebookLogo.png';
import { Navbar, Nav, Image } from "react-bootstrap";

const Footer = () => {
    return (
        
            <Navbar bg='light' fixed="bottom">
                <Nav className="me-auto">
                    <Navbar.Brand style={{
                    }}>© 2023 The Generics, Inc</Navbar.Brand>
                </Nav>
                <Nav className="ms-auto" style={{ gap: '1rem'}}>
                    <Nav.Item>
                        <Nav.Link href="https://www.youtube.com/" >
                            <Image src={you} style={{ width: '30px', backgroundColor:'black' }} />
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="https://spotify.com/">
                            <Image src={spoo} style={{ width: '30px', backgroundColor:'black' }} />
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="https://facebook.com/">
                            <Image src={face} style={{ width: '30px',backgroundColor:'black' }} />
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
        
    )
}
export default Footer;