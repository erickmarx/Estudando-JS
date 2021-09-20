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
  async obterTodos(): Promise<Livro[]> {
    return this.livroservice.obterTodos();
  }

  @Get(':id')
  async obterUm(@Param() params): Promise<Livro> {
    return this.livroservice.obterUm(params.id);
  }

  @Post()
  async criar(@Body() livro: Livro) {
    this.livroservice.criar(livro);
  }

  @Put()
  async alterar(@Body() livro: Livro): Promise<[number, Livro[]]> {
    return this.livroservice.alterar(livro);
  }

  @Delete(':id')
  apagar(@Param() params) {
    this.livroservice.apagar(params.id);
  }
}
