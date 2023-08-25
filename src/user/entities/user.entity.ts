import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Post } from 'src/post/entities/post.entity';
import { Column, CreateDateColumn,UpdateDateColumn,DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'users' })
export class User {
  @Field()
  @PrimaryGeneratedColumn('uuid', { name: 'user_id' })
  id: string;

  @Field()
  @Column({ name: 'user_name' })
  fullname: string;

  @Field(() => [Post], { nullable: true })
  @OneToMany(() => Post, (post) => post.user)
  post: Post[];

  @Field()
  @Column({name:'phoneNumber'})
  phoneNumber: string;

  @Field(()=>Date)
  @CreateDateColumn()
  createdAt:Date;

  @Field(()=>Date)
  @UpdateDateColumn()
  updatedAt: Date;

  @Field(()=>Date)
  @DeleteDateColumn()
  deletedAt: Date;
}
