const primaryColor = "white";
const secondaryColor = "#AFE1AF";
const primaryTextColor = "#0C0404";
const secondaryTextColor = "#494F55";
const unreadBackGroundColor = "#869F9F";
const primaryButtonBackGroundColor = unreadBackGroundColor;
const secondaryButtonBackGroundColor = "#C6DFCD";
const dropdownBorderStyle = "2px solid #AFE1AF";
const tabLabelAfterStyle = "#AFE1AF !important";

export const styles = {
  bellButton: {
    root: {
      marginTop: "20px",
      svg: {
        color: secondaryColor,
        fill: primaryColor,
        minWidth: "20px",
        minHeight: "20px",
      },
    },
    dot: {
      rect: {
        fill: primaryColor,
        strokeWidth: "0",
        width: "3px",
        height: "3px",
        x: 10,
        y: 2,
      },
    },
  },
  unseenBadge: {
    root: { color: primaryTextColor, background: secondaryColor },
  },
  popover: {
    root: { zIndex: -99 },
    arrow: {
      backgroundColor: primaryColor,
      borderColor: secondaryColor,
    },
    dropdown: {
      border: dropdownBorderStyle,
      borderRadius: "10px",
    },
  },
  header: {
    root: {
      backgroundColor: primaryColor,
      "&:hover": { backgroundColor: primaryColor },
      cursor: "pointer",
      color: primaryTextColor,
    },
    cog: { opacity: 1 },
    markAsRead: {
      color: primaryTextColor,
      fontSize: "14px",
    },
    title: { color: primaryTextColor },
    backButton: {
      color: primaryTextColor,
    },
  },
  layout: {
    root: {
      background: primaryColor,
    },
  },
  loader: {
    root: {
      stroke: primaryTextColor,
    },
  },
  accordion: {
    item: {
      backgroundColor: secondaryColor,
      ":hover": {
        backgroundColor: secondaryColor,
      },
    },
    content: {
      backgroundColor: secondaryColor,
      borderBottomLeftRadius: "7px",
      borderBottomRightRadius: "7px",
    },
    control: {
      ":hover": {
        backgroundColor: secondaryColor,
      },
      color: primaryTextColor,
      title: {
        color: primaryTextColor,
      },
    },
    chevron: {
      color: primaryTextColor,
    },
  },
  switch: {
    root: {},
    input: {
      ":checked~label": {
        background: primaryColor,
        ".mantine-Switch-trackLabel": {
          backgroundColor: primaryColor,
        },
      },
      ":not(checked)~label": {
        background: primaryTextColor,
        ".mantine-Switch-trackLabel": {
          backgroundColor: primaryTextColor,
        },
      },
    },
    track: {},
    thumb: { backgroundColor: secondaryColor },
  },
  notifications: {
    root: {
      ".nc-notifications-list-item": {
        backgroundColor: secondaryColor,
      },
    },
    listItem: {
      layout: {
        borderRadius: "7px",
        color: primaryTextColor,
        ".mantine-Avatar-root": {
          width: "20px",
          height: "20px",
          minWidth: "20px",
        },
        ".mantine-Avatar-image": {
          width: "20px",
          height: "20px",
          minWidth: "20px",
        },
        "div:has(> .mantine-Avatar-root)": {
          border: "none",
          width: "20px",
          height: "20px",
          minWidth: "20px",
        },
      },
      timestamp: { color: secondaryTextColor, fontWeight: "bold" },
      dotsButton: {
        path: {
          fill: primaryTextColor,
        },
      },
      unread: {
        "::before": { background: unreadBackGroundColor },
      },
      buttons: {
        primary: {
          background: primaryButtonBackGroundColor,
          color: primaryTextColor,
          "&:hover": {
            background: primaryButtonBackGroundColor,
            color: secondaryTextColor,
          },
        },
        secondary: {
          background: secondaryButtonBackGroundColor,
          color: secondaryTextColor,
          "&:hover": {
            background: secondaryButtonBackGroundColor,
            color: secondaryTextColor,
          },
        },
      },
    },
  },
  actionsMenu: {
    item: { "&:hover": { backgroundColor: secondaryColor } },
    dropdown: {
      backgroundColor: primaryColor,
    },
    arrow: {
      backgroundColor: primaryColor,
      borderTop: "0",
      borderLeft: "0",
    },
  },
  preferences: {
    item: {
      title: { color: primaryTextColor },
      divider: { borderTopColor: primaryColor },
      channels: { color: secondaryTextColor },
      content: {
        icon: { color: primaryTextColor },
        channelLabel: { color: primaryTextColor },
        success: { color: primaryTextColor },
      },
    },
  },
  tabs: {
    tabLabel: {
      color: primaryTextColor,
      "::after": { background: tabLabelAfterStyle },
      ":hover": { color: tabLabelAfterStyle },
      "[data-active]": { color: tabLabelAfterStyle },
    },
    tabsList: { borderBottomColor: primaryColor },
  },
};
