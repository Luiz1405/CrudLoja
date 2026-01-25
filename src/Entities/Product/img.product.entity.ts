import { Column, Entity } from "typeorm";


@Entity()
export class ImgProducEntity {

    @Column({ length: 100, nullable: false})
    url: string;

    @Column({ length: 100, nullable: false})
    description: string;
}