import React, { useState, useMemo } from 'react';
import { View, Text, TouchableOpacity, Pressable, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { data } from "../Twi.js";
import { FlashList } from '@shopify/flash-list';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Ionicons } from '@expo/vector-icons';
import Fuse from 'fuse.js';
import useFavoritesStore from '../../../favoriteStore/favorites.js';

const fuse = new Fuse(data, {
  keys: ['number', 'title', 'hymncontents.lines'],
  includeScore: true,
  threshold: 0.4,
});

export default function Home() {
  const [search, setSearch] = useState('');
  const router = useRouter();
  const { favorites, addFavorite, removeFavorite, isFavorite } = useFavoritesStore();

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

  return (
    <View className='flex-1 flex flex-col justify-center gap-4 w-full bg-bgcolor px-4 pb-4 py-16'>
      <Text className='font-semibold text-3xl'>Christo Asore Nnwom</Text>

      <View className='flex flex-row items-center gap-3'>
        <Pressable onPress={() => router.push('/hymn/')}><Text className='font-semibold rounded-full bg-deep border text-bgcolor px-2 py-1'>Twi</Text></Pressable>
        <Pressable onPress={() => router.push('/hymn/english')}><Text className='font-semibold rounded-full border border-deep/40 px-2 py-1'>English</Text></Pressable>
        <Pressable onPress={() => router.push('/hymn/english')}><Text className='font-semibold rounded-full border border-deep/40 px-2 py-1'>Ga</Text></Pressable>
      </View>

    
        <TextInput
          className='border border-primeg/60 px-4 w-4/5 rounded-full'
          placeholder="Search"
          value={search}
          onChangeText={setSearch}
          returnKeyType="search"
        />
  
 

      <FlashList
        data={filteredData}
        renderItem={({ item }) => (
          <TouchableOpacity
            className="p-4 m-rounded-lg"
            onPress={() => router.push(`/hymn/${item.id}`)}
            key={item.id}
          >
            <View className='bg-cardcolor px-4 py-2 flex justify-between flex-row gap-2 mb-1 rounded-md'>
              <View className='flex flex-col gap-1'>
                <Text className="text-black text-base font-bold">{item.title}</Text>
                <Text className="text-black text-md flex flex-row justify-end">Hymn {item.number}</Text>
              </View>
              <TouchableOpacity onPress={() => toggleFavorite(item)}>
                <MaterialIcons 
                  name={isFavorite(item.id) ? "favorite" : "favorite-border"} 
                  size={22} 
                  color="black" 
                />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
        estimatedItemSize={50}
      />

      <TouchableOpacity 
        className="bg-deep p-3 rounded-full mt-4"
        onPress={() => router.push('/favorites')}
      >
        <Text className="text-white text-center">View Favorites</Text>
      </TouchableOpacity>
    </View>
  );
}