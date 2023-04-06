import { Comment } from 'src/comments/comment.entity';
import { Base } from 'src/common/entities/base.entity';
import { Rating } from 'src/common/entities/rating.entity';
import { Post } from 'src/posts/post.entity';
import { User } from 'src/users/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('comment_ratings')
export class CommentRating extends Rating {
  @PrimaryGeneratedColumn('uuid', { name: 'comment_rating_id' })
  commentRatingId: string;

  @ManyToOne(() => User, (user) => user.commentRatings)
  @JoinColumn({ name: 'creator_id' })
  creator: User;

  @ManyToOne(() => Comment, (comment) => comment.commentRatings)
  @JoinColumn({ name: 'comment_id' })
  comment: Comment;
}
