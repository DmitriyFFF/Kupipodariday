import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { Wish } from 'src/wishes/entities/wish.entity';

@Entity()
export class Offer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @ManyToOne(() => Wish, (wish) => wish.offers)
  item: Wish;

  @Column()
  amount: number;

  @Column()
  hidden: boolean;

  @ManyToOne(() => User, (user) => user.offers)
  user: User;
}
