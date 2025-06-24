import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { BiblionautaLogo } from "../src/components/LogoApp";
import { StatusBar } from 'expo-status-bar';

export default function Layout() {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" backgroundColor="#222" />
      <Stack screenOptions={{
        headerShown: true,
        headerTitle: () => <BiblionautaLogo />,
        headerStyle: { backgroundColor: "#222" },
        headerShadowVisible: false
      }} />
    </SafeAreaProvider>
  )
}
