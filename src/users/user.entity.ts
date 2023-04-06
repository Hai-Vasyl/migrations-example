import { CommentRating } from 'src/comments/comment-rating.entity';
import { Comment } from 'src/comments/comment.entity';
import { Base } from 'src/common/entities/base.entity';
import { PostRating } from 'src/posts/post-rating.entity';
import { Post } from 'src/posts/post.entity';
import { Tag } from 'src/tags/tag.entity';
import { GenderEnum } from 'src/users/gender.enum';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User extends Base {
  @PrimaryGeneratedColumn('increment', { name: 'user_id' })
  userId: string;

  @Column({ type: 'varchar', nullable: false, length: 30, name: 'first_name' })
  firstName: string;

  @Column({ type: 'varchar', nullable: false, length: 30, name: 'last_name' })
  lastName: string;

  @Column({ type: 'varchar', nullable: false })
  email: string;

  @Column({ type: 'varchar', nullable: false })
  password: string;

  @Column({ type: 'enum', enum: GenderEnum, nullable: false })
  gender: GenderEnum;

  @Column({ type: Date })
  birth: Date | null;

  @Column({ type: 'varchar', nullable: false })
  color: string;

  // relations

  @OneToMany(() => Post, (post) => post.creator)
  posts: Post[];

  @OneToMany(() => Comment, (comment) => comment.creator)
  comments: Comment[];

  @OneToMany(() => Tag, (tag) => tag.creator)
  tags: Tag[];

  @OneToMany(() => PostRating, (postRating) => postRating.creator)
  postRatings: PostRating[];

  @OneToMany(() => CommentRating, (commentRating) => commentRating.creator)
  commentRatings: CommentRating[];
}
