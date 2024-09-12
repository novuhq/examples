import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";


/*
1. based on your intrestes we send you our new products
2. order status
*/
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

          <Img
            src={"data:image/png;base64,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"}
            width="60%"
            height="auto"
            alt={`Image of ${orderStatus}`}
            style={{ marginBottom: "20px", display: "block", margin: "0 auto", borderRadius: "10px" }} // Add rounded corners
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

