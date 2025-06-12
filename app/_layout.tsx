import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";

export default function RootLayout() {
  return (
    <PaperProvider>
      <Stack screenOptions={{ headerShown: false }} initialRouteName="(tabs)">
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="(screens)/assignment-form"
          options={{ headerShown: false }}
        />
      </Stack>
    </PaperProvider>
  );
}
