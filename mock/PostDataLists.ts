import {EVotes} from '../src/interfaces/EVotes';
import {IPostData} from '../src/interfaces/IPostData';

export const allPosts: Array<IPostData> = [
  {
    id: 'p_0',
    avatarIcon: null,
    community: 'react-native',
    author: 'lightSoulDev',
    extras: 'i.reddit.io',
    publishDate: 1647146918 * 1000,
    upvotes: 100,
    myVote: EVotes.NONE,
  },
];

export const allNews: Array<IPostData> = [
  {
    id: 'n_1',
    avatarIcon: null,
    community: 'NewYorkTimes',
    author: 'whisper',
    publishDate: 1647060518 * 1000,
    upvotes: 40,
    myVote: EVotes.NONE,
  },
];
