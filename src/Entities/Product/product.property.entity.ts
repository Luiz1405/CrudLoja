import { Column, Entity } from "typeorm";


@Entity()
export class ProductPropertyEntity {

    @Column({ length: 100, nullable: false })
    name: string;

    @Column({ length: 100, nullable: false })
    description: string;


}