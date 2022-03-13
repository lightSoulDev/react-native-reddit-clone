import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSheet} from '../../../context/ActionSheetContext';
// @ts-ignore [EXPO]
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {PostActionSheet} from '../../../../mock/PostActionSheet';
import {styles} from './styles';
import {usePostContext} from '../context';
import {getTimePassed} from '../../../utility/DataFormat';
import {postHeaderSeparator} from '../../../utility/Constants';
const MockCommunityIcon = require('./../../../../mock/assets/community_icon.png');

export interface PostCardHeaderProps {}

const PostCardHeader = (props: PostCardHeaderProps) => {
  const {toggleSheet} = useSheet();
  const {community, author, extras, publishDate} = usePostContext().postData;

  return (
    <View style={styles(props).container}>
      <TouchableOpacity>
        <Image style={styles(props).icon} source={MockCommunityIcon} />
      </TouchableOpacity>
      <View>
        <TouchableOpacity>
          <Text>{`r/${community}`}</Text>
        </TouchableOpacity>
        <View style={styles(props).info}>
          <TouchableOpacity>
            <Text>{`u/${author}`}</Text>
          </TouchableOpacity>
          <Text>{postHeaderSeparator}</Text>
          <Text>{getTimePassed(publishDate)}</Text>
          {extras ? (
            <>
              <Text>{postHeaderSeparator}</Text>
              <TouchableOpacity>
                <Text>{` ${extras} `}</Text>
              </TouchableOpacity>
            </>
          ) : null}
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
