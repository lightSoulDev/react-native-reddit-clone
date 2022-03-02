import {View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import PostCardHeader from '../PostCardHeader/PostCardHeader';

export interface PostCardProps {
  backgroundColor: string;
}

const PostCard = (props: PostCardProps) => {
  return (
    <View style={styles(props).container}>
      <PostCardHeader />
    </View>
  );
};

export default PostCard;
