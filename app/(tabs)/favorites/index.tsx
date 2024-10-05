import React from 'react';
import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import { Link, useRouter } from 'expo-router';
import {data} from "../Twi.js"
import { FlashList } from '@shopify/flash-list';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-reanimated/lib/typescript/Animated.js';

export default function Home() {
    const [search, setSearch] = React.useState('');

  const router = useRouter()

  const hymnLang = [
    {language: 'English', link: '/hymn/english'},
    {language: 'Ga', link: '/hymn/english'},
  ]
  const handleSearch = () => {  }



  return (
    <>
   
    <View className='flex-1 flex flex-col items-center gap-4 w-full bg-bgcolor px-4 pb-4 py-16'>
    <Text className='font-semibold text-xl'>All fvorites</Text>
      {/* 
    
    <FlashList
        data={hymnLang}
        renderItem={({ item }) => (
                <>
                <Pressable onPress={()=>router.push(`${item.link}`)} className='px-2 py-1 rounded-full bg-deep border border-black mx-1'>
                <Text className='text-bgcolor'>{item.language}</Text>
                </Pressable>
                </>
        )}
        horizontal={true}
        // showsHorizontalScrollIndicator={false}
        estimatedItemSize={5}
      /> */}

    <View className='flex flex-row gap-6 items-center w-full mb-2'>
          <TextInput
            className='border border-primeg/60 px-4 w-4/5 rounded-full'
            placeholder="Search"
            value={search}
            onChangeText={setSearch}
            onSubmitEditing={handleSearch}
            returnKeyType="search"
          />
          <TouchableOpacity onPress={handleSearch}>
            <Ionicons name="search" size={26} color="#2c1810" />
          </TouchableOpacity>
   </View>
     

     {/* <FlashList
        data={data}
        renderItem={({ item }) => (
                <TouchableOpacity
            className="p-4 m-rounded-lg"
            onPress={() => router.push(`/hymn/${item.id}`)}
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
      /> */}

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
