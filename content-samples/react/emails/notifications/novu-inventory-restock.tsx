  import {
    Body,
    Button,
    Container,
    Head,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Text,
  } from "@react-email/components";
  import * as React from "react";

  interface InventoryRestockAlertProps {
    username?: string;
    productName?: string;
    productLink?: string;
    productImage?: string;
  }

  export const InventoryRestockAlertEmail = ({
    username,
    productName,
    productLink,
    productImage,
  }: InventoryRestockAlertProps) => (
    <Html>
      <Head />
      <Preview>Your favorite item is back in stock!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src="https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/dca73b36-cf39-4e28-9bc7-8a0d0cd8ac70/standalone-gradient2x_2/w=128,quality=90,fit=scale-down"
            width="32"
            height="32"
            alt="Novu Logo"
            style={{ display: "block", margin: "0 auto" }}
          />

          <Text style={title}>
            <strong>@{username}</strong>, the <strong>{productName}</strong> is
            back in stock!
          </Text>

          <Section style={section}>
            <Text style={text}>
              Hey <strong>{username}</strong>!
            </Text>
            <Text style={text}>
              Good news! The product you've been waiting for,{" "}
              <strong>{productName}</strong>, is now back in stock. Act fast to
              get it before it's gone again!
            </Text>
            <Img
              src={productImage}
              width="60%"
              height="auto"
              alt={`Image of ${productName}`}
              style={{ marginBottom: "20px", display: "block", margin: "0 auto", borderRadius: "10px" }} // Add rounded corners
            />
            <Button style={button} href={productLink}>
              Buy Now
            </Button>
            </Section>

          <Text style={links}>
            <Link style={link} href="#">Browse more products</Link> ・{" "}
            <Link style={link} href="#">Contact support</Link>
          </Text>

          <Text style={footer}>
            Business Inc. ・123 Business St ・City, Country 12345
          </Text>
        </Container>
      </Body>
    </Html>
  );

  InventoryRestockAlertEmail.PreviewProps = {
    username: "customer123",
    productName: "Wireless Headphones",
    productLink: "https://www.google.com",
    productImage: "https://m.media-amazon.com/images/I/41+1Csr1pSL._AC_SX679_.jpg",
  } as InventoryRestockAlertProps;

  export default InventoryRestockAlertEmail;

  const main = {
    backgroundColor: "#f9f9f9", 
    color: "#24292e",
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
  };

  const container = {
    maxWidth: "480px",
    margin: "0 auto",
    padding: "40px 20px 48px",
  };

  const title = {
    fontSize: "28px", 
    lineHeight: 1.4,
    textAlign: "center",
    color: "#333", 
    margin: "20px 0",
  };


  const section = {
    padding: "30px",
    border: "solid 1px #e5e5e5",
    borderRadius: "8px",
    textAlign: "center",
    backgroundColor: "#fdfdfd", 
    boxShadow: "0 6px 15px rgba(0, 0, 0, 0.05)", 
  };

  const text = {
    margin: "0 0 10px 0",
    textAlign: "left" as const,
  };

  const button = {
    fontSize: "16px", 
    backgroundColor: "#ff7f50", 
    color: "#fff",
    padding: "14px 28px", 
    borderRadius: "5px", 
    textDecoration: "none", 
    display: "inline-block",
    transition: "background-color 0.3s ease", 
  };

  const links = {
    textAlign: "center" as const,
  };

  const link = {
    color: "#0366d6", 
    fontSize: "12px",
    textDecoration: "underline", 
  };

  const footer = {
    color: "#6a737d",
    fontSize: "12px",
    textAlign: "center",
    marginTop: "40px", 
    borderTop: "1px solid #dedede", 
    paddingTop: "20px", 
  };
