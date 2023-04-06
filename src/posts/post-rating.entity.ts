import { Rating } from 'src/common/entities/rating.entity';
import { Post } from 'src/posts/post.entity';
import { User } from 'src/users/user.entity';
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('post_ratings')
export class PostRating extends Rating {
  @PrimaryGeneratedColumn('uuid', { name: 'post_rating_id' })
  postRatingId: string;

  @ManyToOne(() => User, (user) => user.postRatings)
  @JoinColumn({ name: 'creator_id' })
  creator: User;

  @ManyToOne(() => Post, (post) => post.postRatings)
  @JoinColumn({ name: 'post_id' })
  post: Post;
}
