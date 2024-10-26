export interface INewPostForm {
  title: string;
  description: string;
}

export interface IPost {
  id: string;
  title: string;
  description: string;
}

export interface IPostAPI {
  [id: string]: IPost;
}