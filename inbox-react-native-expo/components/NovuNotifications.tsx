import type { Notification as INotification } from "@novu/react-native";
import { NovuProvider, useNotifications } from "@novu/react-native";
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from "react-native";

/**
 * NotificationsList component that uses the useNotifications hook
 * to fetch and display notifications from Novu
 */
const NotificationsList = () => {
  const { notifications, isLoading, error } = useNotifications({
    limit: 40,
  });

  if (isLoading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#6366f1" />
        <Text style={styles.loadingText}>Loading notifications...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>Error loading notifications</Text>
        <Text style={styles.errorDetail}>{error.message || String(error)}</Text>
      </View>
    );
  }

  if (!notifications || notifications.length === 0) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.emptyText}>No notifications yet</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
      {notifications.map((notification: INotification) => (
        <View key={notification.id} style={styles.notificationItem}>
          <Text style={styles.notificationTitle}>{notification.subject}</Text>
          <Text style={styles.notificationBody}>{notification.body}</Text>
          {notification.createdAt && (
            <Text style={styles.notificationDate}>
              {new Date(notification.createdAt).toLocaleDateString()}
            </Text>
          )}
        </View>
      ))}
    </ScrollView>
  );
};

/**
 * Main NovuNotifications component
 * 
 * This component demonstrates how to use @novu/react-native to:
 * 1. Set up the NovuProvider with subscriber and applicationIdentifier
 * 2. Use the useNotifications hook to fetch notifications
 * 3. Display notifications in a custom UI
 * 
 * Environment variables required:
 * - EXPO_PUBLIC_NOVU_SUBSCRIBER: Your Novu subscriber ID
 * - EXPO_PUBLIC_NOVU_APPLICATION_IDENTIFIER: Your Novu application identifier
 */
export const NovuNotifications = () => {
  const subscriber = process.env.EXPO_PUBLIC_NOVU_SUBSCRIBER as string;
  const applicationIdentifier = process.env.EXPO_PUBLIC_NOVU_APPLICATION_IDENTIFIER as string;

  if (!subscriber || !applicationIdentifier) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>Missing Novu configuration</Text>
        <Text style={styles.errorDetail}>
          Please set EXPO_PUBLIC_NOVU_SUBSCRIBER and EXPO_PUBLIC_NOVU_APPLICATION_IDENTIFIER in your .env file
        </Text>
      </View>
    );
  }

  return (
    <NovuProvider subscriber={subscriber} applicationIdentifier={applicationIdentifier}>
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Novu React Native Inbox</Text>
            <Text style={styles.headerSubtitle}>Custom notification center example</Text>
          </View>
          <NotificationsList />
        </View>
      </View>
    </NovuProvider>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
  },
  container: {
    flex: 1,
    width: "100%",
    maxWidth: 800,
    backgroundColor: "#ffffff",
    minHeight: "100%",
  },
  header: {
    padding: 20,
    paddingTop: 60,
    backgroundColor: "#6366f1",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#e0e7ff",
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 32,
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: "#6b7280",
  },
  errorText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#ef4444",
    marginBottom: 8,
    textAlign: "center",
  },
  errorDetail: {
    fontSize: 14,
    color: "#6b7280",
    textAlign: "center",
  },
  emptyText: {
    fontSize: 16,
    color: "#6b7280",
  },
  notificationItem: {
    backgroundColor: "#f9fafb",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: "#6366f1",
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 6,
  },
  notificationBody: {
    fontSize: 14,
    color: "#4b5563",
    lineHeight: 20,
    marginBottom: 8,
  },
  notificationDate: {
    fontSize: 12,
    color: "#9ca3af",
  },
});
