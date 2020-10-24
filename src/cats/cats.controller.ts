import { Controller, Get, Res, Req, Post, Param, HttpException, HttpStatus, UseFilters, ParseIntPipe } from '@nestjs/common';
import { Response, Request } from 'express';
import { CatsService } from './cats.service';
import { HttpExceptionFilter } from '../exceptions/http-exception.filter';

@Controller('cats')
export class CatsController {

    constructor(private catService: CatsService) {}

    @Get('')
    findAll(@Res() response: Response, @Req() request: Request)  { // using the response from express js library so we can run the same express response
        return response.status(200).send({
            name: "My name"
        })
    }

    @Post()
    @UseFilters(new HttpExceptionFilter())
    create(): string {
        return "This is a string response"
    }

    @Get(':cat_id')
    retrieveSingleCat(@Param('cat_id', ParseIntPipe) cat_id: number): string { // Using a pipe to validate the params value coming in
        console.log(HttpStatus)
        throw new HttpException({
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            error: 'This is a custom message',
        }, HttpStatus.INTERNAL_SERVER_ERROR); 
    }

    
}
