import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import TabBar from "../../components/tabbar";


export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "blue",
        // Hide the tab bar on the index page
        tabBarStyle: route.name === 'index' ? { display: 'none' } : undefined,
      })}
    >
      {/* Remove the Tabs.Screen for "index" */}
      <Tabs.Screen
        name="hymn"
        options={{
          title: "hymns",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome size={22} name="cog" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="fundraise"
        options={{
          title: "help",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome size={22} name="cog" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="favorites"
        
        options={{
          title: "favorites",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome size={22} name="cog" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="news"
        options={{
          title: "news",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome size={22} name="cog" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome size={22} name="cog" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
