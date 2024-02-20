import CreatePostDto from './dto/createPosts.dto';
import { UpdatePostDto } from './dto/updatePost.dto';

export default class PostsService {
  getAllPosts() {
    return [1];
  }

  getPost(id: number) {
    return id;
  }

  createPost(post: CreatePostDto) {
    return post;
  }

  updatePost(id: number, post: UpdatePostDto) {
    return post;
  }

  deletePost(id: number) {
    return id;
  }
}
