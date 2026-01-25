import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductEntity } from "src/Entities/Product/product.entity";
import { ProductService } from "src/Services/Product/product.service";
import { ProductController } from "src/Controllers/Product/product.controller";

@Module({
    imports: [TypeOrmModule.forFeature([ProductEntity])],
    providers: [ProductService],
    controllers: [ProductController],
})
export class ProductModule {}