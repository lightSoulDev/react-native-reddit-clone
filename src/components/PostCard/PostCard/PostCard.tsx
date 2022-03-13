import {View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import PostCardHeader from '../PostCardHeader/PostCardHeader';
import PostCardFooter from '../PostCardFooter/PostCardFooter';
import {IPostData} from '../../../interfaces/IPostData';
import {PostContext} from '../context';

export interface PostCardProps {
  backgroundColor: string;
  postData: IPostData;
}

const PostCard = (props: PostCardProps) => {
  return (
    <PostContext.Provider value={props.postData}>
      <View style={styles(props).container}>
        <PostCardHeader />
        {/* Awards */}
        {/* Tags */}
        <View style={{height: 300, backgroundColor: '#ccc'}}></View>
        <PostCardFooter />
      </View>
    </PostContext.Provider>
  );
};

export default PostCard;
