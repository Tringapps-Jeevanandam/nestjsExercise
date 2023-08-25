/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreatePostInput } from './dto/create-post.input';
import { PostRepository } from './post.repository';

@Injectable()
export class PostService {
  constructor(private readonly postRepo: PostRepository) {}
  create(createPostInput: CreatePostInput) {
    return this.postRepo.createPost(createPostInput);
  }

  public async getAllPost(){
    return this.postRepo.showAllPost();
  }

  public async deletePostById(id:string):Promise<Boolean>{
    return this.postRepo.deletePostById(id);
  }
}
