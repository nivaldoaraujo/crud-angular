import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';
import { Produto } from '../../models/produto.model';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produto-lista',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './produto-lista.component.html'
})
export class ProdutoListaComponent implements OnInit {

 // Cria a instância do produto que será usada no formulário
  // produto: Produto = {
  //   id: 0,
  //   nome: '',
  //   preco: 0,
  // };

  // Injeta os serviços diretamente com a função inject() (recurso moderno no Angular)
  // private route = inject(ActivatedRoute); // Acessa os parâmetros da rota
  // private router = inject(Router);        // Usado para navegar entre as rotas
  // private service = inject(ProdutoService); // Serviço de produtos com métodos como criar e atualizar

  produtos: Produto[] = [];

  constructor(private produtoService: ProdutoService, private router: Router) {}

  ngOnInit() {
    this.carregarProdutos();
  }

  carregarProdutos() {
    this.produtoService.listar().subscribe((res) => {
      this.produtos = res;
    });
  }

  excluir(id: number) {
    this.produtoService.excluir(id).subscribe(() => {
      this.carregarProdutos();
    });
  }

  editar(id: number) {
    this.router.navigate(['/editar', id]);
  }

  novo() {
    this.router.navigate(['/novo']);
  }
}
