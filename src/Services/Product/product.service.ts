import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ProductEntity } from "src/Entities/Product/product.entity";
import { CreateProductDto } from "src/product/dto/createProductDto";
import { ListProductsDto } from "src/product/dto/listProductDto";
import { UpdateProductDto } from "src/product/dto/updateProductDto";
import { Repository } from "typeorm";

@Injectable()
export class ProductService {

    constructor(
        @InjectRepository(ProductEntity)
        private readonly productRepository: Repository<ProductEntity>,
    ){}

    async findAllProduct (): Promise<ListProductsDto[]> {
       const allProducts =  await this.productRepository.find();

       return allProducts.map(product => {
            const productDto = new ListProductsDto();
            productDto.id = product.id;
            productDto.userId = product.userId;
            productDto.name = product.name;
            productDto.value = product.value;
            productDto.quantity = product.quantity;
            productDto.description = product.description;
            productDto.category = product.category;

            return productDto;

       })
    }

    async createProduct(productDto: CreateProductDto ): Promise<ProductEntity> {
        const createdProduct = await this.productRepository.save(productDto);

        return createdProduct;
    }

    async updateProduct(productId: string, updateData: UpdateProductDto): Promise<ProductEntity> {
        const product = await this.productRepository.preload({
            ...updateData,
            id: productId,
        });

        if(!product) {
            throw new NotFoundException(`Product with ID ${productId} not found`);
        }

        return await this.productRepository.save(product);
    }

    async deleteProduct(productId: string): Promise<void> {
        const productToDelete = await this.productRepository.delete(productId);

        if(productToDelete.affected === 0) {
            throw new NotFoundException(`Product with ID ${productId} not found`);
        }
    }
    
}