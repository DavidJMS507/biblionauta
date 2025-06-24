import { Tabs } from "expo-router";
import { HomeIcon, TopBooksIcon , SearchIcon, BookmarkIcon, UserIcon } from "../../src/components/Icons";

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
          title: "Inicio", 
          tabBarIcon: ({color}) => <HomeIcon color={color} />
        }}
      />

      <Tabs.Screen 
        name="trending"
        options={{
          title: "Top libros", 
          tabBarIcon: ({color}) => <TopBooksIcon color={color} />
        }}
      />

      <Tabs.Screen 
        name="search"
        options={{
          title: "Buscar", 
          tabBarIcon: ({color}) => <SearchIcon color={color} />
        }}
      />

      <Tabs.Screen 
        name="library"
        options={{
          title: "Guardado", 
          tabBarIcon: ({color}) => <BookmarkIcon color={color} />
        }}
      />

      <Tabs.Screen 
        name="profile"
        options={{
          title: "Cuenta", 
          tabBarIcon: ({color}) => <UserIcon color={color} />
        }}
      />
    </Tabs>
  )
}