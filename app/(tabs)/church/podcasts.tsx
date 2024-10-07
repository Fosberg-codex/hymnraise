import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Router, useRouter } from 'expo-router'
import { resources } from '../../../Data/resources'
import { events } from '../../../Data/events'
import { podcasts } from '../../../Data/podcasts'
import { FlashList } from '@shopify/flash-list'
import { Image } from 'expo-image'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'


const index = () => {

  const router = useRouter()
  return (
    <View className='flex-1 bg-bgcolor'>
      <Text className='mt-16 font-semibold text-3xl ml-4'>Wonderful Podcasts</Text>
      <View className='mt-2 flex flex-row items-center px-4 gap-5 mb-8'>
        <Text onPress={() =>{router.push('/church')}} className=''>Resources</Text>
        <Pressable onPress={() =>{router.push('/church/podcasts')}} ><Text className='border-b-2 border-deep py-1 font-semibold'>Podcasts</Text></Pressable>
        <Pressable onPress={() =>{router.push('/church/events')}} ><Text className=''>Church-events</Text></Pressable>
        <Pressable onPress={() =>{router.push('/church/support')}} ><Text className=''>Support</Text></Pressable>
        
      </View>
     <FlashList
        data={podcasts}
        renderItem={({ item }:any) => (
                <>
                <Pressable key={item.id} onPress={()=>{router.push(`${item.link1}`)}} className='flex flex-row gap-1 justify-between items-center px-4 py-2 mx-4 mb-3 rounded bg-deep/20'>
                <View>
                  <Image
                  style={{ height: 70, width: 75, borderRadius: 5 }}
                  source={require(`.../../../assets/images/podcast.jpeg`)}
                  contentFit="cover"
                  transition={1000}
                />
                </View>
                 
                  <View className='flex flex-col gap-1 justify-center'>
                  <Text className='text-lg font-semibold'>{item.title}</Text>
                  <Text className='text-deep/90'>{item.description}</Text>
                  <View className='flex flex-row gap-2 items-center justify-start w-full mb-2'>
                  <FontAwesome6 name="podcast" size={15} color="#2c1810" />
                  <Text className='text-sm'>{item.days}</Text>

                  </View>
                  <View className='flex flex-row gap-2 items-center'>
                    <Text>Tags</Text>
                  {item.tags && item.tags.map((tag:any) => (
                    <>
                    <Text className='text-vs rounded-full bg-deep/40 text-deep px-2 '>{tag}</Text>
                    </>
                  )

                )}
                </View>
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