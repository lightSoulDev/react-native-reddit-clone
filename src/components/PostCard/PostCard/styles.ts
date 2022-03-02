import {StyleSheet} from 'react-native';
import {PostCardProps} from './PostCard';

export const styles = (props: PostCardProps) =>
  StyleSheet.create({
    container: {
      width: '100%',
      padding: 12,
      marginVertical: 5,
      backgroundColor: props.backgroundColor,
    },
  });
