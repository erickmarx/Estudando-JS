import { LivrosService } from './livro.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Livro } from './livro.model';

@Controller('livros')
export class LivrosController {
  constructor(private livroservice: LivrosService) {}

  @Get()
  obterTodos(): Livro[] {
    return this.livroservice.obterTodos();
  }

  @Get(':id')
  obterUm(@Param() params): Livro {
    return this.livroservice.obterUm(params.id);
  }

  @Post()
  criar(@Body() produto: Livro) {
    this.livroservice.criar(produto);
    console.log(produto);
  }

  @Put()
  alterar(@Body() produto: Livro): Livro {
    return this.livroservice.alterar(produto);
  }

  @Delete(':id')
  apagar(@Param() params) {
    this.livroservice.apagar(params.id);
  }
}
