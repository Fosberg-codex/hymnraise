import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const language = () => {
  return (
    <ScrollView className="flex-1 bg-bgcolor">
      <View className="p-6">
        <View className="flex-row items-center justify-center mb-6 mt-8">
          <FontAwesome name="language" size={24} color="#2c1810" />
          <Text className="text-2xl font-bold text-primeg ml-2">Languages</Text>
        </View>

        <View className="border border-deep/20 rounded-lg shadow-sm p-4 mb-4">
          <Text className="text-lg font-semibold text-primeg mb-2">
            The languages we support
          </Text>
          <Text className="text-primeg/90 mb-4">
            COC HymnRaise support the following language versions. 
          </Text>
          <Text className='text-deep font-semibold'>Twi, English and Ga</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default language;