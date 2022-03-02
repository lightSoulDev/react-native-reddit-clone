import {
  View,
  Text,
  useColorScheme,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React from 'react';
import PostCard from '../components/PostCard';

const NewsScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#2c2c2c' : '#fff',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{width: '100%', height: '100%'}}>
        <PostCard backgroundColor="#aaa" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewsScreen;
