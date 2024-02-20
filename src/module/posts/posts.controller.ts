import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import PostsService from './posts.service';
import CreatePostDto from './dto/createPosts.dto';
import { UpdatePostDto } from './dto/updatePost.dto';
import JwtAuthenticationGuard from '../authentication/jwt-authentication.guard';

@Controller('posts')
export default class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  getAllPost() {
    return this.postsService.getAllPosts();
  }

  @Get(':id')
  getPost(@Param('id') id: string) {
    return this.postsService.getPost(Number(id));
  }

  @Post()
  @UseGuards(JwtAuthenticationGuard)
  createPost(@Body() post: CreatePostDto) {
    return this.postsService.createPost(post);
  }

  @Put(':id')
  updatePost(@Param('id') id: string, @Body() post: UpdatePostDto) {
    return this.postsService.updatePost(Number(id), post);
  }

  @Delete(':id')
  deletePost(@Param('id') id: string) {
    return this.postsService.deletePost(Number(id));
  }
}
