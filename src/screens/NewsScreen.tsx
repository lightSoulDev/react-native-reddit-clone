import {useColorScheme, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import PostCard from '../components/PostCard';
import {newsScreenPosts} from '../../mock/PostDataLists';
import {IPostData} from '../interfaces/IPostData';

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
        {newsScreenPosts.map((value: IPostData, index: number) => (
          <PostCard key={index} backgroundColor="#aaa" postData={value} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewsScreen;
