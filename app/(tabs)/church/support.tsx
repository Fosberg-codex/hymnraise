import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Router, useRouter } from 'expo-router'
import { resources } from '../../../Data/resources'
import { events } from '../../../Data/events'
import { FlashList } from '@shopify/flash-list'

const index = () => {

  const router = useRouter()
  return (
    <View className='flex-1 bg-bgcolor'>
      <Text className='mt-16 font-semibold text-3xl ml-4'>Help the church</Text>
      <View className='mt-2 flex flex-row items-center px-4 gap-5 mb-8'>
        <Text onPress={() =>{router.push('/church')}} className=''>Resources</Text>
        <Pressable onPress={() =>{router.push('/church/podcasts')}} ><Text className=''>Podcasts</Text></Pressable>
        <Pressable onPress={() =>{router.push('/church/events')}} ><Text className=''>Church-events</Text></Pressable>
        <Pressable onPress={() =>{router.push('/church/support')}} ><Text className='border-b-2 border-deep py-1 font-semibold'>Support</Text></Pressable>
        
      </View>

      <View className="border border-deep/20 rounded-lg shadow-sm p-4 mb-4 mx-4">
          <Text className="text-xl font-semibold text-primeg mb-1">
            Support Bia Lamplighter Girls School Project
          </Text>
          <Text className='text-sm'>
          Bia lamplighter is a school project that aims to help girls in the community. Founded by Dr. Augustine Tawiah, a preacher of Christ and Dr. Anita Lynn Tawiah
          </Text>

          <View className='flex flex-col gap-1 justify-center mb-4 mt-2' >
          <Text className="text-bgcolor rounded-md bg-deep/60 px-2 py-1">MTN MoMO: 0552412180, Tigo Cash: 0552412180</Text>
          <Text>Call Brother Augustine at: 0552412180 to learn more</Text>
          </View>
          <Text className='text-deep font-semibold'>Thanks for your support</Text>
        </View>
     



      
    </View>
  )
}

export default index