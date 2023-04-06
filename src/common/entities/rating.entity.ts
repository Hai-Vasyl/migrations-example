import { Base } from 'src/common/entities/base.entity';
import { Column } from 'typeorm';

export class Rating extends Base {
  @Column({ type: 'boolean', nullable: false, name: 'is_positive' })
  isPositive: boolean;
}
