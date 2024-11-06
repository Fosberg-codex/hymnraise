import React from "react";
import { View, Text, ScrollView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Image } from "expo-image";

const about = () => {
  return (
    <ScrollView className="flex-1 bg-bgcolor">
      <View className="p-6 ">
        <Text className="text-3xl font-bold text-primeg mb-6 mt-8">
          COC HymnRaise
        </Text>

        <Text className=" text-primeg mb-4 border-deep/20 p-4 border rounded-md text-justify ">
          HymnRaise is a mobile hymn book built for the Churches of Christ. The
          vision is to connect people with church announcements, archives,
          updates, and materials that help with spiritual growth. It's not just
          a hymn book but also a platform to help raise awareness about brethren
          or churches who may be in need. The vision is to be a robust platform
          that encompasses everything which helps brethren's spiritual growth.
          Created by Fosberg Addai, a software engineer. Dr. Lynn has been motivational in 
          making this app.
        </Text>

        <Text className="text-xl mb-2 font-semibold text-center">
          Key persons behind HymnRaise
        </Text>
        <View className="flex flex-row justify-around items-center gap-2 mb-2">
          <View className="flex flex-col justify-center items-center  gap-2">
            <Image
              style={{ height: 40, width: 50, borderRadius: 5 }}
              source={require("../../../assets/images/man.jpeg")}
              // placeholder={{ blurhash }}
              contentFit="cover"
              transition={1000}
            />
            <Text className="self-center">Fosberg Addai</Text>
          </View>
          <View className="flex flex-col justify-center items-center  gap-2">
            <Image
              style={{ height: 40, width: 50, borderRadius: 5 }}
              source={require("../../../assets/images/tawiah.jpg")}
              // placeholder={{ blurhash }}
              contentFit="cover"
              transition={1000}
            />
            <Text>Dr.Lynn Tawiah</Text>
          </View>
        </View>

        <View className=" flex flex-col items-center justify-center gap-1 mt-2 p-4 rounded-md border-deep/20 border ">
          <Text className="text-lg font-semibold text-primeg ">
            Key app features
          </Text>
          <Text className="text-primeg self-start">
          Explore Hymns
          </Text>
          <Text className="text-primeg self-start">
            Add Hymns for favorites
          </Text>
          <Text className="text-primeg self-start">
          ⁠view up coming church events
          </Text>
          <Text className="text-primeg self-start">
          ⁠  Explore church podcasts, upcoming events, resources and more.
          </Text>
        </View>

        <Text className="text-primeg mt-2">
          Join the Church Of Christ and use Hymn Raise.
        </Text>
      </View>
    </ScrollView>
  );
};

export default about;
