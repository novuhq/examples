# Novu React Native Inbox Example

This is a minimal example demonstrating how to use [`@novu/react-native`](https://www.npmjs.com/package/@novu/react-native) to build a custom notification inbox in React Native with Expo.

## Features

- ✅ Fetch notifications using the `useNotifications` hook
- ✅ Display notifications in a custom UI
- ✅ Loading and error states
- ✅ Environment variable configuration
- ✅ TypeScript support

## Prerequisites

- Node.js (v18 or later)
- Expo CLI
- A Novu account with an application set up

## Setup

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Configure environment variables**

   Create a `.env` file in the root directory:

   ```env
   EXPO_PUBLIC_NOVU_SUBSCRIBER=your_subscriber_id
   EXPO_PUBLIC_NOVU_APPLICATION_IDENTIFIER=your_application_identifier
   ```

   You can find these values in your [Novu dashboard](https://web.novu.co/):
   - **Subscriber ID**: The ID of the subscriber you want to fetch notifications for
   - **Application Identifier**: Your Novu application identifier (found in Settings > API Keys)

3. **Start the development server**

   ```bash
   npx expo start
   ```

   Then press:
   - `i` for iOS simulator
   - `a` for Android emulator
   - `w` for web browser

## Project Structure

```
inbox-react-native-expo/
├── app/
│   ├── (tabs)/
│   │   ├── index.tsx          # Main screen displaying notifications
│   │   └── _layout.tsx        # Tab layout configuration
│   ├── _layout.tsx            # Root layout
│   └── +not-found.tsx         # 404 screen
├── components/
│   └── NovuNotifications.tsx  # Main component showcasing @novu/react-native
└── .env                       # Environment variables (create this)
```

## How It Works

The example demonstrates the core concepts of using `@novu/react-native`:

### 1. Setting up the NovuProvider

```tsx
import { NovuProvider } from "@novu/react-native";

<NovuProvider
  subscriber={subscriberId}
  applicationIdentifier={applicationIdentifier}
>
  {/* Your app components */}
</NovuProvider>
```

### 2. Using the useNotifications hook

```tsx
import { useNotifications } from "@novu/react-native";

const { notifications, isLoading, error } = useNotifications({
  limit: 40,
});
```

### 3. Displaying notifications

The `notifications` array contains notification objects with properties like:
- `id`: Unique notification ID
- `title`: Notification title
- `body`: Notification body/content
- `createdAt`: Timestamp when the notification was created
- And more...

## Key Files

- **`components/NovuNotifications.tsx`**: Main component that demonstrates:
  - How to configure `NovuProvider` with environment variables
  - How to use the `useNotifications` hook
  - How to handle loading, error, and empty states
  - How to display notifications in a custom UI

## Learn More

- [Novu Documentation](https://docs.novu.co/)
- [@novu/react-native Package](https://www.npmjs.com/package/@novu/react-native)
- [Expo Documentation](https://docs.expo.dev/)

## License

MIT
