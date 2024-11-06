import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';

const language = () => {
  return (
    <ScrollView className="flex-1 bg-bgcolor">
      <View className="p-6">
        <View className="flex-row items-center justify-center mb-6 mt-8">
          <FontAwesome5 name="donate" size={24} color="#2c1810" />
          <Text className="text-2xl font-bold text-primeg ml-2">Donations</Text>
        </View>

        <View className="border border-deep/20 rounded-lg shadow-sm p-4 mb-4">
          <Text className="text-lg font-semibold text-primeg mb-2">
            Donate to the HymnRaise Project. We need funds to keep the project running on ios (costs $1,000 a year).
          </Text>
          <View className='flex flex-col gap-1 justify-center mb-4' >
          <Text className="text-primeg/90">MTN MoMO: 0552412180</Text>
          <Text className="text-primeg/90">Tigo Cash: 0552412180</Text>
          </View>
          <Text className='text-deep font-semibold'>God bless you for your support</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default language;