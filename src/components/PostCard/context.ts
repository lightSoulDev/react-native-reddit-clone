import React, {useContext} from 'react';
import {IPostData} from '../../interfaces/IPostData';

export const PostContext = React.createContext<IPostData>({} as IPostData);
export const usePostContext = () => useContext(PostContext);
