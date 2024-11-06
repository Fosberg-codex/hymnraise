import React from 'react';
import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import { Link, useRouter } from 'expo-router';
import {data} from "../../English.js"
import { FlashList } from '@shopify/flash-list';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Fuse from 'fuse.js';
import useEnglishfavStore from '../../../../favoriteStore/englishfav.js';
import { useMemo } from 'react';

const fuse = new Fuse(data, {
  keys: ['number', 'title', 'hymncontents.lines'],
  includeScore: true,
  threshold: 0.4,
});

export default function Home() {
    const [search, setSearch] = React.useState('');

  const router = useRouter()

  const { favorites, addFavorite, removeFavorite, isFavorite } = useEnglishfavStore();

  const toggleFavorite = (item:any) => {
    if (isFavorite(item.id)) {
      removeFavorite(item.id);
    } else {
      addFavorite(item);
    }
  };

  const filteredData = useMemo(() => {
    if (search === '') return data;
    return fuse.search(search).map(result => result.item);
  }, [search]);

  const hymnLang = [
    {language: 'Twi', link: '/hymn/'},
    {language: 'Ga', link: '/hymn/'},
  ]
  const handleSearch = () => {  }



  return (
    <>
   
    <View className='flex-1 flex flex-col justify-center gap-4 w-full bg-bgcolor px-4 pb-4 py-16'>
    <Text className='font-semibold text-3xl '>COC English Hymnal</Text>

    <View className=' flex flex-row items-center gap-3'>
        
        <Pressable onPress={() =>{router.replace('/hymn/')}} ><Text className='font-semibold rounded-full border border-deep/40  px-2 py-1'>Twi</Text></Pressable>
        <Pressable onPress={() =>{router.replace('/hymn/english')}} ><Text className='font-semibold rounded-full text-bgcolor  bg-deep border px-2 py-1'>English</Text></Pressable>
        {/* <Pressable onPress={() =>{router.replace('/hymn/english')}} ><Text className='font-semibold rounded-full border border-deep/40 px-2 py-1'>Ga</Text></Pressable> */}
      </View>
    
    {/* <FlashList
        data={hymnLang}
        renderItem={({ item }) => (
                <>
                <Pressable onPress={()=>router.push(`${item.link}`)} className='px-2 py-1 rounded-full bg-deep border border-black mx-1'>
                <Text className='text-bgcolor'>{item.language}</Text>
                </Pressable>
                </>
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        estimatedItemSize={5}
      /> */}

    
          <TextInput
            className='border border-primeg/60 px-4 w-4/5 rounded-full'
            placeholder="Search"
            value={search}
            onChangeText={setSearch}
            onSubmitEditing={handleSearch}
            returnKeyType="search"
          />
          

     <FlashList
        data={filteredData}
        renderItem={({ item }) => (
                <TouchableOpacity
            className="p-4 m-rounded-lg"
            onPress={() => router.push(`/hymn/english/${item.number}`)}
          >
            <View className='bg-cardcolor px-4 py-2 flex justify-between flex-row gap-2 mb-1 rounded-md '>
            <View className='flex flex-col gap-1'>
            <Text className="text-black text-base font-bold">{item.title}</Text>
            <Text className="text-black text-md flex flex-row justify-end">SS {item.number}</Text>
            </View>

            <View className='flex items-end justify-end'>
            <TouchableOpacity onPress={() => toggleFavorite(item)}>
                <MaterialIcons 
                  name={isFavorite(item.id) ? "favorite" : "favorite-border"} 
                  size={22} 
                  color="black" 
                />
              </TouchableOpacity>
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
