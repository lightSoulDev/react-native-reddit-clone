import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSheet} from '../../../context/ActionSheetContext';
// @ts-ignore [EXPO]
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './styles';

export interface PostCardFooterProps {}

const PostCardFooter = (props: PostCardFooterProps) => {
  const {toggleSheet} = useSheet();

  return (
    <View style={styles(props).container}>
      <View style={styles(props).leftSection}>
        <View style={styles(props).sectionContent}>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="arrow-up-bold"
              size={25}
              color="#2c2c2c"
            />
          </TouchableOpacity>
          <Text>102</Text>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="arrow-down-bold"
              size={25}
              color="#2c2c2c"
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
