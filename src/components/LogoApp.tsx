import { Text } from "react-native";

export function BiblionautaLogo() {
  return (
    <Text
      style={{
        fontSize: 28,
        fontWeight: "bold",
        letterSpacing: 1,
        color: "#fff",
        fontFamily: "serif",
      }}
      accessibilityRole="header"
      accessible
    >
      Biblio
      <Text style={{ color: "#FFD700" }}>nauta</Text>
    </Text>
  );
}