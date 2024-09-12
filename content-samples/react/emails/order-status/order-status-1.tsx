import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";


interface OrderStatusEmailProps {
  username?: string;
  orderId?: string;
  orderStatus?: string;
  orderLink?: string;
  userProfileLink?: string;
}

export const OrderStatusEmail = ({
  username,
  orderId,
  orderStatus,
  orderLink,
}: OrderStatusEmailProps) => (
  <Html>
    <Head />
    <Preview>Your Order Status</Preview>
    <Body style={main}>
      <Container style={container}>

        <Heading style={h1}>{username}, your order status update!</Heading>
        <Section style={section}>

          <Text style={heroText}>
            Your order #{orderId} has been {orderStatus}!
          </Text>

          <Img style={img}
            src={"https://cdn-icons-png.flaticon.com/512/65/65998.png"}
            alt={`Image of ${orderStatus}`}
          />
          <Button style={button} href={orderLink}>
            View Order Details
          </Button>
        </Section>


        <Text style={links}>
          <Link style={link} href="#">Browse our full selection</Link> ・{" "}
          <Link style={link} href="#">CNeed help? Contact us!</Link>
        </Text>


        <Text style={footer}>
          Business Inc. ・123 Business St ・City, Country 12345
        </Text>

      </Container>
    </Body>
  </Html>
);

OrderStatusEmail.PreviewProps = {
  username: "Noa",
  orderId: "284695713",
  orderStatus: "Packed",
  orderLink: "https://www.google.com/",
  userProfileLink: "https://www.google.com/",
} as OrderStatusEmailProps;

export default OrderStatusEmail;

const section = {
  padding: "30px",
  border: "solid 1px #e5e5e5",
  borderRadius: "8px",
  textAlign: "center" as const,
  backgroundColor: "#fdfdfd",
  boxShadow: "0 6px 15px rgba(0, 0, 0, 0.05)",
};

const img = {
  marginBottom: "20px",
  display: "block",
  margin: "0 auto",
  borderRadius: "10px",
  width: "60%",
  height: "auto",
};


const links = {
  textAlign: "center" as const,
};

const link = {
  color: "#0366d6",
  fontSize: "12px",
  textDecoration: "underline",
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
  marginTop: "20px",

};

const footer = {
  fontSize: "12px",
  color: "#b7b7b7",
  lineHeight: "15px",
  textAlign: "center" as const,
  marginBottom: "50px",
};


const main = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
};

const container = {
  margin: "0 auto",
  padding: "0px 20px",
};

const h1 = {
  color: "#1d1c1d",
  fontSize: "36px",
  fontWeight: "700",
  margin: "30px 0",
  padding: "0",
  lineHeight: "42px",
  textAlign: "center" as const,
};

const heroText = {
  fontSize: "20px",
  lineHeight: "28px",
  marginBottom: "30px",
};

