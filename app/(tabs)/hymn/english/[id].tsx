// app/hymn/[id].js
import { View, Text } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { data } from "../../English.js";

export default function HymnDetail() {
  const { id } = useLocalSearchParams();
  const hymn = data.find((item:any) => item.id === id);

  if (!hymn) {
    return (
      <View className="flex-1 justify-center items-center bg-bgcolor">
        <Text className="text-red-500 text-lg">Hymn not found</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 items-center  bg-bgcolor" key={hymn.id}>
      <Text className="text-2xl font-bold mt-16">{hymn.title}</Text>
      <View className='flex flex-col items-center'>
      { hymn && hymn.hymncontents.map( hymn =>( <>
        <Text className="mt-2 text-lg font-bold">{hymn.stanza}</Text>
        <Text className="mt-2 text-lg text-center">{hymn.lines}</Text>
        </>
      ))
      }
      </View>
    </View>
  );
}
