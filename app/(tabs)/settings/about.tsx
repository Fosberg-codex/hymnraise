import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Image } from "expo-image";

const about = () => {
  return (
    <ScrollView className="flex-1 bg-bgcolor">
      <View className="p-6 ">
        <Text className="text-3xl font-bold text-primeg mb-6 mt-8">COC HymnRaise</Text>
        
        <Text className=" text-primeg mb-4 border-deep/20 p-4 border rounded-md text-justify ">
          FARNAGER is a comprehensive farm management software designed to revolutionize the way farmers operate their businesses. Our platform offers a suite of tools to simplify financial management, monitor crop growth and animal health, track progress, and ensure the security of your farm.
        </Text>

        <Text className='text-xl mb-2 font-semibold text-center'>Key persons behind HymnRaise</Text>
        <View className='flex flex-row justify-around items-center gap-2 mb-2'>
          <View className='flex flex-col justify-center items-center  gap-2'>
          <Image
              style={{ height: 40, width: 50, borderRadius: 5 }}
              source={require("../../../assets/images/man.jpeg")}
              // placeholder={{ blurhash }}
              contentFit="cover"
              transition={1000}
            />
            <Text className='self-center'>Fosberg Addai</Text>
          </View>
          <View className='flex flex-col justify-center items-center  gap-2'>
          <Image
              style={{ height: 40, width: 50, borderRadius: 5 }}
              source={require("../../../assets/images/man.jpeg")}
              // placeholder={{ blurhash }}
              contentFit="cover"
              transition={1000}
            />
            <Text>Dr.Lynn Tawiah</Text>
          </View>

        </View>
        
        <View className=" flex flex-col items-center justify-center gap-1 mt-2 p-4 rounded-md border-deep/20 border ">
        <Text className="text-lg font-semibold text-primeg ">Key app features</Text>
          <Text className="text-primeg self-start">Enhanced security and privacy</Text>
          <Text className="text-primeg self-start">Enhanced security and privacy</Text>
          <Text className="text-primeg self-start">Enhanced security and privacy</Text>
          <Text className="text-primeg self-start">Enhanced security and privacy</Text>
        </View>
        
         <Text className="text-primeg mt-2">
          Join the Church Of Christ and use Hymn Raise.
        </Text>
      </View>
    </ScrollView>
  );
};

export default about;