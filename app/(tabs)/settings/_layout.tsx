import { Stack } from 'expo-router/stack';
import { Slot } from 'expo-router';
// import './global.css';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index"  options={{ title: "utils", headerShown: false }} />
      <Stack.Screen name="about" options={{ title: "about app", headerShown: false }} />
      <Stack.Screen name="questions" options={{ title: "questions", headerShown: false }} />
      <Stack.Screen name="donate" options={{ title: "donate", headerShown: false }} />
      <Stack.Screen name="language" options={{ title: "language", headerShown: false }} />
      <Stack.Screen name="ppolicy" options={{ title: "ppolicy", headerShown: false }} />
    </Stack>
  );
}
