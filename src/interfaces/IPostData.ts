import {IAwardData} from './IAwardData';
import {ICommentData} from './ICommentData';
import {EVotes} from './EVotes';

export interface IPostData {
  id: string;
  avatarIcon: any;
  community: string;
  author: string;
  publishDate: number;
  upvotes: number;
  myVote: EVotes;
  extras?: string;
  comments?: Array<ICommentData>;
  awards?: Array<IAwardData>;
}
