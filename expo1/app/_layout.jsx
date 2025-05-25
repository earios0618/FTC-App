import { Stack } from "expo-router";
import { StatusBar, useColorScheme } from "react-native";
import { Colors } from "../constants/Colors";

export default function RootLayout() {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light
  return (
    <>
      <StatusBar value="auto" />
      <Stack screenOptions={{
        headerStyle: { backgroundColor: theme.navBackground },
        headerTintColor: theme.title,
      }}>
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen name="about" options={{ title: "About" }} />
      </Stack>
    </>
  )
}
