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

interface NovuTermsUpdateEmailProps {
  username?: string;
  updateLink?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const NovuTermsUpdateEmail = ({
  username,
  updateLink,
}: NovuTermsUpdateEmailProps) => (
  <Html>
    <Head />
    <Preview>
      Important update: Our terms of service have changed
    </Preview>
    <Body style={main}>
      <Section style={bannerSection}>
        <Text style={bannerText}>
          🚨 Important Update: Changes to our terms that may affect your account!
        </Text>
        <Button style={bannerButton} href={updateLink}>
          Learn more
        </Button>
      </Section>

      <Container style={container}>
        <Img
          src="https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/dca73b36-cf39-4e28-9bc7-8a0d0cd8ac70/standalone-gradient2x_2/w=128,quality=90,fit=scale-down"
          width="32"
          height="32"
          alt="Novu"
        />

        <Text style={title}>
          <strong>@{username}</strong>, there has been an update to our terms of service.
        </Text>

        <Section style={section}>
          <Text style={text}>
            Hi <strong>{username}</strong>,
          </Text>
          <Text style={text}>
            We wanted to inform you that we have updated our terms of service. Please review the changes to understand how they may affect you.
          </Text>
          <Button style={button} href={updateLink}>Review the changes</Button>
        </Section>

        <Section style={linksSection}>
          <Text style={links}>
            <Link style={link} href="https://novu.co/privacy-policy">Read our privacy policy</Link> ・{" "}
            <Link style={link} href="https://novu.co/contact-support">Contact support</Link>
          </Text>
        </Section>

        <Text style={footer}>
          Novu, Inc. ・88 Colin P Kelly Jr Street ・San Francisco, CA 94107
        </Text>
      </Container>
    </Body>
  </Html>
);

NovuTermsUpdateEmail.PreviewProps = {
  username: "customer x",
  updateLink: "https://novu.co/terms-updated",
} as NovuTermsUpdateEmailProps;

export default NovuTermsUpdateEmail;

const main = {
  backgroundColor: "#ffffff",
  color: "#24292e",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
};

const container = {
  maxWidth: "480px",
  margin: "0 auto",
  padding: "20px 0 48px",
};

const title = {
  fontSize: "24px",
  lineHeight: 1.25,
};

const section = {
  padding: "24px",
  border: "solid 1px #dedede",
  borderRadius: "5px",
  textAlign: "center" as const,
};

const text = {
  margin: "0 0 10px 0",
  textAlign: "left" as const,
};

const button = {
  fontSize: "14px",
  backgroundColor: "#007bff",
  color: "#fff",
  lineHeight: 1.5,
  borderRadius: "0.5em",
  padding: "12px 24px",
  textDecoration: "none",
};

const linksSection = {
  marginTop: "20px",
};

const links = {
  fontSize: "14px",
  color: "#007bff",
};

const link = {
  color: "#007bff",
  textDecoration: "none",
};

const footer = {
  fontSize: "12px",
  color: "#6c757d",
  marginTop: "20px",
  textAlign: "center" as const,
};

const bannerSection = {
  backgroundColor: "#ffcc00",
  padding: "16px",
  borderRadius: "8px",
  textAlign: "center" as const,
  marginBottom: "20px",
};

const bannerText = {
  fontSize: "16px",
  fontWeight: "bold",
  color: "#24292e",
};

const bannerButton = {
  fontSize: "14px",
  backgroundColor: "#d73a49", 
  color: "#fff",
  padding: "12px 24px",
  borderRadius: "0.5em",
  textDecoration: "none",
};
