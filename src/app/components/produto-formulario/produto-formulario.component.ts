import { Component, OnInit } from '@angular/core';
import { Produto } from '../../models/produto.model';
import { ProdutoService } from '../../services/produto.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-produto-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './produto-formulario.component.html'
})
export class ProdutoFormularioComponent implements OnInit {
  produto: Produto = { nome: '', preco: 0 };

  constructor(
    private service: ProdutoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // Acessa os parâmetros da rota atual (geralmente definidos via URL como /editar/5).
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.service.buscarPorId(id).subscribe(res => {
        this.produto = res;
      });
    }
  }

  salvar() {
    if (this.produto.id) {
      this.service.atualizar(this.produto).subscribe(() => {
        this.router.navigate(['/']);
      });
    } else {
      this.service.criar(this.produto).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}
