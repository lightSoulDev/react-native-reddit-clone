import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSheet} from '../../../context/ActionSheetContext';
// @ts-ignore [EXPO]
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './styles';
import {PostContext, usePostContext} from '../context';
import {MockApi} from '../../../../mock/network/MockApi';
import {
  IActionInfo,
  ResponseResult,
} from '../../../network/core/Response.types';
import {EVotes} from '../../../interfaces/EVotes';

export interface PostCardFooterProps {}

const PostCardFooter = (props: PostCardFooterProps) => {
  const {toggleSheet} = useSheet();
  const {postData, setPostData} = usePostContext();

  const actionVote = async (up: boolean) => {
    let action: IActionInfo<number> =
      await MockApi.getInstance().postActionVote(postData.id, up);

    if (action.result == ResponseResult.SUCCESS) {
      // TODO: clean-code ?
      setPostData({
        ...postData,
        upvotes: action.value,
        myVote: up
          ? postData.myVote == EVotes.DOWN
            ? EVotes.NONE
            : EVotes.UP
          : postData.myVote == EVotes.UP
          ? EVotes.NONE
          : EVotes.DOWN,
      });
    }
  };

  return (
    <View style={styles(props).container}>
      <View style={styles(props).leftSection}>
        <View style={styles(props).sectionContent}>
          <TouchableOpacity
            onPress={() => actionVote(true)}
            disabled={postData.myVote == EVotes.UP}>
            <MaterialCommunityIcons
              name="arrow-up-bold"
              size={25}
              color={postData.myVote == EVotes.UP ? '#f64608' : '#2c2c2c'}
            />
          </TouchableOpacity>
          <Text>{postData.upvotes}</Text>
          <TouchableOpacity
            onPress={() => actionVote(false)}
            disabled={postData.myVote == EVotes.DOWN}>
            <MaterialCommunityIcons
              name="arrow-down-bold"
              size={25}
              color={postData.myVote == EVotes.DOWN ? '#f64608' : '#2c2c2c'}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles(props).footerSection}>
        <TouchableOpacity style={styles(props).sectionContent}>
          <MaterialCommunityIcons name="comment" size={22} color="#2c2c2c" />
          <Text> Comment</Text>
        </TouchableOpacity>
      </View>
      <View style={styles(props).rightSection}>
        <TouchableOpacity style={styles(props).sectionContent}>
          <MaterialCommunityIcons name="share" size={25} color="#2c2c2c" />
          <Text> Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PostCardFooter;
