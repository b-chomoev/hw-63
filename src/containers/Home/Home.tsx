import { useCallback, useEffect, useState } from 'react';
import axiosAPI from '../../axiosAPI';
import { IPost, IPostAPI } from '../../types';

const Home = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  const fetchData = useCallback(async () => {
    const response: {data: IPostAPI} = await axiosAPI<IPostAPI>('blog.json');
    console.log(response.data);
  }, []);

  useEffect(() => {
    void fetchData();
  }, [fetchData]);

  return (
    <div>
      Home
    </div>
  );
};

export default Home;