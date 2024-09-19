import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Row,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
import * as React from "react";

interface NovuUserDetailsProps {
  username?: string;
  userFullName?: string;
  userEmail?: string;
  userPhone?: string;
  userPersonalWeb?: string;
  userProfilLink?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const NovuUserDetails = ({
  username,
  userFullName,
  userEmail,
  userPhone,
  userPersonalWeb,
  userProfilLink,
}: NovuUserDetailsProps) => (
    <Html>
      <Head />
      <Tailwind>
        <Body className="font-sans">
          <Container style={container}>
            <Section>
              <Img style={logo}
                src={`https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/dca73b36-cf39-4e28-9bc7-8a0d0cd8ac70/standalone-gradient2x_2/w=128,quality=90,fit=scale-down`}
                alt="Novu"
              />
            </Section>
            <Heading style={header}>
              Hi <strong>@{username}</strong>!
            </Heading>
            <Section>
              <Text className="text-[24px] font-normal text-center p-0 my-[20px] mx-0">
                Here are the details you registered under:
              </Text>
              <Text style={fullName}>
                {userFullName}
              </Text>
              <Section>
                <Row>
                  <Column>
                  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
                  <i className="material-icons" style={icon}>mail</i>
                  </Column>
                  <Column>
                    <Text style={userDetail}> {userEmail}</Text>
                  </Column>
                </Row>
                <Row>
                  <Column>
                  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
                  <i className="material-icons" style={icon}>call</i>
                  </Column>
                  <Column>
                    <Text style={userDetail}> {userPhone}</Text>
                  </Column>
                </Row>
                <Row>
                  <Column>
                  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
                  <i className="material-icons" style={icon}>public</i>
                  </Column>
                  <Column>
                    <Text style={userDetail}> {userPersonalWeb}</Text>
                  </Column>
                </Row>
            </Section>
            </Section>
            <Section style={containerButton}>
              <Button style={button} href={userProfilLink} >
                Fill in more details
              </Button>
            </Section>
            <Hr style={hr} />
            <Section>
              <Img
                style={imgButtom} 
                src={`https://react-email-demo-48zvx380u-resend.vercel.app/static/yelp-footer.png`}
              />
            </Section>
            <Text style={textBottom}>
              © 2024 | Donated by Sara Vagshal | https://novu.co/
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );

NovuUserDetails.PreviewProps = {
  username: "sara-username",
  userFullName: "Sara Vagshal",
  userEmail: "name.family@example.com",
  userPhone: "+972-123456789",
  userPersonalWeb: "https://example-example/",
  userProfilLink: "https://novu.co/"
} as NovuUserDetailsProps;

export default NovuUserDetails;

const container = {
  border: "1px solid #eaeaea",
  borderRadius: "40px",
  margin: "0 auto",
  padding: "20px",
  maxWidth: "465px",
};

const logo = {
  margin: "0 auto",
  borderRadius: 21,
  width: 54,
  height: 54,
};

const header = {
  fontSize: "24px",
  textAlign: "center" as const,
  padding: "5px",
};

const fullName = {
  color: "#FF6363",
  fontSize: "24px",
  fontWeight: "bold",
  textAlign: "center" as const,
  padding: "6px",
};

const icon = {
  padding: "6px 0 0 30px",
};
const userDetail = {
  fontSize: "18px",
  textAlign: "left" as const,
  display: "flex",
  alignItems: "left" as const,
  justifyContent: "left",
};

const textBottom = {
  color: "rgb(0,0,0, 0.7)",
  fontSize: "12px",
  textAlign: "center" as const,
};

const containerButton = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
  padding: "18px 5px",
};

const button = {
  backgroundColor: "#FF6363",
  borderRadius: "4px",
  color: "#fff",
  fontSize: "16px",
  textAlign: "center" as const,
  display: "block",
  width: "210px",
  padding: "10px 5px",
};

const hr = {
  borderColor: "#eaeaea",
  margin: "42px 0 26px",
};

const imgButtom = {
  maxWidth: "100%",
  width: 620,
  padding: "20px",
};

