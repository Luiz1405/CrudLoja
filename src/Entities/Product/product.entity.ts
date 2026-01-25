import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity()
export class ProductEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'user_id', nullable:false})
    userId: number;

    @Column({length: 100, nullable:false})
    name: string

    @Column({nullable:false})
    value: number;

    @Column({ nullable:false})
    quantity: number;
    
    @Column({nullable:false})
    description: string;

    @Column({length: 100, nullable: false})
    category: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: string;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: string;

    @DeleteDateColumn({ name: 'deleted_at'})
    deletedAt: string;

}