import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Column,
  Row,
  Text,
  Link,
} from "@react-email/components";
import * as React from "react";

type jobAgentResult = {
  id: number;
  linkToJob: string;
  icon: string;
  company: string;
  title: string;
  location: string;
};

interface NovuJobAlertProps {
  userFirstname: string;
  searchTitle: string;
  searchLocation: string;
  jobAgentResultArr: Array<jobAgentResult>;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const NovuJobAlertEmail = ({
  userFirstname,
  searchTitle,
  searchLocation,
  jobAgentResultArr,
}: NovuJobAlertProps) => (
  <Html>
    <Head />
    <Preview>The job alert agent that helps you uncover amazing jobs.</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/dca73b36-cf39-4e28-9bc7-8a0d0cd8ac70/standalone-gradient2x_2/w=128,quality=90,fit=scale-down`}
          height="50"
          alt="Company logo"
        />
        <Section style={header}>
          <Text style={header1}>
            Hi {userFirstname}! Your smart agent is here!
          </Text>
          <Text style={header2}>Exciting new opportunities just for you!</Text>
          <Text style={header3}>{searchTitle}</Text>
          <Text style={header4}>{searchLocation}</Text>
        </Section>

        <Section id="job-posts" style={jobList}>
          {jobAgentResultArr.map(function (agentResult: jobAgentResult) {
            return (
              <Section style={jobFrame} key={agentResult.id}>
                <Link style={jobFrameText} href={agentResult.linkToJob}>
                  <Row>
                    <Column style={{ width: "64px" }}>
                      <Img
                        src={agentResult.icon}
                        alt="job poster icon"
                        width="40px"
                      />
                    </Column>
                    <Column>
                      <Text style={header3}>{agentResult.title}</Text>
                      <Text style={header4}>
                        {agentResult.company}, {agentResult.location}
                      </Text>
                    </Column>
                  </Row>
                </Link>
              </Section>
            );
          })}
        </Section>
        <Section style={centerBtnContainer}>
          <Button style={button} href="https://getkoala.com">
            See more jobs
          </Button>
        </Section>
        <Section>
          <Row>
            <Column>
              <Text style={header3}>Looking for something else?</Text>
            </Column>
            <Column style={rightBtnContainer}>
              <Button style={button} href="https://getkoala.com">
                Edit job alert
              </Button>
            </Column>
          </Row>
        </Section>

        <Hr style={hr} />
        <Section style={footer}>
          <Link href="https://www.google.com">Unsubscribe</Link>
          <span style={divisor}>|</span>
          <Link href="https://www.google.com">Privacy Policy</Link>
          <span style={divisor}>|</span>
          <Link href="https://www.google.com">Terms</Link>
          <span style={divisor}>|</span>
          <Link href="https://www.google.com">Help Center</Link>
          <Text style={header4}>
            470 Noor Ave STE B #1148, South San Francisco, CA 94080
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

const jobOffer1: jobAgentResult = {
  id: 0,
  linkToJob: "https://www.google.com",
  icon: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/dca73b36-cf39-4e28-9bc7-8a0d0cd8ac70/standalone-gradient2x_2/w=128,quality=90,fit=scale-down",
  company: "ExperimentLabs",
  title: "Customer Success Manager, Enterprise",
  location: "Fremont, CA",
};

const jobOffer2: jobAgentResult = {
  id: 1,
  linkToJob: "https://www.google.com",
  icon: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/dca73b36-cf39-4e28-9bc7-8a0d0cd8ac70/standalone-gradient2x_2/w=128,quality=90,fit=scale-down",
  company: "FlyingAhaed",
  title: "Junior Customer Success",
  location: "San Jose, CA",
};

const jobOffer3: jobAgentResult = {
  id: 1,
  linkToJob: "https://www.google.com",
  icon: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/dca73b36-cf39-4e28-9bc7-8a0d0cd8ac70/standalone-gradient2x_2/w=128,quality=90,fit=scale-down",
  company: "GiveMore",
  title: "Customer Success",
  location: "San Diago, CA",
};

NovuJobAlertEmail.PreviewProps = {
  userFirstname: "Ella",
  searchTitle: "Customer Success",
  searchLocation: "San Francisco, CA",
  jobAgentResultArr: [jobOffer1, jobOffer2, jobOffer3],
} as NovuJobAlertProps;

export default NovuJobAlertEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const header = {
  margin: "10px 0",
};
const header1 = {
  fontWeight: "700",
  fontSize: "30px",
  margin: "40px 0",
};

const header2 = {
  fontWeight: "550",
  fontSize: "24px",
  margin: "15px 0",
};

const header3 = {
  fontWeight: "500",
  fontSize: "20px",
  margin: "5px 0",
};

const header4 = {
  fontSize: "16px",
  margin: "5px 0",
};

const jobList = {
  marginTop: "14px",
};

const jobFrame = {
  marginBottom: "15px",
  paddingLeft: "4px",
};

const jobFrameText = {
  color: "#000000",
};

const centerBtnContainer = {
  textAlign: "center" as const,
};

const rightBtnContainer = {
  textAlign: "right" as const,
};

const button = {
  backgroundColor: "#5F51E8",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textAlign: "center" as const,
  margin: "10px 0",
  padding: "12px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "10px 0",
};

const footer = {
  ...header4,
  color: "#8898aa",
  textAlign: "center" as const,
};

const divisor = {
  margin: "0 4px",
  color: "rgb(51,51,51)",
  fontWeight: 200,
};
