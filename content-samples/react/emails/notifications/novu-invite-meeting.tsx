import {
    Body,
    Button,
    Column,
    Container,
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

interface MeetingInviteEmailProps {
    meetingTitle?: string;
    meetingDate?: Date;
    organizerName?: string;
    participants?: string[];
    location?: string;
    subject?: string;
}

// Custom Styles
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
    gap: "10px",  
};

const button = {
    borderRadius: 3,
    color: "#FFF",  
    fontWeight: "bold",
    border: "1px solid rgb(0,0,0, 0.1)",  // Slight border for contrast
    cursor: "pointer",
    padding: "12px 30px",  // Button padding for a larger click area
    textAlign: "center", 
};

const buttonYes = {
    ...button,
    backgroundImage: "linear-gradient(90deg, #e91e63, #f44336)",  // Gradient for 'Yes' button
};

const buttonMaybe = {
    ...button,
    backgroundImage: "linear-gradient(90deg, #fcb045, #fd1d1d)",  // Gradient for 'Maybe' button
};

const buttonNo = {
    ...button,
    backgroundImage: "linear-gradient(90deg, #f44336, #e91e63)",  // Gradient for 'No' button
};

const content = {
    border: "1px solid rgb(0,0,0, 0.1)",  // Border around the main content
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

const rowContainer = {
    display: "flex",
    justifyContent: "space-between",  
    alignItems: "flex-start", 
};

const dateCard = {
    backgroundColor: "#f9f9f9",  
    borderRadius: "8px",
    padding: "20px",
    margin: "20px 0",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",  
    width: "25%",  // Date card width
};

const mainContentColumn = {
    paddingLeft: "20px",
    width: "70%",  // Main content width
};

export const MeetingInviteEmail = ({
    meetingTitle,
    meetingDate,
    organizerName,
    participants = [],
    location,
    subject,
}: MeetingInviteEmailProps) => {
    const formattedDate = new Intl.DateTimeFormat("en", {
        dateStyle: "full",
        timeStyle: "short",
    }).format(meetingDate);  // Format meeting date

    return (
        <Html>
            <Head />
            <Preview>{meetingTitle || "Meeting Invitation"}</Preview>
            <Body style={main}>
                <Container>
                    {/* NOVU Logo */}
                    <Section style={logo}>
                        <Img
                            src={`https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/dca73b36-cf39-4e28-9bc7-8a0d0cd8ac70/standalone-gradient2x_2/w=128,quality=90,fit=scale-down`}
                            width="48"
                            alt="NOVU Logo"
                        />
                    </Section>

                    {/* Invitation Content */}
                    <Section style={content}>
                        <Row>
                            <Img
                                style={image}
                                width={620}
                                src={`https://react-email-demo-48zvx380u-resend.vercel.app/static/yelp-header.png`}
                                alt="Meeting Image"
                            />
                        </Row>

                        {/* Date Card and Main Content */}
                        <Row style={rowContainer}>
                            {/* Date Card */}
                            <Column style={dateCard}>
                                <Heading style={{ fontSize: 24, textAlign: "center" }}>Meeting Date</Heading>
                                <Text style={{ fontSize: 20, textAlign: "center" }}>{formattedDate}</Text>
                            </Column>

                            {/* Main Content */}
                            <Column style={mainContentColumn}>
                                <Row style={boxInfos}>
                                    <Column>
                                        <Heading
                                            style={{
                                                fontSize: 32,
                                                fontWeight: "bold",
                                                textAlign: "center",
                                            }}
                                        >
                                            {meetingTitle}
                                        </Heading>
                                        <Text style={paragraph}>
                                            <b>Date and Time:</b> {formattedDate}
                                        </Text>
                                        <Text style={paragraph}>
                                            <b>Organizer:</b> {organizerName}
                                        </Text>
                                        <Text style={paragraph}>
                                            <b>Subject:</b> {subject}
                                        </Text>
                                        <Text style={paragraph}>
                                            <b>Location:</b> {location}
                                        </Text>
                                        {participants.length > 0 && (
                                            <Text style={paragraph}>
                                                <b>Participants:</b> {participants.join(", ")}
                                            </Text>
                                        )}
                                    </Column>
                                </Row>

                                {/* Response Buttons */}
                                <Row style={boxInfos}>
                                    <Column style={containerButton} colSpan={2}>
                                        <Button style={buttonYes}>Yes</Button>
                                        <Button style={buttonMaybe}>Maybe</Button>
                                        <Button style={buttonNo}>No</Button>
                                    </Column>
                                </Row>
                            </Column>
                        </Row>
                    </Section>

                    <Section style={containerImageFooter}>
                        <Img
                            style={image}
                            width={620}
                            src={`https://react-email-demo-48zvx380u-resend.vercel.app/static/yelp-footer.png`}
                            alt="Footer Image"
                        />
                    </Section>

                    <Text
                        style={{
                            textAlign: "center",
                            fontSize: 12,
                            color: "rgb(0,0,0, 0.7)",
                        }}
                    >
                        © 2024 | Novu Inc., 350 Mission Street, San Francisco, CA 94105,
                        U.S.A. | www.novu.com
                    </Text>
                </Container>
            </Body>
        </Html>
    );
};

MeetingInviteEmail.PreviewProps = {
    meetingTitle: "Meeting Invitation with NOVU Team",
    meetingDate: new Date("August 1, 2024, 2:30 PM"),
    organizerName: "Tamar Henfling",
    participants: ["Yael Dovrat", "John Doe", "Jane Smith"],
    location: "Zoom - https://zoom.us/j/123456789",
    subject: "Project Kickoff Meeting",
} as MeetingInviteEmailProps;

export default MeetingInviteEmail;
