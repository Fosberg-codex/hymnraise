// app/hymn/[id].js
import { View, Text } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { data } from "../Twi.js";
import { ScrollView } from 'react-native'
export default function HymnDetail() {
  const { id } = useLocalSearchParams();
  const hymn = data.find((item) => item.id === id);

  if (!hymn) {
    return (
      <View className="flex-1 justify-center items-center bg-bgcolor">
        <Text className="text-red-500 text-lg">Hymn not found</Text>
      </View>
    );
  }

  return (
    <ScrollView className="flex-1  bg-bgcolor" key={hymn.id}>
      <Text className="text-2xl font-bold mt-16 self-center">{hymn.title}</Text>
      <View className='flex flex-col items-center'>
      { hymn && hymn.hymncontents.map( hymn =>( <>
        <Text className="mt-2 text-lg font-bold">{hymn.stanza}</Text>
        <Text className="mt-2 text-lg text-center">{hymn.lines}</Text>
        </>
      ))
      }
      </View>
    </ScrollView>
  );
}
