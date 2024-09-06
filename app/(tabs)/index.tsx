// App.js
import React, { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { Link } from 'expo-router';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import {data} from "./DATA.js"
import { FlashList } from '@shopify/flash-list';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

// Prevent the splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);


  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        
        // Any other initialization tasks can go here
        
        // Artificial delay to keep splash screen for 5 seconds
        await new Promise(resolve => setTimeout(resolve, 1000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  useEffect(() => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately
      SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  const router = useRouter()




  return (
    <>
   
    <View className='flex-1 bg-bgcolor p-4'>
     <Text className='mb-2'>{data.length}</Text>
     

     <FlashList
        data={data}
        renderItem={({ item }) => (
                <TouchableOpacity
            className="p-4 m-rounded-lg"
            onPress={() => router.push(`/test/${item.id}`)}
          >
            <View className='bg-cardcolor px-4 py-2 flex justify-between flex-row gap-2 mb-1 rounded-md '>
            <View className='flex flex-col gap-1'>
            <Text className="text-black text-base font-bold">{item.title}</Text>
            <Text className="text-black text-md flex flex-row justify-end">Humn {item.number}</Text>
            </View>

            <View className='flex items-end justify-end'>
            <MaterialIcons name="favorite-border" size={22} color="black" />
            </View>

            </View>

          </TouchableOpacity>
        )}
        estimatedItemSize={data.length}
      />

</View>

{/* <FlashList
data={data}
renderItem={({ item }) => (
  <div className="p-4 border-b border-gray-200" onPress={() => navigation.push('HymnDetail', item)}>
    <h2 className="text-lg font-bold">{item.title}</h2>
    <p className="text-gray-600">{item.description}</p>
  </div>
)}
keyExtractor={(item) => item.title}
/> */}


</>
  );
}

// app.json remains the same as in the previous examples