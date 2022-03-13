import {View, Text} from 'react-native';
import React, {useMemo, useState} from 'react';
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
  const [postData, setPostData] = useState(props.postData);

  const value = {postData, setPostData};

  return (
    <PostContext.Provider value={value}>
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
