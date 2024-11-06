import { Stack } from 'expo-router/stack';
import { Slot } from 'expo-router';
// import './global.css';

export default function Layout() {
  return (
    <Stack >
      <Stack.Screen name="index"  options={{ title: "Hymn", headerShown: false }} />
      <Stack.Screen name="[id]" options={{ title: "Hymnal", headerShown: false }} />
      <Stack.Screen name="english"  options={{ title: "english", headerShown: false }} />

    </Stack>
  );
}
