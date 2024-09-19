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
  import React, { useState } from "react";
  
  interface NovuBirthdayNotificationProps {
    userFirstName?: string;
  }
  
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "";
  
  export const NovuBirthdayNotification = ({
    userFirstName,
  }: NovuBirthdayNotificationProps) => {
  
    return (
      <Html>
        <Head />
        <Preview>Novu recent login</Preview>
        <Body style={main}>
          <Container>
            <Section style={logo}>
              <Img
                src={`https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/dca73b36-cf39-4e28-9bc7-8a0d0cd8ac70/standalone-gradient2x_2/w=128,quality=90,fit=scale-down`}
                width="48"
              />
            </Section>
  
            <Section style={content}>
              <Row>
                <Img
                  style={image}
                  width={620}
                  src={`https://images.pexels.com/photos/51193/gift-package-loop-made-51193.jpeg?auto=compress&cs=tinysrgb&w=800`}
                />
              </Row>
  
              <Row style={{ ...boxInfos, paddingBottom: "0" }}>
                <Column>
                  <Heading
                    style={{
                      fontSize: 32,
                      fontWeight: "bold",
                      textAlign: "center",
                      color: "#FF69B4",
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
                      color: "#98758a",
                    }}
                  >
                    We are excited to wish you Happy Birthday!!
                  </Heading>
  
                  <Text style={paragraph}>
                    We wish you many more novu happy years!
                  </Text>
                </Column>
              </Row>
              <Row style={{ ...boxInfos, paddingTop: "0", paddingBottom: "30px" }}>
                <Column style={containerButton} colSpan={2}>
                  <a  target="_blank" style={button} href="https://www.pexels.com/photo/close-up-photo-of-pink-and-gray-balloons-172500/">
                    To unwrap your free novu gift
                  </a>
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
  
  NovuBirthdayNotification.PreviewProps = {
    userFirstName: "Alan",
  } as NovuBirthdayNotificationProps;
  
  export default NovuBirthdayNotification;
  
  const main = {
    backgroundColor: "#fff",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const paragraph = {
    fontSize: 16,
    textAlign: "center",
    color: "#a9a5ad",
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
    backgroundColor: "#FF69B4",
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
  