import React from 'react';
import './Advantages.css';
import secure from '../../../images/advantages/secure.png';
import trust from '../../../images/advantages/trust.png';
import offer from '../../../images/advantages/offer.png';
import support from '../../../images/advantages/Support.png';
import { Card } from 'react-bootstrap';

const Advantages = () => {
    return (
 <div id="advantages">
    <h1>Our Advantages</h1>
    <h6>Buying Cars from us has some Advantages</h6>
        <div className="card-container">
            <Card className="card-style">
            <Card.Img variant="" src={secure} />
            <Card.Body>
                <Card.Title>Highly Secured</Card.Title>
                <Card.Text>
                We are providing high security to all our customer. These plates are issued only when a vehicle owner provides information like engine.
                </Card.Text>
            </Card.Body>
            </Card>
            <Card className="card-style">
            <Card.Img variant="top" src={trust} />
            <Card.Body>
                <Card.Title>Trusted Agents</Card.Title>
                <Card.Text>
                During 20 years of our operation, we have earned a reputation of a company that is trusted and respected. Among our corporate clients.
                </Card.Text>
            </Card.Body>
            </Card>
            <Card className="card-style">
            <Card.Img variant="top" src={offer}/>
            <Card.Body>
                <Card.Title>Get an Offer</Card.Title>
                <Card.Text>
                Become a buyer that the sellers want. Become serious. Show them your money. Money is a powerful negotiating tool.
                </Card.Text>
            </Card.Body>
            </Card>
            <Card className="card-style">
            <Card.Img variant="top" src={support} />
            <Card.Body>
                <Card.Title>Free Support</Card.Title>
                <Card.Text>
                Make it easy for your team to deliver great support to your customers with a free customer service software. With Freshdesk's free plan.
                </Card.Text>
            </Card.Body>
            </Card>
      </div>
  </div>
        
    );
};

export default Advantages;