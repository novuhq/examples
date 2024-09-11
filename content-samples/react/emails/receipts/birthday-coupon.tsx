import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Preview,
    Section,
    Text,
    Row,
    Column,
    Link,
  } from "@react-email/components";
  import * as React from "react";

export const birthdayCoupon  = () => {
    return (
      <Html>
        <Body style={main}>
          <Container style={container}>
            <Head />
            <Preview>Novu birthday coupon</Preview>
            <Img
              src={`https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/dca73b36-cf39-4e28-9bc7-8a0d0cd8ac70/standalone-gradient2x_2/w=128,quality=90,fit=scale-down`}
              width="50"
              height="50"
              alt="Novu"
              style={logo}
            />
            <Heading style={heading}>🎉 Happy Birthday, Alax! Here’s a special gift just for you! 🎁</Heading   >
            <text style={messageStyle} >We hope you’re having an amazing day! To celebrate your special day, we’re giving you 40% off on your next purchase. 🎉</text>
              <Hr></Hr>
           <Heading style={discount}>Get 40% off</Heading>
          <Hr></Hr>
          <text style={messageStyle}>As a thank you for being part of our community, we wanted to make your birthday even more special. Use the code BIRTHDAY20 at checkout to claim your 40% discount on any purchase. Whether you’ve been eyeing something or want to treat yourself, now is the perfect time!</text>
            <Img
              src={`https://us.123rf.com/450wm/wongpongj/wongpongj2208/wongpongj220800003/189789637-concetto-di-shopping-online-una-donna-riceve-un-coupon-dallo-smartphone-con-una-borsa-della-spesa-e.jpg?ver=6`}
              width="300"
              height="300"
              alt="discount"
              style={discount_img}
            /> 
            <button style={buttonStyle}>Shop Now</button>
            <text style={note}>
              *Your birthday discount is valid for the next 7 days, so don't miss out!
            </text>
          </Container>
        </Body>
      </Html>
    );
  };

  export default birthdayCoupon;

  const heading = {
    textAlign: "center",
    margin: "0",
    lineHeight: "32px",
  };

  const discount = {
    textAlign: "center",
    margin: "0",
    lineHeight: "0px",
    fontSize: "50px",   
    padding: "50px",    
    backgroundImage: "url('/static/golden-coupon.png')",
  };
  
  const discount_img={
    display: "block",
    margin: "0 auto",
    maxWidth: "100%",
    height: "auto",
  }
  const main = {
    backgroundColor: "#ffffff",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
    backgroundImage: "url('/static/Golden.png')",
  };

  
  const logo = {
    display: "block",
    margin: "0 auto",
  };

  const buttonStyle = {
    backgroundColor: "#fea3a2",
    color: "#ffffff",
    padding: "12px 20px",
    fontSize: "16px",
    fontWeight: "bold",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    display: "block",
    margin: "20px auto",
    textAlign: "center",
  };
  const messageStyle = {
    display: "block",
    fontSize: "18px",
    lineHeight: "1.5",
    color: "#333333",
    textAlign: "center" as const,
    margin: "20px auto",
    padding: "0 20px",
    fontFamily: "'Arial', sans-serif",
    maxWidth: "600px",
    fontWeight: "normal",
  };

  const note = {
    display: "block",
    fontSize: "14px",
    fontStyle: "italic",
    color: "#666666",
    textAlign: "center" as const,
    margin: "20px auto",
    padding: "10px",
    fontFamily: "'Arial', sans-serif",
    maxWidth: "500px",
  };