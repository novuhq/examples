import React from 'react';
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text
} from '@react-email/components';

interface NovuCreditUsageAlertEmailProps {
    companyName: string,
    logoImg: string;
    address: string;
    linkToPricing: string;
    linkToUnsubscribe: string;
    customerName: string,
    usage: number,
    amount: number,
    packagesList: Array<{name: string; amount: string; price: string}>
};

const NovuCreditUsageAlertEmail = ({
    companyName,
    logoImg,
    address,
    linkToPricing,
    linkToUnsubscribe,
    customerName,
    usage,
    amount,
    packagesList
}: NovuCreditUsageAlertEmailProps) => {
  const usagePrecent = Math.round(usage / amount * 100);
  return (
    <Html>
      <Head />
      <Preview>Credit Usage Alert - You've used {`${usagePrecent}`}% of your monthly credit</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={iconContainer}>
          <svg style={icon} viewBox="0 0 24 24">
             <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
             <line x1="12" y1="9" x2="12" y2="13"></line>
             <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
          </Section>
          <Heading style={h1}>Credit Usage Alert</Heading>
          
          <Text style={text}>Hello {customerName},</Text>
          
          <Text style={text}>
            Thank you for using our services. We want to inform you that you have used <strong style={highlight}>{usagePrecent}%</strong> of your monthly credit.
          </Text>

          <Section style={infoBox}>
            <Head>
            <svg style={infoIcon} 
            width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            >
                <line x1="18" y1="20" x2="18" y2="10"></line>
                <line x1="12" y1="20" x2="12" y2="4"></line>
                <line x1="6" y1="20" x2="6" y2="14"></line>
            </svg>
              <strong style={h2}>Your Credit Status</strong>
            </Head>
            <div style={progressBar}>
              <div style={{...progressFill, width: `${usagePrecent}%`}}></div>
            </div>
            <Text style={text}>Credit used: <strong>{usage}/{amount}</strong></Text>
          </Section>

          <Text style={text}>
            To ensure you can continue enjoying our service without interruption, we recommend considering purchasing an additional credit package.
          </Text>

          <Section style={infoBox}>
            <Head>
            <svg style={infoIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                <line x1="1" y1="10" x2="23" y2="10"></line>
             </svg>
              <strong style={h2}>Purchase Additional Credits</strong>
              </Head>
            <Text style={text}>Choose the package that suits you:</Text>
            <ul style={list}>
                {
                  packagesList.map(({name, amount, price}, indx) => 
                    <li key={indx}> {name}: {amount} - {price} </li>
                  )
                }
            </ul>
            <Link
              href={linkToPricing}
              style={button}
            >
              Upgrade {companyName} Plan
            </Link>
          </Section>

          <Text style={text}>
            If you have any questions or need further information, please don't hesitate to contact us. We're here to help!
          </Text>

          <Text style={footer}>
            Best regards,<br/>The {companyName} Support Team
          </Text>

          <Hr style={hr} />

          <section style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
          <Img
            src={logoImg}
            width="42"
            height="42"
            alt={companyName}
          />
          <Text style={footer}>
          {companyName}<br/>{address}
          </Text>
          </section>
          

          <Text style={footer}>
            If you don't want to receive these alerts in the future,{' '}
            <Link href={linkToUnsubscribe} style={link}>click here</Link>
            {' '}to change your notification settings.
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: '#f3f4f6',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '24px',
  marginBottom: '24px',
  maxWidth: '600px',
  borderRadius: '8px',
  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
};

const iconContainer = {
  textAlign: 'center' as const,
};

const h1 = {
  color: '#1f2937',
  fontSize: '24px',
  fontWeight: 'bold',
  textAlign: 'center' as const,
  margin: '16px 0 24px',
};

const h2 = {
  color: '#1f2937',
  fontWeight: 'bold',
  fontSize: '20px',
  verticalAlign: 'middle'
};

const text = {
  color: '#4b5563',
  fontSize: '16px',
  lineHeight: '24px',
};

const icon: React.CSSProperties | undefined = {
    width: "48",
    height: "48",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    color: '#DA3688',
    marginBottom: '16px',
};

const infoBox: React.CSSProperties | undefined = {
  backgroundColor: '#FFF2FA',
  border: '1px solid #FF968A',
  borderRadius: '8px',
  padding: '16px',
  marginBottom: '24px',
};

const infoIcon = {
    marginRight: '8px',
    color: '#DA0685',
    verticalAlign: 'middle'
};

const progressBar = {
  width: '100%',
  backgroundColor: '#e5e7eb',
  borderRadius: '9999px',
  height: '16px',
  marginBottom: '8px',
  marginTop: '8px'
};

const progressFill = {
  backgroundColor: '#DA0685',
  height: '16px',
  borderRadius: '9999px',
};

const button = {
  backgroundColor: '#3b82f6',
  borderRadius: '4px',
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  padding: '12px 16px',
};

const hr = {
  borderColor: '#e5e7eb',
  margin: '20px 0',
};

const footer = {
  color: '#6b7280',
  fontSize: '14px',
  lineHeight: '24px',
};

const link = {
  color: '#3b82f6',
  textDecoration: 'none',
};

const list = {
  ...text,
  paddingLeft: '24px',
  margin: '0 0 16px',
};

const highlight = {
  color: '#DA3688',
  fontWeight: 'bold',
};

NovuCreditUsageAlertEmail.PreviewProps = {
    companyName: "Novu",
    logoImg: `https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/dca73b36-cf39-4e28-9bc7-8a0d0cd8ac70/standalone-gradient2x_2/w=128,quality=90,fit=scale-down`,
    address: '',
    linkToPricing: "https://novu.co/pricing/?utm_campaign=docs_top_nav",
    linkToUnsubscribe: "https://google.com",
    customerName: "Mussi",
    usage: 80,
    amount: 130,
    packagesList: [{
        name: 'BUSINESS',
        amount: '250K events/month',
        price: '$250'
    },
    {
        name: 'ENTERPRISE',
        amount: '5M events/month',
        price: `Let's Talk`
    }]
  } as NovuCreditUsageAlertEmailProps;

export default NovuCreditUsageAlertEmail