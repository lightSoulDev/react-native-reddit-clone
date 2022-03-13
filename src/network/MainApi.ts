import {IPostData} from '../interfaces/IPostData';
import HttpClient from './core/HttpClient';

export class MainApi extends HttpClient {
  private static classInstance?: MainApi;

  private constructor() {
    super({
      baseURL: 'http://127.0.0.1:9019',
      headers: {'Content-type': 'application/json; charset=UTF-8'},
    });
  }

  public static getInstance() {
    if (!this.classInstance) this.classInstance = new MainApi();
    return this.classInstance;
  }

  public getPostInfo = () => this.get<Array<IPostData>>('/posts');
}
