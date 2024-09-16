import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Preview,
    Section,
    Text,
    Link, 
  } from "@react-email/components";
  import * as React from "react";
  
  interface BirthdayEmailProps {
    name?: string;
  }
  
  export const BirthdayEmail = ({ name }: BirthdayEmailProps) => (
    <Html>
      <Head>
        <Link
          href="https://fonts.googleapis.com/css2?family=Pacifico&family=Nunito:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <style>{`
          .background {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
          }
        `}</style>
      </Head>
      <Preview>Happy Birthday, Hodaya! 🎉</Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            className="background"
            src="https://i.gifer.com/W9k1.gif"
            alt="Confetti Background"
          />
          <Img
            src={`https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/dca73b36-cf39-4e28-9bc7-8a0d0cd8ac70/standalone-gradient2x_2/w=128,quality=90,fit=scale-down`}
            width={48}
            height={48}
            alt="Novu"
          />
          <Heading style={heading}>Happy Birthday, Hodaya! 🎂🚀</Heading>
          <Section style={body}>
            <Text style={paragraph}>
              May your code be bug-free and your ideas groundbreaking! Here's to
              another year of creating and innovating for a better world.
            </Text>
            <Text style={paragraph}>Keep coding, keep inspiring!</Text>
          </Section>
          <Text style={paragraph}>
            Best wishes,
            <br />- The Novu Team
          </Text>
          <Hr style={hr} />
          <Img
            src={`https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/dca73b36-cf39-4e28-9bc7-8a0d0cd8ac70/standalone-gradient2x_2/w=128,quality=90,fit=scale-down`}
            width={32}
            height={32}
            style={{
              WebkitFilter: "grayscale(100%)",
              filter: "grayscale(100%)",
              margin: "20px 0",
            }}
          />
          <Text style={footer}>Novu Technologies Inc.</Text>
          <Text style={footer}>
            2093 Philadelphia Pike #3222, Claymont, DE 19703
          </Text>
        </Container>
      </Body>
    </Html>
  );
  
  BirthdayEmail.PreviewProps = {
    name: "Amazing Developer",
  } as BirthdayEmailProps;
  
  export default BirthdayEmail;
  
  const main: React.CSSProperties = {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    fontFamily: "'Nunito', sans-serif",
    position: "relative",
    minHeight: "100vh",
  };
  
  const container: React.CSSProperties = {
    margin: "0 auto",
    padding: "20px 25px 48px",
    position: "relative",
  };
  
  const heading: React.CSSProperties = {
    fontFamily: "'Pacifico', cursive",
    fontSize: "32px",
    fontWeight: "normal",
    marginTop: "48px",
    color: "#FF6363",
    textAlign: "center",
  };
  
  const body: React.CSSProperties = {
    margin: "24px 0",
  };
  
  const paragraph: React.CSSProperties = {
    fontSize: "18px",
    lineHeight: "26px",
    textAlign: "center",
  };
  
  const hr: React.CSSProperties = {
    borderColor: "#dddddd",
    marginTop: "48px",
  };
  
  const footer: React.CSSProperties = {
    color: "#8898aa",
    fontSize: "12px",
    marginLeft: "4px",
    textAlign: "center",
  };
  