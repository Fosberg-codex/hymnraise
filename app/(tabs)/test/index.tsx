import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import {data} from "../DATA.js"
import { FlashList } from '@shopify/flash-list';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function Home() {
    

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
