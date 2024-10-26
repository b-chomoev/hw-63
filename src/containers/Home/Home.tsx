import { useCallback, useEffect, useState } from 'react';
import axiosAPI from '../../axiosAPI';
import { IPost, IPostAPI } from '../../types';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Home = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  const fetchData = useCallback(async () => {
    const response: {data: IPostAPI} = await axiosAPI<IPostAPI>('blog.json');

    if (response.data) {
      const postsFromAPI: IPost[] = Object.keys(response.data).map(key => {
        return {
          ...response.data[key],
          id: key,
        };
      });

      setPosts(postsFromAPI);
    }
    console.log(response.data);
  }, []);

  useEffect(() => {
    void fetchData();
  }, [fetchData]);

  return (
    <div>
      {posts.length === 0 ? <p>No posts yet</p> :
        <>
          {posts.map((post) => (
            <Card sx={{ minWidth: 275, mt: 2 }}>
              <CardContent>
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                  {post.title}
                </Typography>
                <Typography variant="body2">
                  {post.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" component={NavLink} to='/'>Edit</Button>
              </CardActions>
            </Card>
          ))}
        </>
      }
    </div>
  );
};

export default Home;