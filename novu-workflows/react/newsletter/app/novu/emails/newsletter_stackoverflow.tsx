import {
    Body,
    Column,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Text,
    Row,
    render
  } from "@react-email/components";
  import * as React from "react";
  import otherImage from "./pics/stack_image";
  
  interface StackOverflowTipsEmailProps {
    tips?: { id: number; description: string; headerHeader?: string; headerSize: string; headerMessage?: string; headerImage?: string;
      searchForSolutionsHeader?: string;
      searchForSolutions?: string;
      searchBarHeader?: string;
      searchBar?: string;
      searchBarMessage?: string;
      takeBreak?: string;
      takeBreakUrl?: string;
      showButton?: boolean;
      buttonMessage?: string;
      inviteLink?: string;
      inviteFromIp?: string;
      inviteFromLocation?: string;
      copyUrl?: string; }[];
  }
  
  
  const baseUrl = process.env.VERCEL_URL
    ? `https://react-email-demo-bdj5iju9r-resend.vercel.app`
    : "https://react-email-demo-bdj5iju9r-resend.vercel.app";
    
  
  
  export const StackOverflowTipsEmail = ({
    headerHeader, headerMessage, headerImage, 
      searchForSolutions,
      searchForSolutionsHeader,
      searchBarHeader,
      searchBarPrompt,
      searchBar,
      searchBarMessage,
      searchBarMessage2,
      searchBarMessage3,
      takeBreak,
      takeBreakUrl,
      showButton,
      buttonMessage
  }: any) => {
  
    function conditionalImage(){
      if (headerImage === 'Logo 1') {
    return   <Img 
    src={`${baseUrl}/static/stack-overflow-logo.png`}
    width="146"
    />
      }
      else if (headerImage === 'Logo 2') {
    
      return <Img 
        src={otherImage}
        width="146"
       />
      }
      else return <Img />;
    }
  
  
    return(
  
  
    <Html>
      <Head />
      <Preview>Stack overflow tips for searching</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={logo}>
            { conditionalImage() }
          </Section>
  
          <Section style={header}>
            <Row>
              <Column style={headerContent}>
                <Heading style={headerContentTitle}>
                  {headerHeader}
                </Heading>
                <Text style={headerContentSubtitle}>
                  {headerMessage}
                </Text>
              </Column>
              <Column style={headerImageContainer}>
                <Img
                  style={headerImage}
                  width={340}
                  src={`${baseUrl}/static/stack-overflow-header.png`}
                />
              </Column>
            </Row>
          </Section>
  
          <Section style={content}>
            <Heading as="h2" style={title}>
              {searchForSolutionsHeader}
            </Heading>
            <Text style={paragraph}>
              {searchForSolutions} {" "}
            </Text>
  
            <Hr style={divider} />
  
            <Heading as="h2" style={title}>
              {searchBarHeader}
            </Heading>
            <Text style={paragraph}>
              {searchBarPrompt}
            </Text>
            {/* 
            <ul>
              {inputs.map((tip) => (
                <li key={tip.id}>
                  <Text style={paragraph}>{tip.description}</Text>
                </li>
              ))}
            </ul>
            */}
            {searchBar?.map((item: string) => {
              return(
            <Row key={item}>
              {item === "Item 1" ? (
            <Text style={paragraph}>
              {searchBarMessage}
            </Text>
            ) : null}
            {item === "Item 2" ? (
            <Text style={paragraph}>
              {searchBarMessage2}
            </Text>
            ) : null}
            {item === "Item 3" ? (
            <Text style={paragraph}>
              {searchBarMessage3}
            </Text>
            ) : null}
            </Row>
              )
          })}
            
            
  
            {showButton && (
            <Container>
              <Hr style={divider} />
            <Heading as="h2" style={title}>
              {takeBreak}
            </Heading>
            
            <Section style={buttonContainer}>
              <Link style={button} href={takeBreakUrl}>
                {buttonMessage}
              </Link>
            </Section>
            </Container>
            )}
          </Section>
        </Container>
  
        <Section style={footer}>
          <Text style={footerText}>
            You're receiving this email because your Stack Overflow activity
            triggered this tip or reminder`.
          </Text>
  
          <Link href="/" style={footerLink}>
            Unsubscribe from emails like this{" "}
          </Link>
          <Link href="/" style={footerLink}>
            Edit email settings{" "}
          </Link>
          <Link href="/" style={footerLink}>
            Contact us
          </Link>
          <Link href="/" style={footerLink}>
            Privacy
          </Link>
  
          <Hr style={footerDivider} />
  
          <Img width={111} src={`${baseUrl}/static/stack-overflow-logo-sm.png`} />
          <Text style={footerAddress}>
            <strong>Stack Overflow</strong>, 110 William Street, 28th Floor, New
            York, NY 10038
          </Text>
          <Text style={footerHeart}>{"<3"}</Text>
        </Section>
      </Body>
    </Html>
  
    
  );
  
  
  };
  
  
  export default StackOverflowTipsEmail;
  
  export function renderStackReactEmail(inputs: any) {
    return render(<StackOverflowTipsEmail {...inputs} />);
  }
  
  const main = {
    backgroundColor: "#f3f3f5",
    fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
  };
  
  const headerContent = { padding: "20px 30px 15px" };
  
  const headerContentTitle = {
    color: "#fff",
    fontSize: "27px",
    fontWeight: "bold",
    lineHeight: "27px",
  };
  
  const headerContentSubtitle = {
    color: "#fff",
    fontSize: "17px",
  };
  
  const headerImageContainer = {
    padding: "30px 10px",
  };
  
  const headerImage = {
    maxWidth: "100%",
  };
  
  const title = {
    margin: "0 0 15px",
    fontWeight: "bold",
    fontSize: "21px",
    lineHeight: "21px",
    color: "#0c0d0e",
  };
  
  const paragraph = {
    fontSize: "15px",
    lineHeight: "21px",
    color: "#3c3f44",
  };
  
  const divider = {
    margin: "30px 0",
  };
  
  const container = {
    width: "680px",
    maxWidth: "100%",
    margin: "0 auto",
    backgroundColor: "#ffffff",
  };
  
  const footer = {
    width: "680px",
    maxWidth: "100%",
    margin: "32px auto 0 auto",
    padding: "0 30px",
  };
  
  const content = {
    padding: "30px 30px 40px 30px",
  };
  
  const logo = {
    display: "flex",
    background: "#f3f3f5",
    padding: "20px 30px",
  };
  
  const header = {
    borderRadius: "5px 5px 0 0",
    display: "flex",
    flexDireciont: "column",
    backgroundColor: "#2b2d6e",
  };
  
  const buttonContainer = {
    marginTop: "24px",
    display: "block",
  };
  
  const button = {
    backgroundColor: "#0095ff",
    border: "1px solid #0077cc",
    fontSize: "17px",
    lineHeight: "17px",
    padding: "13px 17px",
    borderRadius: "4px",
    maxWidth: "120px",
    color: "#fff",
  };
  
  const footerDivider = {
    ...divider,
    borderColor: "#d6d8db",
  };
  
  const footerText = {
    fontSize: "12px",
    lineHeight: "15px",
    color: "#9199a1",
    margin: "0",
  };
  
  const footerLink = {
    display: "inline-block",
    color: "#9199a1",
    textDecoration: "underline",
    fontSize: "12px",
    marginRight: "10px",
    marginBottom: "0",
    marginTop: "8px",
  };
  
  const footerAddress = {
    margin: "4px 0",
    fontSize: "12px",
    lineHeight: "15px",
    color: "#9199a1",
  };
  
  const footerHeart = {
    borderRadius: "1px",
    border: "1px solid #d6d9dc",
    padding: "4px 6px 3px 6px",
    fontSize: "11px",
    lineHeight: "11px",
    fontFamily: "Consolas,monospace",
    color: "#e06c77",
    maxWidth: "min-content",
    margin: "0 0 32px 0",
  };
  