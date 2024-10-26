import React, { useState } from 'react';
import { TextField, Typography, TextareaAutosize, Button } from '@mui/material';
import { INewPostForm } from '../../types';
import Grid from '@mui/material/Grid2';
import axiosAPI from '../../axiosAPI';

const initialState = {
  title: '',
  description: '',
};

const AddForm = () => {
  const [newPost, setNewPost] = useState<INewPostForm>(initialState);

  const onSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();

    await axiosAPI.post('blog.json', {...newPost});

    setNewPost({...initialState});
  };

  const onChangeField = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setNewPost(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={onSubmitForm}>
      <Typography variant="h4" sx={{ flexGrow: 1, textAlign: 'center'}}>Add New Post</Typography>
      <Grid container spacing={2} sx={{mx: 'auto', width: '50%', mt: 4}}>
        <Grid size={12}>
          <TextField
            sx={{ width: '100%' }}
            id="outlined-basic"
            label="Title"
            name='title'
            variant="outlined"
            value={newPost.title}
            onChange={onChangeField}
          />
        </Grid>
        <Grid size={12}>
          <TextareaAutosize
            style={{ width: '100%', padding: '12px', borderRadius: '4px', borderColor: '#ccc' }}
            aria-label="empty textarea"
            placeholder="Description"
            name='description'
            value={newPost.description}
            onChange={onChangeField}
          />
        </Grid>
        <Grid size={12}>
          <Button type='submit' variant="contained">Add</Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddForm;