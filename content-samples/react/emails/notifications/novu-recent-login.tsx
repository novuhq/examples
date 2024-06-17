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
  
  interface NovuRecentLoginEmailProps {
    userFirstName?: string;
    loginDate?: Date;
    loginDevice?: string;
    loginLocation?: string;
    loginIp?: string;
  }
  
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "";
  
  export const NovuRecentLoginEmail = ({
    userFirstName,
    loginDate,
    loginDevice,
    loginLocation,
    loginIp,
  }: NovuRecentLoginEmailProps) => {
    const formattedDate = new Intl.DateTimeFormat("en", {
      dateStyle: "long",
      timeStyle: "short",
    }).format(loginDate);
  
    return (
      <Html>
        <Head />
        <Preview>Novu recent login</Preview>
        <Body style={main}>
          <Container>
            <Section style={logo}>
              <Img src={`https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/dca73b36-cf39-4e28-9bc7-8a0d0cd8ac70/standalone-gradient2x_2/w=128,quality=90,fit=scale-down`} width="48" />
            </Section>
  
            <Section style={content}>
              <Row>
                <Img
                  style={image}
                  width={620}
                  src={`https://react-email-demo-48zvx380u-resend.vercel.app/static/yelp-header.png`}
                />
              </Row>
  
              <Row style={{ ...boxInfos, paddingBottom: "0" }}>
                <Column>
                  <Heading
                    style={{
                      fontSize: 32,
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    Hi {userFirstName},
                  </Heading>
                  <Heading
                    as="h2"
                    style={{
                      fontSize: 26,
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    We noticed a recent login to your Novu account.
                  </Heading>
  
                  <Text style={paragraph}>
                    <b>Time: </b>
                    {formattedDate}
                  </Text>
                  <Text style={{ ...paragraph, marginTop: -5 }}>
                    <b>Device: </b>
                    {loginDevice}
                  </Text>
                  <Text style={{ ...paragraph, marginTop: -5 }}>
                    <b>Location: </b>
                    {loginLocation}
                  </Text>
                  <Text
                    style={{
                      color: "rgb(0,0,0, 0.5)",
                      fontSize: 14,
                      marginTop: -5,
                    }}
                  >
                    *Approximate geographic location based on IP address:
                    {loginIp}
                  </Text>
  
                  <Text style={paragraph}>
                    If this was you, there's nothing else you need to do.
                  </Text>
                  <Text style={{ ...paragraph, marginTop: -5 }}>
                    If this wasn't you or if you have additional questions, please
                    see our support page.
                  </Text>
                </Column>
              </Row>
              <Row style={{ ...boxInfos, paddingTop: "0" }}>
                <Column style={containerButton} colSpan={2}>
                  <Button style={button}>Learn More</Button>
                </Column>
              </Row>
            </Section>
  
            <Section style={containerImageFooter}>
              <Img
                style={image}
                width={620}
                src={`https://react-email-demo-48zvx380u-resend.vercel.app/static/yelp-footer.png`}
              />
            </Section>
  
            <Text
              style={{
                textAlign: "center",
                fontSize: 12,
                color: "rgb(0,0,0, 0.7)",
              }}
            >
              © 2022 | Novu Inc., 350 Mission Street, San Francisco, CA 94105,
              U.S.A. | www.novu.com
            </Text>
          </Container>
        </Body>
      </Html>
    );
  };
  
  NovuRecentLoginEmail.PreviewProps = {
    userFirstName: "Alan",
    loginDate: new Date("September 7, 2022, 10:58 am"),
    loginDevice: "Chrome on Mac OS X",
    loginLocation: "Upland, California, United States",
    loginIp: "47.149.53.167",
  } as NovuRecentLoginEmailProps;
  
  export default NovuRecentLoginEmail;
  
  const main = {
    backgroundColor: "#fff",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const paragraph = {
    fontSize: 16,
  };
  
  const logo = {
    padding: "30px 20px",
  };
  
  const containerButton = {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  };
  
  const button = {
    backgroundColor: "#e00707",
    borderRadius: 3,
    color: "#FFF",
    fontWeight: "bold",
    border: "1px solid rgb(0,0,0, 0.1)",
    cursor: "pointer",
    padding: "12px 30px",
  };
  
  const content = {
    border: "1px solid rgb(0,0,0, 0.1)",
    borderRadius: "3px",
    overflow: "hidden",
  };
  
  const image = {
    maxWidth: "100%",
  };
  
  const boxInfos = {
    padding: "20px",
  };
  
  const containerImageFooter = {
    padding: "45px 0 0 0",
  };