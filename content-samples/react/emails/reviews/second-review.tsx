import {
  Body,
  Container,
  Column,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface NovuReviewEmailProps {
  titleText?: string;
  reviewText?: string;
  reviwStars?: string[];
  socialMediaIcons?: string[];
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const NovuReviewEmail = ({
  titleText = "Your opinion is important!",
  reviewText = "Alan Turing, do you have a moment? We would like to know if everything went well for you. Take a moment to review your most recent purchases.",
  reviwStars = Array(5).fill(`https://react-email-demo-48zvx380u-resend.vercel.app/static/amazon-rating.gif`),
  socialMediaIcons = [
    `https://react-email-demo-48zvx380u-resend.vercel.app/static/amazon-instagram.jpg`,
    `https://react-email-demo-48zvx380u-resend.vercel.app/static/amazon-facebook.jpg`,
    `https://react-email-demo-48zvx380u-resend.vercel.app/static/amazon-twitter.jpg`,
  ],
}: NovuReviewEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Novu Review</Preview>

      <Body style={main}>
        <Container style={container}>
          <Section>
            <Row>
              <Column align="center">
                <Link href="https://www.novu.co">
                  <Img
                    src={`https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/dca73b36-cf39-4e28-9bc7-8a0d0cd8ac70/standalone-gradient2x_2/w=128,quality=90,fit=scale-down`}
                    width="48"
                    height="48"
                    alt="Novu Logo"
                  />
                </Link>
              </Column>
            </Row>
          </Section>

          <Section>
            <Row>
              <Column align="center">
                <Text style={title}>{titleText}</Text>
                <Text>{reviewText}</Text>
              </Column>
            </Row>
          </Section>

          <Section>
            <Row>
              <Column>
                <Img
                  src={`https://react-email-demo-48zvx380u-resend.vercel.app/static/amazon-book.jpg`}
                  alt="Novu Book"
                  width="274"
                  height="350"
                />
              </Column>

              <Column style={ratingContent}>
                <Text>
                  14 Habits of Highly Productive Developers (English Edition)
                </Text>
                <Text>Start with rating this product</Text>

                {reviwStars.map((star, index) => (
                  <Img
                    key={index}
                    src={star}
                    alt="Novu Rating"
                    style={rating}
                  />
                ))}

                <Text>
                  Your reviews will be posted on Novu using your public name.
                  <Link>Check your public name.</Link>
                </Text>
              </Column>
            </Row>
          </Section>

          <Section>
            <Row>
              <Column align="center">
                <Text style={previewPurchase}>
                  How about evaluating a previous purchase?{" "}
                  <Link style={previewPurchaseLink}>View more</Link>
                </Text>
              </Column>
            </Row>
          </Section>

          <Hr style={{ borderColor: "#cccccc" }} />

          <Section>
            <Row>
              <Column>
                <Img
                  src={`https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/dca73b36-cf39-4e28-9bc7-8a0d0cd8ac70/standalone-gradient2x_2/w=128,quality=90,fit=scale-down`}
                  alt="Novu Logo"
                  width="23"
                  height="23"
                />
              </Column>

              <Column align="right">
                {socialMediaIcons.map((src, index) => (
                  <Img
                    key={index}
                    src={src}
                    alt="Novu Social Midia"
                    width="30"
                    height="30"
                    style={socialMedia}
                  />
                ))}
              </Column>
            </Row>
          </Section>

          <Section>
            <Row>
              <Text style={footerText}>
                Customer reviews must adhere to the{" "}
                <Link style={communityLink}>Community Guidelines</Link> .
              </Text>
              <Text style={footerText}>
                We hope this message was helpful to you. However, if you prefer
                not to receive this type of communication from{" "}
                <Link style={urlLink}>Novu.co</Link> at{" "}
                <Link style={urlLink}>alanturing@gmail.com </Link>,{" "}
                <Link style={clickHereLink}>click here</Link> .
              </Text>
              <Text style={footerText}>
                Please note that product prices and availability are subject to
                change.
              </Text>
              <Text style={footerText}>
                © 2023 Novu.co, Inc. or its affiliates. Novu and all
                associated marks are trademarks of Novu.co, Inc. or its
                affiliates.
              </Text>
              <Text style={footerText}>Reference: 706784740</Text>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default NovuReviewEmail;

const main = {
  fontFamily: "Ember,Helvetica,Arial,sans-seri",
  backgroundColor: "#ffffff",
};

const container = {
  borderTop: "4px solid #FF9900",
  margin: "0 auto",
  padding: "20px",
  width: "640px",
};

const title = {
  color: "#232f3e",
  fontSize: "36px",
  lineHeight: "38px",
  fontWeight: "400",
  margin: "20px 0",
};

const ratingContent = {
  paddingLeft: "30px",
};

const rating = {
  display: "inline-block",
};

const previewPurchase = {
  background: "#008296",
  color: "#ffffff",
  padding: "8px 0",
};

const previewPurchaseLink = {
  color: "#ffffff",
  textDecoration: "underline",
  cursor: "pointer",
};

const socialMedia = {
  display: "inline-block",
  marginLeft: "10px",
};

const communityLink = {
  color: "#666666",
  textDecoration: "underline",
  cursor: "pointer",
};

const clickHereLink = {
  color: "#999999",
  textDecoration: "underline",
  cursor: "pointer",
};

const urlLink = {
  color: "#1155cc",
  textDecoration: "underline",
  cursor: "pointer",
};

const footerText = {
  fontSize: "10px",
  color: "#666666",
  margin: "8px 0",
};
