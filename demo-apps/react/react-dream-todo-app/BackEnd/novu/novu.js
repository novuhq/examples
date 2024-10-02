import { Novu } from "@novu/node";
import dotenv from "dotenv";
import CircularJSON from "circular-json";

dotenv.config();

export const getNotification = async (title, description, email, Id) => {
  const novu = new Novu(process.env.NOVU_API_KEY);

  await novu.subscribers.identify(Id, {
    email: email,
    firstName: "Subscriber",
  });

  await novu.trigger("momentum--L67FbJvt", {
    to: {
      subscriberId: Id,
      email: email,
    },
    payload: {
      title: title,
      description: description,
    },
  });
};

export const smsNotification = async (
  title,
  description,
  phone,
  Id,
  country_code
) => {
  const novu = new Novu(process.env.NOVU_API_KEY);

  novu.trigger("sms", {
    to: {
      subscriberId: Id,
      phone: `+91${phone}`,
    },
    payload: {
      title: title,
      description: description,
    },
  });
};

export const inAppNotification = async (title, description, Id, message) => {
  const novu = new Novu(process.env.NOVU_API_KEY);

  await novu.subscribers.identify(Id, {
    firstName: "inAppSubscriber",
  });

  await novu.trigger("in-app", {
    to: {
      subscriberId: Id,
    },
    payload: {
      title: title,
      description: description,
      message: message,
    },
  });
};

export const getTopics = async (req, res) => {
  const novu = new Novu(process.env.NOVU_API_KEY);
  console.log(process.env.NOVU_API_KEY);

  // key is novu-sumit
  // name is topics-sumit
  const { key, name } = req.body;
  try {
    const result = await novu.topics.create({ key, name });
    res.status(201).json(CircularJSON.stringify({ result }));
  } catch (error) {
    res.status(500).json(CircularJSON.stringify({ message: error.message }));
  }
};

export const getTopicByKey = async (req, res) => {
  const novu = new Novu(process.env.NOVU_API_KEY);
  const { key } = req.params;

  try {
    const result = await novu.topics.get(key);
    res.status(200).json(CircularJSON.stringify(result));
  } catch (error) {
    res.status(500).json(CircularJSON.stringify({ message: error.message }));
  }
};

export const createSubscriber = async (req, res) => {
  const novu = new Novu(process.env.NOVU_API_KEY);

  try {
    const email = req.body.email;

    // Call Novu SDK to create the subscriber with email
    const subscriber = await novu.subscribers.identify(email, {
      email: email,
      returnUser: true,
    });

    // Return the subscriber ID in JSON response
    res.status(200).json(subscriber.id);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const addSubscriberToTopic = async (req, res) => {
  const novu = new Novu(process.env.NOVU_API_KEY);
  try {
    // Get the subscriber ID from the request body
    const subscriberId = req.body.subscriberId;

    // Get the topic key from the request body
    const topicKey = req.body.topicKey;

    // Call Novu SDK to add the subscriber to the topic
    const result = await novu.topics.addSubscribers(topicKey, {
      subscribers: [subscriberId],
    });

    // Return the result as JSON response
    res.json(CircularJSON.stringify(result));
  } catch (error) {
    res.status(500).json(CircularJSON.stringify({ message: error.message }));
  }
};

export const sendNotificationToTopic = async (req, res) => {
  const novu = new Novu(process.env.NOVU_API_KEY);

  try {
    // Get the topic key from the request body
    const topicKey = req.body.topicKey;
    const title = req.body.title;
    const description = req.body.description;

    // Call Novu SDK to trigger a notification to the topic subscribers
    const result = await novu.trigger("momentum--L67FbJvt", {
      to: [{ type: "Topic", topicKey: topicKey }],
      payload: {
        title: title,
        description: description,
      },
    });

    // Return the result as JSON response
    res.json(CircularJSON.stringify(result));
  } catch (error) {
    res.status(500).json(CircularJSON.stringify({ message: error.message }));
  }
};
