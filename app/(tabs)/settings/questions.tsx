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
          <Text className="text-primeg">There is a need for a better church centered hymn which could help with so many things other than providing hymn</Text>
          <Text className="text-lg font-semibold text-primeg">Can I advertise on HymnRaise?</Text>
          <Text className="text-primeg">No please, not now</Text>
          <Text className="text-lg font-semibold text-primeg">How can this app support our church</Text>
          <Text className="text-primeg">Reach out the app management about anything you want us to do which aligns with objectives, from anouncements to resource sharing.</Text>
          <Text className="text-lg font-semibold text-primeg">What is the difference between HymnRaise and other church apps?</Text>
          <Text className="text-primeg">Not a big difference maybe UI is quiet better but HymnRaise is not only about Hymns.</Text>
        </View>
        
        
        
        
        
        <Text className="text-primeg mt-4">
          Join the Church Of Christ and use Hymn Raise.
        </Text>
      </View>
    </ScrollView>
  );
};

export default about;