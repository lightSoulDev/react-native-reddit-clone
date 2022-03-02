import {StyleSheet} from 'react-native';
import {PostCardFooterProps} from './PostCardFooter';

export const styles = (props: PostCardFooterProps) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
    },
    leftSection: {
      position: 'absolute',
      left: 5,
      alignSelf: 'center',
    },
    rightSection: {
      position: 'absolute',
      right: 10,
      alignSelf: 'center',
    },
    footerSection: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    sectionContent: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  });
