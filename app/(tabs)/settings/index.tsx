import { View, Text, Share, Pressable  } from 'react-native'
import React from 'react'
import { FontAwesome6,FontAwesome5, MaterialCommunityIcons, Octicons } from '@expo/vector-icons'
import { AntDesign, MaterialIcons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
// import { ScrollView } from 'react-native-gesture-handler'
import { ScrollView } from 'react-native'
import { Linking } from 'react-native'


type userData = {
  email?: string,
}

const index = () => {

   const router = useRouter()




  const onShare = async () => {
   try {
     const result = await Share.share({
       message:
         'Check out this awesome app!', // Customize this message
       url: 'https://your-app-url.com', // Replace with your app's URL
       title: 'Invite your friends',
     });
     if (result.action === Share.sharedAction) {
       if (result.activityType) {
         // shared with activity type of result.activityType
         console.log('Shared with activity type:', result.activityType);
       } else {
         // shared
         console.log('Shared successfully');
       }
     } else if (result.action === Share.dismissedAction) {
       // dismissed
       console.log('Share dismissed');
     }
   } catch (error:any) {
     console.error(error.message);
   }
 };


  return (
    <ScrollView className='flex-1 bg-bgcolor'>
      <View className='flex flex-col gap-1 justify-center items-center px-6 py-2 w-full mt-8'>
        <View className='flex flex-col gap-2 justify-center items-center px-6 py-2'>
        {/* <FontAwesome6 name="bars-staggered" size={24} color="#2c1810" style={{ marginRight: 20 }} /> */}
        <FontAwesome6 name="user-circle" size={45} color="#2c1810" />
         <Text className='font-semibold'>Welcome to COC HymnRaise</Text>
        </View>
        <View className='flex flex-col justify-center items-start gap-4 px-3 py-2 mb-4 rounded-md w-full mt-2 border border-deep/20 '>
        
        <Pressable onPress={() => router.push('/settings/about')}  className='flex flex-row justify-between items-center gap-2 w-full '>
               <View className='flex flex-row gap-2 items-center'>
               <AntDesign name="mobile1" size={18} color="#2c1810" style={{ marginRight: 20 }} />
                <Text>About App</Text>
               </View>
               <AntDesign name="right" size={16} color="#2c1810" style={{ marginRight: 20 }} />


            </Pressable>
            <Pressable onPress={() => router.push('/settings/questions')}  className='flex flex-row justify-between items-center gap-2 w-full '>
               <View className='flex flex-row gap-2 items-center'>
               <FontAwesome6 name="question-circle" size={18} color="#2c1810" style={{ marginRight: 20 }} />
                <Text>Questions</Text>
               </View>
               <AntDesign name="right" size={16} color="#2c1810" style={{ marginRight: 20 }} />


            </Pressable>
            <Pressable onPress={() => router.push('/settings/donate')}  className='flex flex-row justify-between items-center gap-2 w-full '>
               <View className='flex flex-row gap-2 items-center'>
               <FontAwesome5 name="donate" size={18} color="#2c1810" style={{ marginRight: 20 }} />
                <Text>Donate</Text>
               </View>
               <AntDesign name="right" size={16} color="#2c1810" style={{ marginRight: 20 }} />


            </Pressable>
        
            <Pressable onPress={() => router.push('/settings/language')}  className='flex flex-row justify-between items-center w-full '>
               <View className='flex flex-row gap-2 items-center'>
               <MaterialIcons name="language" size={18} color="#2c1810" style={{ marginRight: 20 }} />
                <Text>Language</Text>
               </View>
               <AntDesign name="right" size={16} color="#2c1810" style={{ marginRight: 20 }} />


            </Pressable>

            <Pressable onPress={() => router.push('/settings/ppolicy')}  className='flex flex-row justify-between items-center w-full '>
               <View className='flex flex-row gap-2 items-center'>
               <MaterialIcons name="policy" size={18} color="#2c1810" style={{ marginRight: 20 }} />
                <Text>Privacy Policy</Text>
               </View>
               <AntDesign name="right" size={16} color="#2c1810" style={{ marginRight: 20 }} />


            </Pressable>

            {/* <Pressable onPress={() => router.push('/')}  className='flex flex-row justify-between items-center w-full '>
               <View className='flex flex-row gap-2 items-center'>
               <AntDesign name="profile" size={18} color="#2c1810" style={{ marginRight: 20 }} />
                <Text>Terms of service</Text>
               </View>
               <AntDesign name="right" size={16} color="#2c1810" style={{ marginRight: 20 }} />


            </Pressable> */}

           
        </View>

        <View className='flex flex-col justify-center items-start gap-4 px-3 py-2 mb-4 rounded-md w-full mt-2 border border-deep/20  '>
        <Pressable onPress={() => Linking.openURL('tel:+233552412180')} className='flex flex-row justify-between items-center w-full '>
               <View className='flex flex-row gap-2 items-center'>
               <MaterialIcons name="star-rate" size={16} color="#2c1810" style={{ marginRight: 20 }} />
                <Text>Give us feedback</Text>
               </View>
               <AntDesign name="right" size={16} color="#2c1810" style={{ marginRight: 20 }} />
            </Pressable>
        <Pressable onPress={onShare} className='flex flex-row justify-between items-center w-full  '>
               <View className='flex flex-row gap-2 items-center '>
               <AntDesign name="sharealt" size={16} color="#2c1810" style={{ marginRight: 20 }} />
                <Text>Share with friends</Text>
               </View>
               <AntDesign name="right" size={16} color="#2c1810" style={{ marginRight: 20 }} />


            </Pressable>
            <Pressable onPress={() => Linking.openURL('tel:+233552412180')} className='flex flex-row justify-between items-center w-full border-b border-deep/20 pb-2 '>
               <View className='flex flex-row gap-2 items-center'>
               <Octicons name="apps" size={16} color="#2c1810" style={{ marginRight: 20 }} />
                <Text className='font-bold'>Need a mobile app or website?</Text>
               </View>
               <AntDesign name="right" size={16} color="#2c1810" style={{ marginRight: 20 }} />
            </Pressable>
            
            <Pressable onPress={() => Linking.openURL('tel:+233552412180')} className='flex flex-row justify-center items-center w-full rouded-md gap-1 bg-primeg rounded-md py-1 '>
            <Text className='text-deep'>Contact us</Text>
            <MaterialIcons name="call" size={16} color="#2c1810" style={{ marginRight: 20 }} />
            </Pressable>
        </View>
        
        
      

      </View>
    </ScrollView >
  )
}

export default index