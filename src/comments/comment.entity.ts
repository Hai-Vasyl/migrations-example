import { CommentRating } from 'src/comments/comment-rating.entity';
import { Base } from 'src/common/entities/base.entity';
import { Post } from 'src/posts/post.entity';
import { User } from 'src/users/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('comments')
export class Comment extends Base {
  @PrimaryGeneratedColumn('increment', { name: 'comment_id' })
  commentId: string;

  @Column({ type: 'varchar', length: 150, nullable: false })
  body: string;

  @Column({ type: 'int', default: 0, name: 'ratings_number' })
  ratingsNumber: number;

  @Column({ type: 'int', default: 0, name: 'comments_number' })
  commentsNumber: number;

  @Column({ type: 'boolean', default: false, name: 'is_attached' })
  isAttached: boolean;

  @ManyToOne(() => User, (user) => user.comments)
  @JoinColumn({ name: 'creator_id' })
  creator: User;

  @ManyToOne(() => Post, (post) => post.comments)
  @JoinColumn({ name: 'post_id' })
  post: Post;

  @ManyToOne(() => Comment, (comment) => comment.childComments, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'parent_comment_id' })
  parentComment: Comment | null;

  // relations

  @OneToMany(() => Comment, (comment) => comment.parentComment)
  childComments: Comment[];

  @OneToMany(() => CommentRating, (commentRating) => commentRating.comment)
  commentRatings: CommentRating[];
}
