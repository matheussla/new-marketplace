import {
  Entity, Column, PrimaryGeneratedColumn,
  CreateDateColumn, UpdateDateColumn, Unique, OneToMany,
} from 'typeorm';
import { IsEmail, IsNotEmpty, Length } from 'class-validator';
import favoriteProduct from './favoriteProduct';

@Entity('clients')
@Unique(['email'])
class Client {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  @Length(2, 50, { message: 'The name must be at least 2 but not longer than 50 characters' })
  @IsNotEmpty({ message: 'The name is required' })
  name: string

  @Column({ name: 'email' })
  @IsEmail({}, { message: 'Incorrect email' })
  @IsNotEmpty({ message: 'The email is required' })
  email: string

  @OneToMany(() => favoriteProduct, (product) => product.clientId)
  favoriteProducts: favoriteProduct[]

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updateAt: Date
}
export default Client;
