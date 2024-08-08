import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  render,
} from '@react-email/components';
import * as React from 'react';

interface EmailProps {
  subject: string;
  body: string;
}

export const EmailNotification = ({ subject, body }: EmailProps) => (
  <Html>
    <Head />
    <Preview>{subject}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={heading}>{body}</Heading>
      </Container>
    </Body>
  </Html>
);

export default EmailNotification;

export function renderEmail(subject: string, body: string) {
  return render(<EmailNotification subject={subject} body={body} />);
}

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  maxWidth: '560px',
};

const heading = {
  fontSize: '24px',
  letterSpacing: '-0.5px',
  lineHeight: '1.3',
  fontWeight: '600',
  color: '#484848',
  padding: '17px 0 0',
};
