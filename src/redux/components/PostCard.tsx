import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './PostCardStyles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSheet} from '../../context/ActionSheetContext';
const MockCommunityIcon = require('./../../assets/mock/community_icon.png');

export interface PostCardProps {
  backgroundColor: string;
}

const PostCardHeader = (props: any) => {
  const {toggleSheet} = useSheet();

  return (
    <View style={hstyles(props).container}>
      <TouchableOpacity>
        <Image style={hstyles(props).icon} source={MockCommunityIcon} />
      </TouchableOpacity>
      <View>
        <TouchableOpacity>
          <Text>r/react-native</Text>
        </TouchableOpacity>
        <View style={hstyles(props).container}>
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
        style={hstyles(props).options}
        onPress={() => {
          toggleSheet([
            {
              label: 'Some Label',
              onPress: () => {
                console.log('Some Label');
              },
              materialIcon: '',
            },
            {
              label: 'Some Label 1',
              onPress: () => {
                console.log('Some Label');
              },
              materialIcon: '',
            },
            {
              label: 'Some Label 2',
              onPress: () => {
                console.log('Some Label');
              },
              materialIcon: '',
            },
            {
              label: 'Some Label 3',
              onPress: () => {
                console.log('Some Label');
              },
              materialIcon: '',
            },
          ]);
        }}>
        <MaterialCommunityIcons name="dots-horizontal" size={25} />
      </TouchableOpacity>
    </View>
  );
};

const hstyles = (props: any) =>
  StyleSheet.create({
    options: {
      position: 'absolute',
      right: 10,
      alignSelf: 'center',
    },
    headerLinks: {
      flexDirection: 'column',
    },
    container: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    icon: {
      width: 40,
      height: 40,
      marginRight: 10,
      borderRadius: 40,
    },
  });

const PostCard = (props: PostCardProps) => {
  const {backgroundColor} = props;

  return (
    <View style={styles(props).container}>
      <PostCardHeader />
    </View>
  );
};

export default PostCard;
