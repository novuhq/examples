import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Text,
  Link,
  Img,
  Row,
  Column,
  render,
} from '@react-email/components';
import * as React from 'react';

const baseUrl = process.env.IMAGE_BASE_URL;

export const TwitchResetPasswordEmail = ({
  subject,
  body,
  linkText,
  body2,
}: {
  subject: string;
  body: string;
  linkText: string;
  body2: string;
}) => {
  return (
    <Html>
      <Head />
      <Preview>{subject}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={logo}>
            <Img width={114} src={`${baseUrl}/twitch-logo.png`} />
          </Section>
          <Section style={sectionsBorders}>
            <Row>
              <Column style={sectionBorder} />
              <Column style={sectionCenter} />
              <Column style={sectionBorder} />
            </Row>
          </Section>
          <Section style={content}>
            <Text style={paragraph}>{body}</Text>
            <Section style={center}>
              <Link href='https://www.twitch.tv' style={link}>
                {linkText}
              </Link>
            </Section>
            <Text style={paragraph}>{body2}</Text>
          </Section>
        </Container>
        <Section style={footer}>
          <Row>
            <Column align='right' style={{ width: '50%', paddingRight: '8px' }}>
              <Img src={`${baseUrl}/twitch-icon-twitter.png`} />
            </Column>
            <Column align='left' style={{ width: '50%', paddingLeft: '8px' }}>
              <Img src={`${baseUrl}/twitch-icon-facebook.png`} />
            </Column>
          </Row>
          <Row>
            <Text style={{ textAlign: 'center', color: '#706a7b' }}>
              © {new Date().getFullYear()} Twitch, All Rights Reserved <br />
              350 Bush Street, 2nd Floor, San Francisco, CA, 94104 - USA
            </Text>
          </Row>
        </Section>
      </Body>
    </Html>
  );
};

const fontFamily = 'HelveticaNeue,Helvetica,Arial,sans-serif';

const main = {
  backgroundColor: '#efeef1',
  fontFamily,
};

const paragraph = {
  lineHeight: 1.5,
  fontSize: 14,
};

const container = {
  maxWidth: '580px',
  margin: '30px auto',
  backgroundColor: '#ffffff',
};

const footer = {
  maxWidth: '580px',
  margin: '0 auto',
};

const content = {
  padding: '5px 20px 10px 20px',
};

const logo = {
  display: 'flex',
  justifyContent: 'center',
  alingItems: 'center',
  padding: 30,
};

const sectionsBorders = {
  width: '100%',
  display: 'flex',
};

const sectionBorder = {
  borderBottom: '1px solid rgb(238,238,238)',
  width: '249px',
};

const sectionCenter = {
  borderBottom: '1px solid rgb(145,71,255)',
  width: '102px',
};

const center = {
  display: 'flex',
  justifyContent: 'center',
  alingItems: 'center',
};

const link: React.CSSProperties = {
  margin: 0,
  border: '0 solid #9147ff',
  borderRadius: '3px',
  color: '#fff',
  background: '#9147ff',
  display: 'inline-block',
  fontFamily: 'Helvetica,Arial,sans-serif',
  fontSize: '18px',
  fontWeight: 'regular',
  lineHeight: 1.3,
  padding: '10px 30px 10px 30px',
  textAlign: 'left',
  textDecoration: 'none',
};

export function renderEmail(
  subject: string,
  body: string,
  linkText: string,
  body2: string
) {
  return render(
    <TwitchResetPasswordEmail
      subject={subject}
      body={body}
      linkText={linkText}
      body2={body2}
    />
  );
}
