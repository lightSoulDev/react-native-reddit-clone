import {View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import PostCardHeader from '../PostCardHeader/PostCardHeader';
import PostCardFooter from '../PostCardFooter/PostCardFooter';

export interface PostCardProps {
  backgroundColor: string;
}

const PostCard = (props: PostCardProps) => {
  return (
    <View style={styles(props).container}>
      <PostCardHeader />
      {/* Awards */}
      {/* Tags */}
      <View style={{height: 300, backgroundColor: '#ccc'}}></View>
      <PostCardFooter />
    </View>
  );
};

export default PostCard;
