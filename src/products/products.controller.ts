import { Controller, Get, Param, Post, Delete, Put, Body, Redirect, HttpStatus, HttpCode, Header, Req, Res } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Response, Request } from 'express';
import { ProductsService } from './products.service';



@Controller('products')

export class ProductsController {

    constructor (private readonly productsService:ProductsService) {
        
    }

    // @Get()
    // @Redirect("https://google.com", 301)
    // getAll (@Req() req:Request, @Res() res:Response):string {
    //     res.status(201).end("bye")
    //     return "getAll"
    // };

    // @Get()
    // getAll():string{
    //     return "getAll"
    // }

    @Get()
    getAll(){
        return this.productsService.getAll()
    }


    @Get(":id")
    getOne (@Param("id") id) {
        return this.productsService.getById(id) 
    };

    // @Post()
    // @HttpCode(HttpStatus.CREATED)
    // @Header("Cache-control", "none")
    // create(@Body() CreateProductDto:CreateProductDto):string{
    //     return  `Title: ${CreateProductDto.title} Price: ${CreateProductDto.price}`
    // };

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @Header("Cache-control", "none")
    create(@Body() CreateProductDto:CreateProductDto){
        return  this.productsService.create(CreateProductDto)
    };

    @Delete(":id")
    remove(@Param("id") id:string){
        return  "remove " + id
    };

    @Put(":id")
    update(@Body() updateProductDto:UpdateProductDto, @Param("id") id: string){
        return `Update ` + id
    };



}
