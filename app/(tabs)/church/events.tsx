import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Router, useRouter } from 'expo-router'
import { resources } from '../../../Data/resources'
import { events } from '../../../Data/events'
import { FlashList } from '@shopify/flash-list'
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from '@expo/vector-icons/Ionicons'
import { format } from 'date-fns';


const index = () => {

  const router = useRouter()
  return (
    <View className='flex-1 bg-bgcolor'>

    <Text className='mt-16 font-semibold text-3xl ml-4'>Church programmes</Text>

      <View className='mt-2 flex flex-row items-center px-4 gap-5 mb-8'>
        <Text onPress={() =>{router.push('/church')}}className=''>Resources</Text>
        <Pressable onPress={() =>{router.push('/church/podcasts')}} ><Text className=''>Podcasts</Text></Pressable>
        <Pressable onPress={() =>{router.push('/church/events')}} ><Text className='border-b-2 border-deep py-1 font-semibold'>Church-events</Text></Pressable>
        <Pressable onPress={() =>{router.push('/church/support')}} ><Text className=''>Support</Text></Pressable>
        
      </View>
     <FlashList
        data={events}
        renderItem={({ item }:any) => (
                <>
                <Pressable key={item.id} onPress={()=>{router.push(`${item.link1}`)}} className='flex flex-col gap-1 justify-center items-start px-4 py-2 mx-4 mb-3 rounded bg-deep/20'>
                  <Text className='text-lg font-semibold'>{item.name}</Text>
                  <Text className='text-deep/90'>{item.description}</Text>
                  <View className='flex flex-row justify-between items-center w-full'>
                    <View>
                      <Text className='text-sm'>Date: {format(item.date, 'MM-dd-yyyy')}</Text>
                      </View>
                    
                    <View className='flex flex-row gap-1 items-center'>
                      <Ionicons name="time" size={18} color="#2c1810" />
                      <Text className='text-sm'>{item.duration}</Text>
                    </View>
                  </View>
                  <Text>Location: {item.location}</Text>
                  <View className='flex flex-row gap-2 items-center'>
                    <Text>Tags</Text>
                  {item.tags && item.tags.map((tag:any) => (
                    <>
                    <Text className='text-sm rounded-full bg-deep/40 text-deep px-2 py-1'>{tag}</Text>
                    </>
                  )

                )}
                </View>

                </Pressable>
                </>
        )}
        estimatedItemSize={5}
      />



      
    </View>
  )
}

export default index