import {MockApi} from '../mock/network/MockApi';
import {allNews, allPosts} from '../mock/PostDataLists';

const mockApi = MockApi.getInstance();

test('Post request simulation', async () => {
  expect(await mockApi.getPosts()).toEqual(allPosts);
});

test('News request simulation', async () => {
  expect(await mockApi.getNews()).toEqual(allNews);
});
