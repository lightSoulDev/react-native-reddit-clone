import {NativeBaseProvider, View} from 'native-base';
import React, {useState} from 'react';
import {create, act} from 'react-test-renderer';
import {allPosts} from '../mock/PostDataLists';
import PostCard from '../src/components/PostCard';
import {IPostData} from '../src/interfaces/IPostData';

const Container = () => {
  const [postDataArray, setPostDataArray] = useState<IPostData[]>([]);

  return <NativeBaseProvider>{post}</NativeBaseProvider>;
};

const post = create(<PostCard backgroundColor="#aaa" postData={allPosts[0]} />);
const tree = create(<Container />);

test('snapshot', () => {
  expect(post).toMatchSnapshot();
});

// TODO: Upvotes test
