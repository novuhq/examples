import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface NovuPolicyUpdateProps {
  termsLink?: string;
  privacyPolicyLink?: string;
  giftCardsLink?: string;
  contentPolicyLink?: string;
}

const NovuPolicyUpdate = ({
  termsLink = "https://novu.co/terms",
  privacyPolicyLink = "https://novu.co/privacy",
  giftCardsLink = "https://novu.co/gift-cards",
  contentPolicyLink = "https://novu.co/content-policy",
}: NovuPolicyUpdateProps) => (
  <Html>
    <Head />
    <Preview>An update on our terms of use and policies</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={header}>
          <Img
            src="https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/dca73b36-cf39-4e28-9bc7-8a0d0cd8ac70/standalone-gradient2x_2/w=128,quality=90,fit=scale-down"
            width={62}
            height={62}
            alt="Novu"
          />
        </Section>

        <Heading style={heading}>Important Policy Updates</Heading>

        <Text style={paragraph}>
          At Novu, we are committed to continually improving our platform to
          better serve you. We have recently updated our terms and policies to
          ensure they meet the needs of our growing community. Please review the
          updates below, which will go into effect on September 15, 2024.
        </Text>

        <Section style={policySection}>
          <Heading style={policyHeading}>Terms of Use</Heading>
          <Text style={policyText}>
            We've made updates to our dispute resolution process and the choice
            of law applicable to our Terms. Please review these changes
            carefully to understand how they might affect you.
            <Link href={termsLink} style={link}>
              Review the revised Terms of Use →
            </Link>
          </Text>
        </Section>

        <Section style={policySection}>
          <Heading style={policyHeading}>Privacy Policy</Heading>
          <Text style={policyText}>
            Our Privacy Policy has been updated to provide more details on how
            we collect, use, and share your information. For our US users,
            additional context about data collection and rights has been added.
            <Link href={privacyPolicyLink} style={link}>
              Review the revised Privacy Policy →
            </Link>
          </Text>
        </Section>

        <Section style={policySection}>
          <Heading style={policyHeading}>
            Gift Cards, Credits, and Coupons Policy
          </Heading>
          <Text style={policyText}>
            We’ve updated our policy to clarify that only Novu-wide gift cards
            are permitted. Review the updated policy for details.
            <Link href={giftCardsLink} style={link}>
              Review the Gift Cards Policy →
            </Link>
          </Text>
        </Section>

        <Section style={policySection}>
          <Heading style={policyHeading}>Content Policy</Heading>
          <Text style={policyText}>
            We’ve introduced new guidelines on mature content and its listing.
            Make sure to review these updated policies.
            <Link href={contentPolicyLink} style={link}>
              Read Novu’s Content Policy →
            </Link>
          </Text>
        </Section>

        <Hr style={hr} />
        <Text style={footer}>
          You are receiving this email to inform you about important updates to
          Novu’s policies.
          <br /> ©2022 Novu Technologies, LLC, a Salesforce company. 500 Howard
          Street, San Francisco, CA 94105, USA <br />
        </Text>
      </Container>
    </Body>
  </Html>
);

export default NovuPolicyUpdate;

const main = {
  backgroundColor: "#f3f4f6",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
  padding: "40px 0",
};

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #e0e0e0",
  borderRadius: "12px",
  width: "600px",
  margin: "0 auto",
  padding: "20px 40px",
  textAlign: "left" as const,
};

const header = {
  backgroundColor: "#4A90E2",
  padding: "20px 0",
  borderTopLeftRadius: "12px",
  borderTopRightRadius: "12px",
  color: "#ffffff",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center" as const,
};

const heading = {
  color: "#333333",
  fontSize: "24px",
  marginBottom: "20px",
  fontWeight: "bold" as const,
};

const paragraph = {
  color: "#555555",
  fontSize: "16px",
  lineHeight: "24px",
  margin: "20px 0",
};

const policySection = {
  margin: "20px 0",
};

const policyHeading = {
  color: "#4A90E2",
  fontSize: "20px",
  fontWeight: "bold" as const,
};

const policyText = {
  color: "#555555",
  fontSize: "16px",
  lineHeight: "24px",
};

const link = {
  color: "#4A90E2",
  textDecoration: "underline",
  fontWeight: "bold" as const,
};

const hr = {
  borderColor: "#e0e0e0",
  margin: "40px 0",
};

const footer = {
  color: "#888888",
  fontSize: "12px",
  lineHeight: "18px",
};
