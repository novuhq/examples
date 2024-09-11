import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Link,
  Section,
  Text,
  Hr,
  Img,
} from "@react-email/components";
import React from "react";

interface UnsubscribeNotificationEmailProps {
  userFirstname: string;
}

function UnsubscribeNotificationEmail({
  userFirstname,
}: UnsubscribeNotificationEmailProps) {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Section>
            <Img
              src={`https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/dca73b36-cf39-4e28-9bc7-8a0d0cd8ac70/standalone-gradient2x_2/w=128,quality=90,fit=scale-down`}
              alt="Novu Logo"
              width="120"
              height="120"
              style={logoSection}
            />
          </Section>

          <Section>
            <Text style={heading}>Hello {userFirstname},</Text>
            <Text style={text}>
              We received your request to cancel your subscription. Before
              finalizing the cancellation, we’d appreciate your feedback to help
              us improve our service.
            </Text>
          </Section>

          <Hr style={hr} />
          <Section style={infoBox}>
            <Text style={infoHeading}>We Value Your Feedback</Text>
            <Text style={text}>
              Please let us know why you're considering canceling your
              subscription. Your insights will help us enhance our services.
            </Text>
            <form action="https://novu.co/submit-survey" method="POST">
              <div style={formField}>
                <label>
                  <input type="radio" name="reason" value="too_expensive" /> Too
                  Expensive
                </label>
              </div>
              <div style={formField}>
                <label>
                  <input type="radio" name="reason" value="not_needed" /> Not
                  Needed
                </label>
              </div>
              <div style={formField}>
                <label>
                  <input type="radio" name="reason" value="bad_experience" />{" "}
                  Bad Experience
                </label>
              </div>
              <div style={formField}>
                <Button
                  type="submit"
                  style={{ ...button, ...feedbackButton }}
                  href={"https://novu.co/feedback"}
                >
                  Submit Feedback
                </Button>
              </div>
            </form>
          </Section>

          <Hr style={hr} />
          <Section style={infoBox}>
            <Text style={infoHeading}>Pause or Modify Your Subscription</Text>
            <Text style={text}>
              If you prefer to temporarily suspend or modify your subscription
              instead of canceling it, please choose one of the following
              options:
            </Text>
            <div style={buttonContainer}>
              <Button href="https://novu.co/pause-subscription" style={button}>
                Pause Subscription
              </Button>
              <Button href="https://novu.co/modify-plan" style={button}>
                Modify Plan
              </Button>
              <Button href="https://support.novu.co" style={button}>
                Contact Support
              </Button>
            </div>
          </Section>

          <Hr style={hr} />
          <Section>
            <Text style={footerText}>
              If you have any further questions or need assistance, feel free to
              contact our support team.
            </Text>
            <Link href="https://support.novu.co" style={link}>
              Contact Support
            </Link>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

UnsubscribeNotificationEmail.PreviewProps = {
  userFirstname: "Joe",
} as UnsubscribeNotificationEmailProps;

export default UnsubscribeNotificationEmail;

const main = {
  backgroundColor: "#f9f9f9",
  fontFamily: "Arial, sans-serif",
  padding: "20px",
};

const container = {
  maxWidth: "600px",
  margin: "0 auto",
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "8px",
};

const logoSection = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const heading = {
  fontSize: "24px",
  fontWeight: "bold",
  color: "#333",
  textAlign: "center" as const,
};

const text = {
  fontSize: "16px",
  color: "#555",
};

const formField = {
  marginBottom: "10px",
};

const button = {
  backgroundColor: "#f5f5f5",
  color: "#333",
  textDecoration: "none",
  padding: "10px 20px",
  borderRadius: "8px",
  fontSize: "16px",
  border: "1px solid #ddd",
  display: "inline-block",
  marginRight: "10px",
};

const feedbackButton = {
  backgroundColor: "#ef4183",
  color: "#fff",
  padding: "12px 24px",
  borderRadius: "20px",
  fontSize: "18px",
};

const buttonContainer = {
  display: "flex",
  gap: "10px",
  marginTop: "10px",
};

const link = {
  color: "#007bff",
  textDecoration: "underline",
  fontSize: "14px",
};

const hr = {
  border: "none",
  borderTop: "1px solid #ddd",
  margin: "20px 0",
};

const footerText = {
  fontSize: "12px",
  color: "#999",
};

const infoBox = {
  backgroundColor: "#eaf4fc",
  padding: "20px",
  borderRadius: "8px",
  border: "1px solid #d0e5f0",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  marginBottom: "20px",
};

const infoHeading = {
  fontSize: "20px",
  fontWeight: "bold",
  color: "#2c3e50",
  marginBottom: "10px",
};
