import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateProductDto } from "src/product/dto/createProductDto";
import { UpdateProductDto } from "src/product/dto/updateProductDto";
import { ProductService } from "src/Services/Product/product.service";

@Controller('/products')
export class ProductController {

    constructor(
        private productService: ProductService
    ){}

    @Get()
    async findAllProducts() {
        return await this.productService.findAllProduct();
    }

    @Post()
    async createProduct(@Body() productData: CreateProductDto) {
        return await this.productService.createProduct(productData);
    }

    @Put(':id')
    async updateProduct(@Body() productData: UpdateProductDto, @Param('id') productId: string) {
        return await this.productService.updateProduct(productId, productData);
    }

    @Delete(':id')
    async deleteProduct(@Param('id') productId: string) {
        await this.productService.deleteProduct(productId);
    }
    
}