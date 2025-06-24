import { Tabs } from "expo-router";
import { HomeIcon } from "../../src/components/Icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false
      }}
    >
      <Tabs.Screen 
        name="index"
        options={{
          title: "Home", 
          tabBarIcon: ({color}) => <HomeIcon color={color} />
        }}
      />
    </Tabs>
  )
}