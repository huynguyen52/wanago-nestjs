import { Module } from '@nestjs/common';
import { PostsModule } from './module/posts/posts.module';

@Module({
  imports: [PostsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
