import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import {data} from "../DATA.js"
import { FlashList } from '@shopify/flash-list';
import { Image } from 'react-native';
import myImage from 'https://github.com/Fosberg-codex/hymnraise/blob/main/assets/side.png';


export default function Home() {
    

  const router = useRouter()



  return (
    <>
   
    <View className='flex-1 bg-bgcolor p-4'>
     <Text>{data.length}</Text>
     

     <FlashList
        data={data}
        renderItem={({ item }) => (
                <TouchableOpacity
            className="p-4 m-rounded-lg"
            onPress={() => router.push(`/hymn/${item.id}`)}
          >
            <View className='bg-cardcolor px-2 py-2 flex flex-row gap-1 mb-1 rounded-md'>
            <Image source={{ uri: 'https://github.com/Fosberg-codex/hymnraise/blob/main/assets/side.png' }} style={{ width: 200, height: 200 }} />
            <View className='flex flex-col gap-1'>
            <Text className="text-black text-lg">{item.title}</Text>
            <Text className="text-black text-lg flex flex-row justify-end">Humn {item.number}</Text>
            </View>
            </View>

          </TouchableOpacity>
        )}
        estimatedItemSize={60}
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
