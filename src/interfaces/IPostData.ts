import {IAwardData} from './IAwardData';
import {ICommentData} from './ICommentData';

export interface IPostData {
  avatarIcon: any;
  community: string;
  author: string;
  publishDate: number;
  upvotes: number;
  extras?: string;
  comments?: Array<ICommentData>;
  awards?: Array<IAwardData>;
}
