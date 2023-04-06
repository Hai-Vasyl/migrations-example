import { Base } from 'src/common/entities/base.entity';
import { Post } from 'src/posts/post.entity';
import { User } from 'src/users/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('tags')
export class Tag extends Base {
  @PrimaryGeneratedColumn('increment', { name: 'tag_id' })
  tagId: string;

  @Column({ type: 'varchar', length: 30, nullable: false, unique: true })
  name: string;

  @Column({ type: 'varchar', nullable: false })
  color: string;

  @ManyToOne(() => User, (user) => user.tags)
  @JoinColumn({ name: 'creator_id' })
  creator: User;

  // relations

  @ManyToMany(() => Post, (post) => post.tags)
  @JoinTable({
    name: 'tags_posts',
    joinColumn: { name: 'tag_id' },
    inverseJoinColumn: { name: 'post_id' },
  })
  posts: Post[];
}
