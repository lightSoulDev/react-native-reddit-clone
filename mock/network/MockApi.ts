import {AxiosResponse} from 'axios';
import {IPostData} from '../../src/interfaces/IPostData';
import HttpClient from '../../src/network/core/HttpClient';
import {
  IActionInfo,
  ResponseResult,
} from '../../src/network/core/Response.types';
import {allPosts, allNews} from '../PostDataLists';

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

  private representError = async <T = never>(
    mock: T,
  ): Promise<AxiosResponse<T, any>> => {
    return new Promise((_, reject) => {
      setTimeout(() => {
        reject();
      }, ping);
    });
  };

  private allPosts = allPosts;
  private allNews = allNews;

  public getPosts = () => this.representResponse<IPostData[]>(this.allPosts);
  public getNews = () => this.representResponse<IPostData[]>(this.allNews);

  public postActionVote = (postID: string, up: boolean) => {
    let post = [...allNews, ...allPosts].find(post => post.id == postID);

    const actionResponse: IActionInfo<number> = {
      id: postID,
      result: ResponseResult.PENDING,
      value: 0,
    };

    if (!post) return this.representError<IActionInfo<number>>(actionResponse);

    post.upvotes += up ? 1 : -1;
    actionResponse.value = post.upvotes;
    actionResponse.result = ResponseResult.SUCCESS;

    return this.representResponse<IActionInfo<number>>(actionResponse);
  };
}
