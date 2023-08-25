import { Injectable } from '@nestjs/common/decorators';
import { BaseRepository } from 'src/database/base.respoitory';
import { DataSource } from 'typeorm';
import { CreatePostInput } from './dto/create-post.input';
import { Post } from './entities/post.entity';

@Injectable()
export class PostRepository extends BaseRepository<Post> {
  constructor(private readonly dataSource: DataSource) {
    super(Post, dataSource.createEntityManager());
  }

  async createPost(createPostInput: CreatePostInput) {
    return this.save({
      name: createPostInput.postName,
      userId: createPostInput.userId,
      order: createPostInput.order,
    });
  }

  public async showAllPost(){
    return this.find();
  }

  public async deletePostById(id:string){
    return (await this.softDelete({id})).affected>0;
  }
}
