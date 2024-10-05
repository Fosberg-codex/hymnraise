import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Image } from "expo-image";

const about = () => {
  return (
    <ScrollView className="flex-1 bg-bgcolor">
      <View className="p-6 ">
        <Text className="text-3xl font-bold text-primeg mb-6 mt-8">Frequently asked questions</Text>
        <View className="mb-4 flex flex-col gap-1 mt-2">
        <Text className="text-lg font-semibold text-primeg">Why HymnRaise</Text>
          <Text className="text-primeg">Enhanced security and privacy</Text>
          <Text className="text-lg font-semibold text-primeg">Can I advertise on HymnRaise?</Text>
          <Text className="text-primeg">Enhanced security and privacy</Text>
          <Text className="text-lg font-semibold text-primeg">How can this app support our church</Text>
          <Text className="text-primeg">Enhanced security and privacy</Text>
          <Text className="text-lg font-semibold text-primeg">What is the difference between HymnRaise and other church apps?</Text>
          <Text className="text-primeg">Enhanced security and privacy</Text>
        </View>
        
        
        
        
        
        <Text className="text-primeg mt-4">
          Join the Church Of Christ and use Hymn Raise.
        </Text>
      </View>
    </ScrollView>
  );
};

export default about;