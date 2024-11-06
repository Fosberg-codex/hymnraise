import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { data } from "../Twi.js";
import { Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';


export default function HymnDetail() {
  const { id } = useLocalSearchParams();
  const hymn = data.find((item) => item.id === id);
  const [fontSize, setFontSize] = useState(14);

  const zoomIn = () => setFontSize(prevSize => Math.min(prevSize + 2, 30));
  const zoomOut = () => setFontSize(prevSize => Math.max(prevSize - 2, 14));

  const router = useRouter()

  if (!hymn) {
    return (
      <View className="flex-1 justify-center items-center bg-bgcolor">
        <Text className="text-red-500 text-lg">Hymn not found</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-bgcolor">
      <View className='flex flex-row gap-2 justify-between items-center mt-12 '>
         <View className='flex flex-row'>
        <Pressable  onPress={() => router.push(`/hymn/english/${hymn.ss}`)}>
          <Text className=' rounded-full bg-deep/50 px-2 py-1 text-white ml-6'>
            English (SS)
            </Text>
          </Pressable>
          </View>
       <View className="flex flex-row  mr-4">
        <Text className='text-deep'>Zoom</Text>
        <TouchableOpacity onPress={zoomOut} className="bg-deep p-2 rounded-full mr-2">
          <Ionicons name="remove" size={24} color="#2c1810" />
        </TouchableOpacity>
        <TouchableOpacity onPress={zoomIn} className="bg-deep p-2 rounded-full">
          <Ionicons name="add" size={24} color="#2c1810" />
        </TouchableOpacity>
      </View>
      </View>
      <ScrollView className="flex-1" key={hymn.id}>
        <Text style={{ fontSize: fontSize + 4 }} className="font-bold mt-4 self-center text-center">{hymn.title}</Text>
        <View className='flex flex-col items-center'>
          {hymn && hymn.hymncontents?.map((content, index) => (
            <View key={index} className="mt-4">
              <Text style={{ fontSize: fontSize + 2 }} className="font-bold text-center">{content.stanza}</Text>
              <Text style={{ fontSize: fontSize }} className="mt-2 text-center">{content.lines}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
      
     
    </View>
  );
}



















// // app/hymn/[id].js
// import { View, Text } from 'react-native';
// import { useRouter, useLocalSearchParams } from 'expo-router';
// import { data } from "../Twi.js";
// import { ScrollView } from 'react-native'
// export default function HymnDetail() {
//   const { id } = useLocalSearchParams();
//   const hymn = data.find((item) => item.id === id);

//   if (!hymn) {
//     return (
//       <View className="flex-1 justify-center items-center bg-bgcolor">
//         <Text className="text-red-500 text-lg">Hymn not found</Text>
//       </View>
//     );
//   }

//   return (
//     <ScrollView className="flex-1  bg-bgcolor" key={hymn.id}>
//       <Text className="text-2xl font-bold mt-16 self-center">{hymn.title}</Text>
//       <View className='flex flex-col items-center'>
//       { hymn && hymn.hymncontents.map( hymn =>( <>
//         <Text className="mt-2 text-lg font-bold">{hymn.stanza}</Text>
//         <Text className="mt-2 text-lg text-center">{hymn.lines}</Text>
//         </>
//       ))
//       }
//       </View>
//     </ScrollView>
//   );
// }
