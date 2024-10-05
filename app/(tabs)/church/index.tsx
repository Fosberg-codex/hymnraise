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
      <Text className='mt-16 font-semibold text-3xl ml-4'>Church Resources</Text>
      <View className='mt-2 flex flex-row items-center px-4 gap-5 mb-8'>
        <Text className='border-b-2 border-deep py-1 font-semibold'>Resources</Text>
        <Pressable onPress={() =>{router.push('/church/podcasts')}} ><Text className=''>Podcasts</Text></Pressable>
        <Pressable onPress={() =>{router.push('/church/events')}} ><Text className=''>Church-events</Text></Pressable>
        <Pressable onPress={() =>{router.push('/church/support')}} ><Text className=''>Support</Text></Pressable>
        
      </View>
     <FlashList
        data={resources}
        renderItem={({ item }:any) => (
                <>
                <Pressable onPress={()=>{router.push(`${item.link1}`)}} className='flex flex-col gap-1 justify-center items-start px-4 py-2 mx-4 mb-3 rounded bg-deep/20'>
                  <Text className='text-lg font-semibold'>{item.title}</Text>
                  <Text className='text-deep/90'>{item.description}</Text>
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