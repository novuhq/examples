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
  
  interface NovuBirthdayCouponProps {
    userFirstName?: string;
    couponDate?: Date;
    discountAmount?: string;
    validationCode?: string;
  }
  
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "";
  
  export const NovuBirthdayCoupon = ({
    userFirstName,
    discountAmount,
    couponDate,
    validationCode,

  }: NovuBirthdayCouponProps) => {
    const formattedDate = new Intl.DateTimeFormat("en", {
      dateStyle: "long",
      timeStyle: "short",
    }).format(couponDate);
  
    return (
      <Html>
        <Head />
        <Preview>Novu birthday discount</Preview>
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
                  src={`https://img.freepik.com/free-vector/birthday-template-design_23-2150745922.jpg?t=st=1726423419~exp=1726427019~hmac=499a844dec6656559ca868a30e5539b79596ac1e2cb68623bc34934b43a228dd&w=1380`}
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
                    Happy Birthday {userFirstName} 
                  </Heading>
                  <Heading
                    as="h2"
                    style={{
                      fontSize: 26,
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    Hope you're enjoying your big day!
                  </Heading>

                  <Text
                    style={{
                      color: "rgb(0,0,0, 0.5)",
                      fontSize: 14,
                      marginTop: -5,
                    }}
                  >
                  </Text>
  
                  <Text style={paragraph}>
                    Let us surprise you with a <b> {discountAmount}% discount </b> in favor of the celebration!
                  </Text>
                  <Section style={codeBox}>
                  <Text style={confirmationCodeText}>{validationCode}</Text>
                  </Section>
                  <Text style={paragraph}>
                    Coupon expire date: {formattedDate}
                  </Text>
                </Column>
              </Row>
              <Row style={{ ...boxInfos, paddingTop: "0" }}>
                <Column style={containerButton}>
                  <Button style={button}>Start Shopping</Button>
                </Column>
              </Row>
            </Section>
  
            <Section style={containerImageFooter}>
              <Img
                style={image}
                width={620}
                height={120}
                src={`https://img.freepik.com/free-vector/party-garland-with-triangle-flags_107791-28362.jpg?t=st=1726425702~exp=1726429302~hmac=a3a8065642029d322f520d5703efa24eceb123b7562bbbf092a740f0b18db744&w=1380`}
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
    discountAmount: "10",
    loginDate: new Date("September 30, 2024, 00:00 am"),
    validationCode: "HPY-BDY",
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
    backgroundColor: "#5e6ad2",
    borderRadius: "3px",
    fontWeight: "600",
    color: "#fff",
    fontSize: "15px",
    textDecoration: "none",
    textAlign: "center" as const,
    display: "block",
    padding: "11px 23px",
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

  const codeBox = {
    background: "rgb(245, 244, 245)",
    borderRadius: "4px",
    marginBottom: "20px",
    padding: "30px 5px",
  };

  const confirmationCodeText = {
    fontSize: "30px",
    textAlign: "center" as const,
    verticalAlign: "middle",
  };
