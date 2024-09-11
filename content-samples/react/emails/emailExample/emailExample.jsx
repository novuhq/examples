import {
  Body,
  Container,
  Head,
  Html,
  Text,
  Img,
  Link,
} from "@react-email/components";
import * as React from "react";

const VisualEmailNotification = () => (
  <Html>
    <Head />
    <Body style={main}>
      <Container style={container}>
        {/* Logo at the top */}
       
        <Img
          src="https://user-images.githubusercontent.com/2233092/213641043-3bbb3f21-3c53-4e67-afe5-755aeb222159.png"
          alt="Company Logo"
          style={logoStyle}
        />
         
        
        {/* Main visual image */}
        <Img
          src="https://mlid.fr/shop/42-thickbox_default/email-creation.jpg" 
          alt="Email Notification"
          style={imageStyle}
        />
        
        {/* Minimal text */}
        <Text style={messageStyle}>You've received an important notification.</Text>
        
        {/* CTA button */}
        <Link href="https://example.com/inbox" style={buttonStyle}>
          Open Email
        </Link>
      </Container>
    </Body>
  </Html>
);

export default VisualEmailNotification;

const main = {
  
  backgroundColor: "#f0f0f0",
  fontFamily: "Arial, sans-serif",
  padding: "20px",
  textAlign: "center",
};

const container = {
  
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  padding: "20px",
  maxWidth: "700px",
  height:"auto",
  margin: "0 auto",
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
};

const logoStyle = {
  maxWidth: "100px",
  marginBottom: "20px",
};

const imageStyle = {
  maxWidth: "200px",
  marginBottom: "20px",
  margin:"auto",
  
};

const messageStyle = {
  fontSize: "18px",
  color: "#333333",
  marginBottom: "20px",
};

const buttonStyle = {
  display: "inline-block",
  background: "linear-gradient(to right, rgb(0, 99, 169), rgb(3, 58, 98))",

  color: "#ffffff",
  padding: "10px 20px",
  borderRadius: "5px",
  textDecoration: "none",
  fontSize: "16px",
};

