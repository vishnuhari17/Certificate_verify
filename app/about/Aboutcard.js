'use client'
import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          <ImPointRight className="inline m-2 mb-4"/>
            This  certificate verification site could allow users to verify the authenticity of certificates 
            <br />
            by entering a unique code or scanning a QR code. 
            <br />
            <br />
            <ImPointRight className="inline m-2"/>
            It could provide instant confirmation of the certificate's validity, enhancing trust and reducing
            <br />
              the risk of fraudulent credentials.
             <br />
             <br />
             <ImPointRight className="inline m-2"/>
             Users can upload their certificates,verifiy them and also calculate activity points.
            <br />
            
            
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
