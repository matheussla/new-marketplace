import {
  Entity, Column, PrimaryGeneratedColumn, CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import {
  Min, Max, IsInt, Length, IsNotEmpty, IsNumber, MaxLength,
} from 'class-validator';

@Entity('products')
class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  @IsNumber()
  @Min(0)
  @IsNotEmpty({ message: 'The price is required' })
  price: number

  @Column()
  @MaxLength(50, { message: 'The Image must be not longer than 50 characters' })
  image: string

  @Column()
  @Length(2, 50, { message: 'The brand must be at least 2 but not longer than 50 characters' })
  @IsNotEmpty({ message: 'The brand is required' })
  brand: string

  @Column()
  @Length(2, 50, { message: 'The title must be at least 2 but not longer than 50 characters' })
  @IsNotEmpty({ message: 'The title is required' })
  title: string

  @Column()
  @IsInt()
  @Min(0)
  @Max(10)
  reviewScore: number

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updateAt: Date
}
export default Product;
