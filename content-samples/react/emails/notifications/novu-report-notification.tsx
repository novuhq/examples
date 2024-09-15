import {
  Body,
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

interface NovuReportNotificationEmailProps {
  recipientName: string;
  reportTitle: string;
  reportDateRange: string;
  highlights: string;
  dashboardLink: string;
  helpCenterLink: string;
  twitterLink: string;
  facebookLink: string;
  linkedinLink: string;
  logoSrc: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const NovuReportNotificationEmail = ({
  recipientName,
  reportTitle,
  reportDateRange,
  highlights,
  dashboardLink,
  helpCenterLink,
  twitterLink,
  facebookLink,
  linkedinLink,
  logoSrc
}: NovuReportNotificationEmailProps) => (
  <Html>
      <Head />
      <Preview>Your Personal Report Is Ready!</Preview>
      <Body style={styles.main}>
        <Container style={styles.container}>
          <Section style={styles.logo}>
            <Img width={114} src={logoSrc} alt="Company Logo" />
          </Section>
          <Section style={styles.sectionsBorders}>
            <Row>
              <Column style={styles.sectionBorder} />
              <Column style={styles.sectionCenter} />
              <Column style={styles.sectionBorder} />
            </Row>
          </Section>
          <Section style={styles.content}>
            <Text style={styles.paragraph}>Dear {recipientName},</Text>
            <Text style={styles.paragraph}>
              We’re excited to let you know that your personalized report is now available in your private dashboard. 🎉
            </Text>
            <Text style={styles.paragraph}>
              <strong>Report Summary:</strong>
            </Text>
            <Text style={styles.paragraph}>
              <strong>Title:</strong> {reportTitle}
            </Text>
            <Text style={styles.paragraph}>
              <strong>Date Range:</strong> {reportDateRange}
            </Text>
            <Text style={styles.paragraph}>
              <strong>Highlights:</strong> {highlights}
            </Text>
            <Text style={styles.paragraph}>
              To access your report, simply click the button below:
            </Text>
            <Link href={dashboardLink} style={styles.link} target="_blank" rel="noopener noreferrer">
              Access My Dashboard
            </Link>
            <Text style={styles.paragraph}>
              If you have any questions or need further assistance, feel free to reply to this email or visit our{' '}
              <Link href={helpCenterLink} style={styles.link} target="_blank" rel="noopener noreferrer">
                Help Center
              </Link>.
            </Text>
            <Text style={styles.paragraph}>
              Best regards,
              <br />
              The Example Team
            </Text>
          </Section>
        </Container>

        <Section style={styles.footer}>
          <Row>
            <Column align="right" style={{ width: '50%', paddingRight: '8px' }}>
              <Link href={twitterLink} style={styles.link} target="_blank" rel="noopener noreferrer">
                <Img src="https://react-email-demo-48zvx380u-resend.vercel.app/static/twitch-icon-twitter.png" />
              </Link>
            </Column>
            <Column align="left" style={{ width: '50%', paddingLeft: '8px' }}>
              <Link href={facebookLink} style={styles.link} target="_blank" rel="noopener noreferrer">
                <Img src="https://react-email-demo-48zvx380u-resend.vercel.app/static/twitch-icon-facebook.png" />
              </Link>
            </Column>
          </Row>
          <Row>
            <Text style={{ textAlign: 'center', color: '#706a7b' }}>
              © 2024 Example Technologies, Inc. All Rights Reserved <br />
              500 Howard Street, San Francisco, CA, 94105 - USA
            </Text>
          </Row>
        </Section>
      </Body>
    </Html>

);

NovuReportNotificationEmail.PreviewProps = {
  recipientName: "BatSheva",
  reportTitle: "Monthly Performance Metrics",
  reportDateRange: "August 2024",
  highlights: "Increased user engagement, improved conversion rates, and overall growth.",
  dashboardLink: "https://example.com/dashboard",
  helpCenterLink: "https://example.com/help-center",
  twitterLink: "https://twitter.com/example",
  facebookLink: "https://facebook.com/example",
  linkedinLink: "https://linkedin.com/company/example",
  logoSrc: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/dca73b36-cf39-4e28-9bc7-8a0d0cd8ac70/standalone-gradient2x_2/w=128,quality=90,fit=scale-down" // Path or URL to the company logo
} as NovuReportNotificationEmailProps;


const styles = {
  main: {
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
    backgroundColor: '#ffffff',
    color: '#333',
  },
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #e0e0e0',
    borderRadius: '10px',
    backgroundColor: '#ffffff',
  },
  logo: {
    textAlign: 'center' as const,
    marginBottom: '20px',
  },
  sectionsBorders: {
    width: '100%',
    borderBottom: '1px solid #e0e0e0',
    marginBottom: '20px',
  },
  sectionBorder: {
    width: '100%',
    borderRight: '1px solid #e0e0e0',
  },
  sectionCenter: {
    width: '100%',
  },
  content: {
    marginBottom: '20px',
  },
  paragraph: {
    fontSize: '16px',
    lineHeight: '1.5',
    marginBottom: '10px',
  },
  link: {
    color: '#007BFF',
    textDecoration: 'none',
  },
  footer: {
    textAlign: 'center' as const,
    fontSize: '12px',
    color: '#888',
    marginTop: '20px',
  }
};

export default NovuReportNotificationEmail;
