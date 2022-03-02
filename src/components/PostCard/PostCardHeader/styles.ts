import {StyleSheet} from 'react-native';
import {PostCardHeaderProps} from './PostCardHeader';

export const styles = (props: PostCardHeaderProps) =>
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
