import {AxiosResponse} from 'axios';
import {IPostData} from '../../src/interfaces/IPostData';
import HttpClient from '../../src/network/core/HttpClient';
import {
  IActionInfo,
  ResponseResult,
} from '../../src/network/core/Response.types';
import {homeScreenPosts} from '../PostDataLists';

const ping = 0;

export class MockApi extends HttpClient {
  private static classInstance?: MockApi;

  private constructor() {
    super({
      baseURL: 'http://127.0.0.1:9019',
      headers: {'Content-type': 'application/json; charset=UTF-8'},
    });
  }

  public static getInstance() {
    if (!this.classInstance) this.classInstance = new MockApi();
    return this.classInstance;
  }

  private representResponse = async <T = never>(
    mock: T,
  ): Promise<AxiosResponse<T, any>> => {
    return new Promise((resolve, _) => {
      setTimeout(() => {
        resolve(
          new Promise<T>((resolve, _) => {
            resolve(mock);
          }),
        );
      }, ping);
    });
  };

  private homeScreenPosts = homeScreenPosts;

  public getPostInfo = () =>
    this.representResponse<IPostData[]>(this.homeScreenPosts);

  public postActionVote = (postID: string, up: boolean) => {
    let post = this.homeScreenPosts.filter(post => (post.id = postID))[0];
    post.upvotes += up ? 1 : -1;
    const actionResponse: IActionInfo<number> = {
      id: postID,
      result: ResponseResult.SUCCESS,
      value: post.upvotes,
    };
    return this.representResponse<IActionInfo<number>>(actionResponse);
  };
}
