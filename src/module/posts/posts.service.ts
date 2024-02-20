import { Repository } from 'typeorm';
import CreatePostDto from './dto/createPosts.dto';
import { UpdatePostDto } from './dto/updatePost.dto';
import Post from 'src/entity/post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export default class PostsService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}
  getAllPosts() {
    return this.postRepository.find();
  }

  async getPost(id: number) {
    const post = await this.postRepository.findOne({
      where: {
        id,
      },
    });
    if (post) {
      return post;
    }
    throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
  }

  async createPost(post: CreatePostDto) {
    const newPost = this.postRepository.create(post);
    await this.postRepository.save(newPost);
    return newPost;
  }

  async updatePost(id: number, post: UpdatePostDto) {
    await this.postRepository.update(id, post);
    const updatePost = await this.postRepository.findOne({
      where: { id },
    });
    if (updatePost) {
      return updatePost;
    }
    throw new HttpException('post not found', HttpStatus.NOT_FOUND);
  }

  deletePost(id: number) {
    return id;
  }
}
