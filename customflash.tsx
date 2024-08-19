import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading process
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Display the custom splash screen for 3 seconds
  }, []);

  if (isLoading) {
    return (
      <View style={styles.splashScreen}>
        <Image source={require('./assets/logo.png')} style={styles.logo} />
        <Text style={styles.splashText}>Welcome to My App</Text>
      </View>
    );
  }

  return (
    // Your main app content goes here
    <View style={styles.container}>
      <Text>Main App Content</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  splashScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  logo: {
    width: 100,
    height: 100,
  },
  splashText: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
