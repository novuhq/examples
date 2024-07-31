import {
  Body,
  Button,
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
  render,
  Row,
} from "@react-email/components";
import * as React from "react";

import {
  CommentSchema,
  AuthorSchema,
  TicketAssignedSchema,
  CommentOnTicketSchema,
} from "../workflows/multi-workflow-digest/types";

type Event = {
  id: string;
  time: string;
  payload: CommentOnTicketSchema | TicketAssignedSchema;
};

interface LinearDigestEmailProps {
  notifications?: Event[];
}

const events = [
  {
    type: "ticket:assign",
    workspaceId: "novu",
    ticket: {
      id: "ticket_1",
      title: "I18n is not working in SMS and Chat steps",
      descreption: "I18n is not working in SMS and Chat steps",
      status: "open",
    },
    assign: {
      author: {
        id: "user_1",
        name: "Pawan",
        userName: "jainpawan21",
      },
    },
  },
  {
    type: "ticket:assign",
    workspaceId: "novu",
    ticket: {
      id: "ticket_1",
      title: "I18n is not working in SMS and Chat steps",
      descreption: "I18n is not working in SMS and Chat steps",
      status: "open",
    },
    assign: {
      author: {
        id: "user_1",
        name: "Pawan",
        userName: "jainpawan21",
      },
    },
  },
  {
    type: "ticket:assign",
    workspaceId: "novu",
    ticket: {
      id: "ticket_1",
      title: "I18n is not working in SMS and Chat steps",
      descreption: "I18n is not working in SMS and Chat steps",
      status: "open",
    },
    assign: {
      author: {
        id: "user_1",
        name: "Pawan",
        userName: "jainpawan21",
      },
    },
  },
  {
    type: "ticket:assign",
    workspaceId: "novu",
    ticket: {
      id: "ticket_1",
      title: "I18n is not working in SMS and Chat steps",
      descreption: "I18n is not working in SMS and Chat steps",
      status: "open",
    },
    assign: {
      author: {
        id: "user_1",
        name: "Pawan",
        userName: "jainpawan21",
      },
    },
  },
];
interface CommentRowProps {
  comment: CommentSchema;
  ticketId: string;
  ticketTitle: string;
}

interface AssignRowProps {
  ticketId: string;
  ticketTitle: string;
  author: AuthorSchema;
}

const CommentText = ({ comment }: { comment: string }) => {
  return <div style={code}>{comment}</div>;
};

const avatarURL =
  "https://i.pinimg.com/736x/12/b6/9c/12b69c03188762a06008e9d7151832d4.jpg";

export const CommentRow = ({
  comment,
  ticketId,
  ticketTitle,
}: CommentRowProps) => {
  return (
    <Row>
      <Text>
        <span style={disabledText}>{ticketId}</span> <b>{ticketTitle}</b>
      </Text>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Img
          src={comment.author.avatar ?? avatarURL}
          width="20"
          height={"20"}
          style={{ display: "inline", marginRight: "10px" }}
        />
        <Text
          style={{
            display: "inline",
            fontSize: "14px",
            lineHeight: "1.4",
            margin: 0,
          }}
        >
          {comment.author.userName} mentioned you{" "}
          <Link
            href={`https://linear.app/issue/${ticketId}#comment-${comment.id}`}
          >
            in a comment
          </Link>
        </Text>
      </div>
      <CommentText comment={comment.text} />
      <Hr style={hr} />
    </Row>
  );
};

const AssignRow = ({ author, ticketId, ticketTitle }: AssignRowProps) => {
  return (
    <Row>
      <Text>
        <span style={disabledText}>{ticketId}</span> <b>{ticketTitle}</b>
      </Text>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Img
          src={author.avatar ?? avatarURL}
          width="20"
          height={"20"}
          style={{ display: "inline", marginRight: "10px" }}
        />
        <Text
          style={{
            display: "inline",
            fontSize: "14px",
            lineHeight: "1.4",
            margin: 0,
          }}
        >
          {author.userName} assigned this issue to you
        </Text>
      </div>
      <Hr style={hr} />
    </Row>
  );
};

export const LinearDigestEmailNotification = ({
  notifications,
}: LinearDigestEmailProps) => (
  <Html>
    <Head />
    <Preview>{`You have ${notifications?.length} unread notifications on linear`}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={
            "https://asset.brandfetch.io/iduDa181eM/idYYbqOlKi.png?updated=1667563279373"
          }
          width="42"
          height="42"
          alt="Linear Logo"
          style={logo}
        />
        <Heading
          style={heading}
        >{`You have ${notifications?.length} unread notifications on linear`}</Heading>
        <Hr style={hr} />
        {notifications?.map((notification) => {
          const notificationEvent = notification.payload;
          if (
            notificationEvent?.type === "ticket:comment" &&
            "comment" in notificationEvent
          ) {
            return (
              <CommentRow
                comment={notificationEvent.comment}
                ticketId={notificationEvent?.ticket.id}
                ticketTitle={notificationEvent?.ticket.title}
                key={notification.id}
              />
            );
          }

          if (
            notificationEvent?.type === "ticket:assign" &&
            "assign" in notificationEvent
          ) {
            return (
              <AssignRow
                author={notificationEvent?.assign?.author}
                ticketId={notificationEvent?.ticket.id}
                ticketTitle={notificationEvent?.ticket.title}
                key={notification.id}
              />
            );
          } else {
            return <></>;
          }
        })}
        <Section style={buttonContainer}>
          <Button style={button} href={`https://linear.app/novu/inbox`}>
            Open Your Inbox
          </Button>
        </Section>
        <Hr />
        <Link href="https://linear.app" style={disabledText}>
          Linear
        </Link>
      </Container>
    </Body>
  </Html>
);

export default LinearDigestEmailNotification;

LinearDigestEmailNotification.PreviewProps = {
  notifications: events as unknown as Event[],
} as LinearDigestEmailProps;

export function renderLinearDigestEmail(notifications: any) {
  return render(
    <LinearDigestEmailNotification notifications={notifications} />
  );
}

const logo = {
  borderRadius: 21,
  width: 42,
  height: 42,
};

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  maxWidth: "560px",
};

const heading = {
  fontSize: "24px",
  letterSpacing: "-0.5px",
  lineHeight: "1.3",
  fontWeight: "600",
  color: "#484848",
  padding: "17px 0 0",
};

const buttonContainer = {
  padding: "14px 0 14px",
};

const button = {
  backgroundColor: "#5e6ad2",
  borderRadius: "3px",
  fontWeight: "600",
  color: "#fff",
  fontSize: "15px",
  textDecoration: "none",
  textAlign: "center" as const,
  padding: "11px 23px",
  width: "auto",
};

const disabledText = {
  fontSize: "14px",
  color: "#b4becc",
};

const hr = {
  borderColor: "#dfe1e4",
  marginTop: "20px",
};

const code = {
  fontFamily: "monospace",
  fontWeight: "500",
  padding: "5px 4px",
  backgroundColor: "#f8f9fb",
  letterSpacing: "-0.3px",
  fontSize: "14px",
  lineHeight: "1.4",
  borderRadius: "4px",
  color: "#3c4149",
  marginLeft: "25px",
  marginTop: "10px",
};
