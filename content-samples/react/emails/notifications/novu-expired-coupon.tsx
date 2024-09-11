import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface NovuExpiredCouponEmailProps {
  userFirstName?: string;
  CouponDate?: Date;
  expiresInDays?: number;
  CouponName?: string;
}

export const NovuExpiredCouponEmail = ({
  userFirstName,
  CouponDate,
  expiresInDays,
  CouponName,
}: NovuExpiredCouponEmailProps) => {
  let expiryDate;
  if (CouponDate) {
    const currentDate: Date = new Date();
    expiryDate = new Date(CouponDate as unknown as string);

    // Calculate days difference
    expiresInDays = Math.floor(
      (expiryDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24)
    );
  } else {
    // Handle case where expirationDate is undefined or invalid
    expiresInDays = undefined;
  }

  return (
    <Html>
      <Head />
      <Preview>Novu: Your Coupon is Expiring Soon!</Preview>
      <Body style={main}>
        <Container>
          <Section style={logo}>
            <Img
              src={`https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/dca73b36-cf39-4e28-9bc7-8a0d0cd8ac70/standalone-gradient2x_2/w=128,quality=90,fit=scale-down`}
              width="64"
              alt="Novu Logo"
            />
          </Section>

          <Section style={content}>
            <Row>
              <Img
                style={image}
                width={620}
                src={`https://react-email-demo-48zvx380u-resend.vercel.app/static/yelp-header.png`}
                alt="Coupon Header"
              />
            </Row>

            <Row style={{ ...boxInfos, paddingBottom: "0" }}>
              <Column>
                <Heading
                  style={{
                    fontSize: 32,
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "#333",
                  }}
                >
                  Hi {userFirstName},
                </Heading>

                {expiresInDays !== undefined && expiresInDays <= 5 ? (
                  <Text style={highlightText}>
                    🎉 Hurry! Your <strong>{CouponName}</strong> coupon expires
                    in {expiresInDays} days!
                  </Text>
                ) : (
                  <Text style={highlightText}>
                    🎉 You have a coupon for <strong>{CouponName}</strong>.
                  </Text>
                )}

                <Text style={paragraph}>
                  <b>Coupon expires on {expiryDate?.toLocaleDateString()}</b>
                </Text>

                <Text style={{ ...paragraph, marginTop: -5 }}>
                  Remember to use it before it expires!
                </Text>

                <Text style={footerText}>
                  If you lose the coupon or have any issues, feel free to visit
                  our support page.
                </Text>
              </Column>
            </Row>

            <Row style={{ ...boxInfos, paddingTop: "0" }}>
              <Column style={containerButton}>
                <Button style={button}>Use Your Coupon</Button>
              </Column>
            </Row>
          </Section>

          <Section style={containerImageFooter}>
            <Img
              style={image}
              width={620}
              src={`https://react-email-demo-48zvx380u-resend.vercel.app/static/yelp-footer.png`}
              alt="Coupon Footer"
            />
          </Section>

          <Text style={footer}>
            © 2024 | Novu Inc., 350 Mission Street, San Francisco, CA 94105,
            U.S.A. | www.novu.com
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

NovuExpiredCouponEmail.PreviewProps = {
  userFirstName: "Rachely",
  expiresInDays: 3,
  CouponDate: new Date("October 7, 2024, 10:58 am"),
  CouponName: "Birthday",
} as NovuExpiredCouponEmailProps;

export default NovuExpiredCouponEmail;

const main = {
  backgroundColor: "#f7f7f7",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, "Helvetica Neue", sans-serif',
  color: "#333",
  padding: "20px",
};

const paragraph = {
  fontSize: 16,
  color: "#555",
  lineHeight: "24px",
};

const highlightText = {
  fontSize: 18,
  fontWeight: "bold",
  color: "#e00707",
  textAlign: "center" as const,
  padding: "10px 0",
};

const footerText = {
  color: "rgb(0,0,0, 0.5)",
  fontSize: 14,
  marginTop: 10,
  textAlign: "center" as const,
};

const footer = {
  textAlign: "center" as const,
  fontSize: 12,
  color: "rgb(0,0,0, 0.7)",
};

const logo = {
  padding: "20px 0",
  textAlign: "center" as const,
};

const containerButton = {
  display: "flex",
  justifyContent: "center",
  padding: "20px 0",
};

const button = {
  backgroundColor: "#e00707",
  borderRadius: "5px",
  color: "#FFF",
  fontWeight: "bold",
  border: "none",
  cursor: "pointer",
  padding: "12px 30px",
  textAlign: "center" as const,
  textDecoration: "none",
};

const content = {
  backgroundColor: "#fff",
  border: "1px solid rgb(0,0,0, 0.1)",
  borderRadius: "8px",
  overflow: "hidden",
  padding: "20px",
  marginBottom: "20px",
};

const image = {
  maxWidth: "100%",
};

const boxInfos = {
  padding: "20px",
};

const containerImageFooter = {
  padding: "30px 0",
};

