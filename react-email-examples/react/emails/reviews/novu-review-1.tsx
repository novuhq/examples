import {
  Body,
  Button,
  Container,
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
  authorName?: string;
  authorImage?: string;
  reviewText?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const NovuReviewEmail = ({
  authorName,
  authorImage,
  reviewText,
}: NovuReviewEmailProps) => {
  const previewText = `Read ${authorName}'s review`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>

      <Body style={main}>
        <Container style={container}>
          <Section>
            <Img
              src={`https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/dca73b36-cf39-4e28-9bc7-8a0d0cd8ac70/standalone-gradient2x_2/w=128,quality=90,fit=scale-down`}
              width="96"
              height="96"
              alt="Novu"
            />
          </Section>
          <Section>
            <Img
              src={authorImage}
              width="96"
              height="96"
              alt={authorName}
              style={userImage}
            />
          </Section>
          <Section style={{ paddingBottom: "20px" }}>
            <Row>
              <Text style={heading}>Here's what {authorName} wrote</Text>
              <Text style={review}>{reviewText}</Text>
              <Text style={paragraph}>
                Now that the review period is over, we’ve posted {authorName}
                ’s review to your Novu profile.
              </Text>
              <Text style={{ ...paragraph, paddingBottom: "16px" }}>
                While it’s too late to write a review of your own, you can send
                your feedback to {authorName} using your Novu message thread.
              </Text>

              <Button style={button} href="https://novu.co/">
                Send My Feedback
              </Button>
            </Row>
          </Section>

          <Hr style={hr} />

          <Section>
            <Row>
              <Text style={{ ...paragraph, fontWeight: "700" }}>
                Common questions
              </Text>
              <Text>
                <Link href="https://novu.co/help/article/13" style={link}>
                  How do reviews work?
                </Link>
              </Text>
              <Text>
                <Link href="https://novu.co/help/article/1257" style={link}>
                  How do star ratings work?
                </Link>
              </Text>
              <Text>
                <Link href="https://novu.co/help/article/995" style={link}>
                  Can I leave a review after 14 days?
                </Link>
              </Text>
              <Hr style={hr} />
              <Text style={footer}>
                Novu, Inc., 888 Brannan St, San Francisco, CA 94103
              </Text>
              <Link href="https://novu.co" style={reportLink}>
                Report unsafe behavior
              </Link>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

NovuReviewEmail.PreviewProps = {
  authorName: "Alex",
  authorImage: `https://react-email-demo-48zvx380u-resend.vercel.app/static/airbnb-review-user.jpg`,
  reviewText: `“Alan was a great guest! Easy communication, the apartment was left
    in great condition, very polite, and respectful of all house rules.
    He’s welcome back anytime and would easily recommend him to any
    host!”`,
} as NovuReviewEmailProps;

export default NovuReviewEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px",
  maxWidth: "100%",
};

const userImage = {
  margin: "0 auto",
  marginBottom: "16px",
  borderRadius: "50%",
};

const heading = {
  fontSize: "32px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#484848",
};

const paragraph = {
  fontSize: "18px",
  lineHeight: "1.4",
  color: "#484848",
};

const review = {
  ...paragraph,
  padding: "24px",
  backgroundColor: "#f2f3f3",
  borderRadius: "4px",
};

const button = {
  backgroundColor: "#ff5a5f",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "18px",
  paddingTop: "19px",
  paddingBottom: "19px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  width: "100%",
};

const link = {
  ...paragraph,
  color: "#ff5a5f",
  display: "block",
};

const reportLink = {
  fontSize: "14px",
  color: "#9ca299",
  textDecoration: "underline",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#9ca299",
  fontSize: "14px",
  marginBottom: "10px",
};
