import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const PrivacyPolicyScreen = () => {
  return (
    <ScrollView className="flex-1 bg-bgcolor">
      <View className="p-6">
        <Text className="text-3xl font-bold text-primeg mb-6 mt-8">Privacy Policy</Text>

        <View className="border border-deep/20 rounded-lg shadow-sm p-4 mb-6">
          <Text className="text-base text-primeg/90">
            COC HymnRaise is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and disclose your personal information.
          </Text>
        </View>

        <View className="border border-deep/20 rounded-lg shadow-sm p-4 mb-4">
          <View className="flex-row items-center mb-2">
            <FontAwesome name="database" size={24} color="#2c1810" style={{ marginRight: 8 }} />
            <Text className="text-xl font-semibold text-primeg">Information Collection</Text>
          </View>
          <Text className="text-primeg/90">
            When you use HymnRaise, we may collect information such as your name, contact details, and usage data, including hymns searched, favorites, and downloads.
          </Text>
        </View>

        <View className="border border-deep/20 rounded-lg shadow-sm p-4 mb-4">
          <View className="flex-row items-center mb-2">
            <FontAwesome name="lock" size={24} color="#2c1810" style={{ marginRight: 8 }} />
            <Text className="text-xl font-semibold text-primeg">Information Use</Text>
          </View>
          <Text className="text-primeg/90">
            We use your information to provide HymnRaise services, improve our app, and communicate with you about new features, updates, or events.
          </Text>
        </View>

        <View className="border border-deep/20 rounded-lg shadow-sm p-4 mb-4">
          <View className="flex-row items-center mb-2">
            <FontAwesome name="share-alt" size={24} color="#2c1810" style={{ marginRight: 8 }} />
            <Text className="text-xl font-semibold text-primeg">Information Sharing</Text>
          </View>
          <Text className="text-primeg/90">
            We may share your information with third-party service providers who assist us in operating HymnRaise. We will not sell or rent your personal information to third parties for marketing purposes.
          </Text>
        </View>

        <View className="border border-deep/20 rounded-lg shadow-sm p-4 mb-4">
          <View className="flex-row items-center mb-2">
            <FontAwesome name="shield" size={24} color="#2c1810" style={{ marginRight: 8 }} />
            <Text className="text-xl font-semibold text-primeg">Data Security</Text>
          </View>
          <Text className="text-primeg/90">
            We implement security measures to protect your information from unauthorized access, disclosure, alteration, or destruction.
          </Text>
        </View>

        <View className="border border-deep/20 rounded-lg shadow-sm p-4 mb-4">
          <View className="flex-row items-center mb-2">
            <FontAwesome name="user-circle" size={24} color="#2c1810" style={{ marginRight: 8 }} />
            <Text className="text-xl font-semibold text-primeg">Your Rights</Text>
          </View>
          <Text className="text-primeg/90">
            You have the right to access, correct, or delete your personal information. You may also object to the processing of your data or request data portability.
          </Text>
        </View>

        <View className="border border-deep/20 rounded-lg shadow-sm p-4 mt-6 mb-24">
          <Text className="text-lg text-primeg/90">
            For more information or to exercise your rights, please contact us at support@hymnraise.com.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default PrivacyPolicyScreen;