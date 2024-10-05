import { Stack } from 'expo-router/stack';
import { Slot } from 'expo-router';
// import './global.css';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index"  options={{ title: "church", headerShown: false }} />
      <Stack.Screen name="support" options={{ title: "support", headerShown: false }} />
      <Stack.Screen name="events" options={{ title: "events", headerShown: false }} />
      <Stack.Screen name="podcasts" options={{ title: "podcasts", headerShown: false }} />
    </Stack>
  );
}
