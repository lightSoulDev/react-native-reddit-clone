import {
  useColorScheme,
  SafeAreaView,
  ScrollView,
  Alert,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import PostCard from '../../components/PostCard';
import {IPostData} from '../../interfaces/IPostData';
import {MockApi} from '../../../mock/network/MockApi';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './styles';

const HomeScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#2c2c2c' : '#fff',
  };

  const [postDataArray, setPostDataArray] = useState<IPostData[]>([]);

  const getPosts = async () => {
    const Api = MockApi.getInstance();
    let postData: IPostData[] = await Api.getPosts();

    if (!postData || postData.length == 0) {
      // TODO: do sth better
      Alert.alert('Oops!', 'Failed to fetch data from API.', [
        {
          text: 'Oh, sadge.',
          onPress: () => console.log('Failed to fetch data from API.'),
        },
      ]);
    } else {
      setPostDataArray(postData);
      // TODO: remove
      console.warn('Refreshed PostData', postData);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <TouchableOpacity onPress={getPosts} style={styles().refresh}>
        <Text>Refresh</Text>
      </TouchableOpacity>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{width: '100%', height: '100%'}}>
        {postDataArray.map((value: IPostData, index: number) => (
          <PostCard key={index} backgroundColor="#aaa" postData={value} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
