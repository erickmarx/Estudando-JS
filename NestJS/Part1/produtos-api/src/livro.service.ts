import { Injectable } from '@nestjs/common';
import { Livro } from './livro.model';

@Injectable()
export class LivrosService {
  livros: Livro[] = [
    // new Livro('LIV01', 'Livro TDD e BDD na prática', 29.9),
    // new Livro('LIV02', 'Livro TDD e BDD na prática', 29.9),
    // new Livro('LIV03', 'Livro TDD e BDD na prática', 29.9),
  ];

  obterTodos(): Livro[] {
    return this.livros;
  }

  obterUm(id: number): Livro {
    return this.livros[0];
  }

  criar(livro: Livro) {
    this.livros.push(livro);
  }

  alterar(produto: Livro): Livro {
    return produto;
  }

  apagar(id: number) {
    this.livros.pop();
  }
}
