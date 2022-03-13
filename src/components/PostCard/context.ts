import React, {useContext} from 'react';
import {IPostData} from '../../interfaces/IPostData';

interface ContextState {
  postData: IPostData;
  setPostData: React.Dispatch<React.SetStateAction<IPostData>> | (() => void);
}

export const PostContext = React.createContext<ContextState>({
  postData: {} as IPostData,
  setPostData: () => {},
});

export const usePostContext = () => useContext(PostContext);
