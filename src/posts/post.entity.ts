import { Comment } from 'src/comments/comment.entity';
import { AccessTypeEnum } from 'src/common/access-type.enum';
import { Base } from 'src/common/entities/base.entity';
import { PostRating } from 'src/posts/post-rating.entity';
import { Tag } from 'src/tags/tag.entity';
import { User } from 'src/users/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('posts')
export class Post extends Base {
  @PrimaryGeneratedColumn('increment', { name: 'post_id' })
  postId: string;

  @Column({ type: 'varchar', length: 30, nullable: false })
  headline: string;

  @Column({ type: 'varchar', length: 450, nullable: false })
  body: string;

  @Column({ type: 'int', default: 0, name: 'ratings_number' })
  ratingsNumber: number;

  @Column({ type: 'int', default: 0, name: 'comments_number' })
  commentsNumber: number;

  @Column({
    type: 'enum',
    enum: AccessTypeEnum,
    default: AccessTypeEnum.PUBLIC,
    name: 'access_type',
  })
  accessType: AccessTypeEnum;

  @ManyToOne(() => User, (user) => user.posts)
  @JoinColumn({ name: 'creator_id' })
  creator: User;

  // relations

  @OneToMany(() => Comment, (comment) => comment.post)
  comments: Comment[];

  @ManyToMany(() => Tag, (tag) => tag.posts)
  tags: Tag[];

  @ManyToMany(() => PostRating, (postRating) => postRating.post)
  postRatings: PostRating[];
}
