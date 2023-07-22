import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './schema/book.schema';
import { CreateBookDto } from './schema/dto/create.dto';
import { UpdateBookDto } from './schema/dto/update.dto';

@Controller('books')
export class BookController {
  constructor(private bookService: BookService) {}

  @Post('new')
  async createBook(@Body() book: CreateBookDto): Promise<Book> {
    return this.bookService.create(book);
  }

  @Get()
  async getAllBooks(): Promise<Book[]> {
    return await this.bookService.findAll();
  }

  @Get(':id')
  async getBook(@Param('id') id: string): Promise<Book> {
    return await this.bookService.findById(id);
  }

  @Put(':id')
  async updateBook(
    @Param('id')
    id: string,
    @Body()
    book: UpdateBookDto,
  ): Promise<Book> {
    return this.bookService.updateById(id, book);
  }

  @Delete(':id')
  async deleteBook(@Param('id') id: string): Promise<Book> {
    return this.bookService.deleteById(id);
  }
}
