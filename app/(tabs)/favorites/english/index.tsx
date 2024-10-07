import React, { useState, useMemo } from 'react';
import { View, Text, TouchableOpacity, TextInput, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { FlashList } from '@shopify/flash-list';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Ionicons } from '@expo/vector-icons';
import useEnglishfavStore from '../../../../favoriteStore/englishfav';
import Fuse from 'fuse.js';

export default function Favorites() {
  const router = useRouter();
  const { favorites, removeFavorite } = useEnglishfavStore();
  const [search, setSearch] = useState('');

  const fuse = useMemo(() => new Fuse(favorites, {
    keys: ['number', 'title'],
    includeScore: true,
    threshold: 0.4,
  }), [favorites]);

  const filteredFavorites = useMemo(() => {
    if (search === '') return favorites;
    return fuse.search(search).map(result => result.item);
  }, [search, favorites]);

  return (
    <View className='flex-1 flex flex-col  gap-4 w-full bg-bgcolor px-4 pb-4 py-16'>
      <Text className='font-semibold text-3xl'>English Favorites</Text>
      <View className='flex flex-row items-center gap-3'>
        <Pressable onPress={() => router.push('/favorites/')}><Text className='font-semibold  border  px-2 py-1 rounded-full  border-deep/40'>Twi</Text></Pressable>
        <Pressable onPress={() => router.push('/favorites/english')}><Text className='font-semibold rounded-full bg-deep text-bgcolor  px-2 py-1'>English</Text></Pressable>
        <Pressable onPress={() => router.push('/favorites/english')}><Text className='font-semibold rounded-full border border-deep/40 px-2 py-1'>Ga</Text></Pressable>
      </View>

      <View className='flex flex-row gap-6 items-center w-full mb-2'>
        <TextInput
          className='border border-primeg/60 px-4 w-4/5 rounded-full'
          placeholder="Search favorites"
          value={search}
          onChangeText={setSearch}
          returnKeyType="search"
        />
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="search" size={26} color="#2c1810" />
        </TouchableOpacity>
      </View>

      {filteredFavorites.length === 0 ? (
        <Text className='text-center text-gray-500'>
          {favorites.length === 0 ? 'No English favorites yet' : 'No matching favorites found'}
        </Text>
      ) : (
        <FlashList
          data={filteredFavorites}
          renderItem={({ item }:any) => (
            <TouchableOpacity
              className="p-4 m-rounded-lg"
              onPress={() => router.push(`/hymn/english/${item.id}`)}
            >
              <View className='bg-cardcolor px-4 py-2 flex justify-between flex-row gap-2 mb-1 rounded-md'>
                <View className='flex flex-col gap-1'>
                  <Text className="text-black text-base font-bold">{item.title}</Text>
                  <Text className="text-black text-md flex flex-row justify-end">Hymn {item.number}</Text>
                </View>
                <TouchableOpacity onPress={() => removeFavorite(item.id)}>
                <MaterialCommunityIcons name="heart-remove" size={22} color="#2c1810" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )}
          estimatedItemSize={50}
        />
      )}

      <TouchableOpacity 
        className="bg-deep p-3 rounded-full mt-4"
        onPress={() => router.back()}
      >
        <Text className="text-deep/90 underline text-center">Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}