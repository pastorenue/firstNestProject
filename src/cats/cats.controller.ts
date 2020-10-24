import { Controller, Get, Res, Req, Post, Param, HttpException, HttpStatus, UseFilters, ParseIntPipe, UsePipes, Body, UseGuards } from '@nestjs/common';
import { Response, Request } from 'express';
import { CatsService } from './cats.service';
import { HttpExceptionFilter } from '../exceptions/http-exception.filter';
import { JoiValidationPipe } from 'src/pipes/validation.pipe';
import { CreateCatDto } from './dtos/create-cat.dto';
import { ObjectSchema } from "@hapi/joi";
import { AuthGuard } from 'src/guards/auth.guard';

 
@Controller('cats')
@UseGuards(AuthGuard)
export class CatsController {

    constructor(private catService: CatsService) {}

    @Get('')
    findAll(@Res() response: Response, @Req() request: Request)  { // using the response from express js library so we can run the same express response
        return response.status(200).send({
            name: "My name"
        })
    }

    // @Post()
    // @UsePipes(new JoiValidationPipe(createCatSchema))
    // create(@Body() createCatDto: CreateCatDto) {
    //     this.catService.create(createCatDto);
    // }

    @Get(':cat_id')
    retrieveSingleCat(@Param('cat_id', ParseIntPipe) cat_id: number): string { // Using a pipe to validate the params value coming in
        console.log(HttpStatus)
        throw new HttpException({
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            error: 'This is a custom message',
        }, HttpStatus.INTERNAL_SERVER_ERROR); 
    }

    // Passing an in-place instance is useful if we want to customize the built-in pipe's behavior by passing options
    @Get(':cat_id')
    findOne(@Param('cat_id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE})) cat_id: number): string { // Using a pipe to validate the params value coming in
        console.log(HttpStatus)
        throw new HttpException({
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            error: 'This is a custom message',
        }, HttpStatus.INTERNAL_SERVER_ERROR); 
    }

    
}
