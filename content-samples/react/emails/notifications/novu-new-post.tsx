import {
    Body,
    Button,
    Container,
    Head,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Text,
  } from "@react-email/components";
  import * as React from "react";
  
  interface NovuNewPostEmailProps {
    username?: string;
    usernamePost?: string;
    post?: string;
  }
  
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "";
  
  export const NovuNewPostEmail = ({
    username,usernamePost,post 
  }: NovuNewPostEmailProps) => (
    <Html>
      <Head />
      <Preview>
        A fine-grained personal access token has been added to your account
      </Preview>
    
<Body style={main}>
  <Container style={container}>

    <Img
      src={`https://www.wiselead.co.il/wp-content/uploads/2016/01/LinkedIn_Logo.svg_.png`}
      width="100"
      height="32"
      alt="LinkedIn Logo"
    />

    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
      <img
        src="https://b.log-on.com/wp-content/uploads/%D7%AA%D7%9E%D7%95%D7%A0%D7%94-%D7%9C%D7%9B%D7%AA%D7%91%D7%94-%D7%9C%D7%99%D7%A0%D7%A7%D7%93%D7%90%D7%99%D7%9F-1.png"
        width="100"
        height="100"
        style={{ borderRadius: '50%', objectFit: 'cover' }}
        alt="Profile Picture"
      />
    </div>

    <Section style={{ textAlign: 'center', marginTop: '20px' }}>
      <Text style={title}>
        <strong>{usernamePost}</strong> uploaded a new post.
      </Text>

      <Section style={section}>
        <Text style={text}>
          Hey <strong>{username}</strong>!
        </Text>
        <Text style={text}>
          <strong>{post}</strong>
        </Text>
        <Text style={text}>
          Posted by <strong>{usernamePost}</strong>
        </Text>
        <Button style={button}>View the post</Button>
      </Section>
    </Section>

    <Text style={links}>
      <Link style={link}>Your security audit log</Link> ・{" "}
      <Link style={link}>Contact support</Link>
    </Text>

    <Text style={footer}>
      Novu, Inc. ・88 Colin P Kelly Jr Street ・San Francisco, CA 94107
    </Text>
  </Container>
</Body>

    </Html>
  );
  
  NovuNewPostEmail.PreviewProps = {
    username: "alanturing",
    usernamePost: "Rose",
    post: `
      🌟 Excited for New Opportunities! 🌟 
  
      After completing my programming studies and gaining hands-on experience in full-stack development (C#, Angular, React, Node.js, SQL, MongoDB), I'm ready to take on my next challenge!
  
      I'm passionate about building innovative solutions, working collaboratively, and continuously growing in the tech field.
  
      📢 If your team is looking for a dedicated, creative, and driven developer, let's connect!
  
    `,
  } as NovuNewPostEmailProps;
  
  
  export default NovuNewPostEmail;
  
  const main = {
    backgroundColor: "#ffffff",
    color: "#24292e",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
  };
  
  const container = {
    maxWidth: "480px",
    margin: "0 auto",
    padding: "20px 0 48px",
  };
  
  const title = {
    fontSize: "24px",
    lineHeight: 1.25,
  };
  
  const section = {
    padding: "24px",
    border: "solid 1px #dedede",
    borderRadius: "5px",
    textAlign: "center" as const,
  };
  
  const text = {
    margin: "0 0 10px 0",
    textAlign: "left" as const,
  };
  
  const button = {
    fontSize: "14px",
    backgroundColor: "#28a745",
    color: "#fff",
    lineHeight: 1.5,
    borderRadius: "0.5em",
    padding: "12px 24px",
  };
  
  const links = {
    textAlign: "center" as const,
  };
  
  const link = {
    color: "#0366d6",
    fontSize: "12px",
  };
  
  const footer = {
    color: "#6a737d",
    fontSize: "12px",
    textAlign: "center" as const,
    marginTop: "60px",
  };