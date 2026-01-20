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
    render,
} from "@react-email/components";
import * as React from "react";

interface DropboxResetPasswordEmailProps {
    headerText?: string;
    headerTextSize?: string
    headerTextColour?: string
    resetPasswordLink?: string;
    bodyTextOne?: string
    bodyTextOneColour?: string
    bodyTextTwo?: string
    bodyTextTwoColour?: string
    bodyTextThree?: string
    bodyTextThreeColour?: string
    showResetPasswordButton?: boolean
    showResetLink?: boolean
    linkText?: string
}

const baseUrl = 'https://react-email-demo-48zvx380u-resend.vercel.app';

export const DropboxResetPasswordEmail = ({
    headerText,
    resetPasswordLink,
    bodyTextOne,
    bodyTextOneColour,
    bodyTextTwo,
    bodyTextTwoColour,
    bodyTextThree,
    bodyTextThreeColour,
    showResetPasswordButton,
    showResetLink,
    headerTextSize,
    headerTextColour,
    linkText
}: DropboxResetPasswordEmailProps) => {
    return (
        <Html>
            <Head />
            <Preview>Dropbox reset your password</Preview>
            <Body style={main}>
                <Container style={container}>
                    <Img
                        src={`${baseUrl}/static/dropbox-logo.png`}
                        width="40"
                        height="33"
                        alt="Dropbox"
                    />
                    <Section>
                        <Text style={{ ...headingTextStyle, fontSize: headerTextSize, color: headerTextColour }}>{headerText}</Text>
                        <Text style={{ ...text, color: bodyTextOneColour }}>
                            {bodyTextOne}
                        </Text>
                        <Text style={{ ...text, color: bodyTextTwoColour }}>
                            {bodyTextTwo}
                        </Text>
                        <Text style={{ ...text, color: bodyTextThreeColour }}>
                            {bodyTextThree}
                        </Text>

                        {showResetPasswordButton ? <Button style={button} href={resetPasswordLink}>Reset password</Button> : null}

                        <Text>
                        {showResetLink ? <a href="novu.co" >{linkText}</a> : null}
                        </Text>
                        
                        <Text style={text}>Happy Dropboxing!</Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
};

DropboxResetPasswordEmail.PreviewProps = {
    userFirstname: "Alan",
    resetPasswordLink: "https://dropbox.com",
};

export default DropboxResetPasswordEmail;

const main = {
    backgroundColor: "#f6f9fc",
    padding: "10px 0",
};

const container = {
    backgroundColor: "#ffffff",
    border: "1px solid #f0f0f0",
    padding: "45px",
};

const text = {
    fontSize: "16px",
    fontFamily:
        "'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
    fontWeight: "300",
    color: "#404040",
    lineHeight: "26px",
};
const headingTextStyle = {
    fontFamily:
        "'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
    fontWeight: "300",
    lineHeight: "30px",
}
const button = {
    backgroundColor: "#007ee6",
    borderRadius: "4px",
    color: "#fff",
    fontFamily: "'Open Sans', 'Helvetica Neue', Arial",
    fontSize: "15px",
    textDecoration: "none",
    textAlign: "center" as const,
    display: "block",
    width: "210px",
    padding: "14px 7px",
};

const anchor = {
    textDecoration: "underline",
};

export function renderPasswordResetEmail(inputs: any, payload: any) {
    return render(<DropboxResetPasswordEmail {...inputs} {...payload} />);
}
