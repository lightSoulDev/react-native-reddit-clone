import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSheet} from '../../../context/ActionSheetContext';
// @ts-ignore [EXPO]
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {PostActionSheet} from '../../../mock/Data';
import {styles} from './styles';
const MockCommunityIcon = require('./../../../mock/assets/community_icon.png');

export interface PostCardHeaderProps {}

const PostCardHeader = (props: PostCardHeaderProps) => {
  const {toggleSheet} = useSheet();

  return (
    <View style={styles(props).container}>
      <TouchableOpacity>
        <Image style={styles(props).icon} source={MockCommunityIcon} />
      </TouchableOpacity>
      <View>
        <TouchableOpacity>
          <Text>r/react-native</Text>
        </TouchableOpacity>
        <View style={styles(props).info}>
          <TouchableOpacity>
            <Text>u/lightSoulDev</Text>
          </TouchableOpacity>
          <Text> - </Text>
          <Text>15h</Text>
          <Text> - </Text>
          <TouchableOpacity>
            <Text> i.reddit.io </Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={styles(props).options}
        onPress={() => {
          toggleSheet(PostActionSheet);
        }}>
        <MaterialCommunityIcons name="dots-horizontal" size={25} />
      </TouchableOpacity>
    </View>
  );
};

export default PostCardHeader;
