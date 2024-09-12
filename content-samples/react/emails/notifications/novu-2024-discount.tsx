import {
  Body,
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

interface NovuBusinessOfferProps {
  offerLink?: string;
}

export const NovuBusinessOffer = ({ offerLink }: NovuBusinessOfferProps) => (
  <Html>
    <Head />
    <Preview>2024 | Novu Business with 60% off!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={headerSection}>
          <Img
            src="https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/dca73b36-cf39-4e28-9bc7-8a0d0cd8ac70/standalone-gradient2x_2/w=128,quality=90,fit=scale-down"
            alt="Novu Logo"
            width={100}
            height={100}
            style={logo}
          />
          <Text style={headerText}>2024</Text>
        </Section>

        <Heading style={heading}>Start 2024 with 60% off!</Heading>

        <Section style={body}>
          <Text style={paragraph}>
            Save on monthly costs with a discounted 12-month plan! <br />
            Offer ends tomorrow at 3:31 PM!
          </Text>
        </Section>

        <Section style={center}>
          <Link style={button} href={offerLink}>
            GET 60% OFF
          </Link>
        </Section>

        <Section>
          <Text style={subHeading}>
            Unlock more features with Business Novu!
          </Text>
          <ul style={featuresList}>
            <li>
              <Text style={boldText}>📈 Included Monthly Triggers 250K</Text>
            </li>
            <li>
              <Text style={boldText}>📅 1 year Feed Retention</Text>
            </li>
            <li>
              <Text style={boldText}>🗂️ 30 days Activity Feed Retention</Text>
            </li>
          </ul>
        </Section>

        <Text style={{ ...subHeading, ...center }}>
          Ready to reach your goals in 2024?
        </Text>
        <Text style={{ ...paragraph, ...center }}>
          Save 60% when you upgrade to Super now.
          <br />
          Limited time offer, ends tomorrow at 3:31 PM!
        </Text>

        <Section style={center}>
          <Link style={button} href={offerLink}>
            GET 60% OFF
          </Link>
        </Section>

        <Text style={footer}>
          © 2022 | Novu Inc., 350 Mission Street, San Francisco, CA 94105,
          U.S.A. | www.novu.com
        </Text>
      </Container>
    </Body>
  </Html>
);

NovuBusinessOffer.PreviewProps = {
  offerLink: "https://novu.co/pricing/",
} as NovuBusinessOfferProps;

export default NovuBusinessOffer;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 25px 48px",
  maxWidth: "600px",
  backgroundColor: "#fff",
  borderRadius: "8px",
};

const heading = {
  fontSize: "28px",
  fontWeight: "bold",
  marginTop: "24px",
  color: "#4b4b4b",
  textAlign: "center" as const,
};

const body = {
  margin: "16px 0",
  textAlign: "center" as const,
};

const subHeading = {
  fontSize: "20px",
  fontWeight: "600",
  marginTop: "24px",
  textAlign: "center" as const,
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  color: "#4b4b4b",
};

const boldText = {
  fontSize: "16px",
  fontWeight: "600",
  marginBottom: "4px",
};

const button = {
  display: "inline-block",
  width: "50%",
  fontFamily: "Arial, sans-serif",
  fontSize: "16px",
  fontWeight: "bold",
  textAlign: "center" as const,
  color: "#ffffff",
  backgroundColor: "#3c4dff",
  padding: "12px 0",
  borderRadius: "12px",
  textDecoration: "none",
};

const center = {
  textAlign: "center" as const,
  margin: "24px 0",
};

const headerSection = {
  backgroundColor: "rgb(26, 3, 61)",
  padding: "20px",
  textAlign: "center" as const,
  borderRadius: "8px 8px 0 0",
};

const logo = {
  display: "block",
  margin: "0 auto",
};

const headerText = {
  color: "#ffffff",
  fontSize: "36px",
  fontWeight: "bold",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
  letterSpacing: "2px",
  marginTop: "10px",
  marginBottom: "0",
};

const featuresList = {
  listStyleType: "none",
  padding: "0",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  textAlign: "center" as const,
};
