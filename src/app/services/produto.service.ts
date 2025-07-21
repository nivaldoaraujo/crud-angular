// src/app/services/produto.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../models/produto.model';
import { Observable } from 'rxjs';

const API = 'http://localhost:3001/produtos';

@Injectable({
  providedIn: 'root'
})

export class ProdutoService {constructor(private http: HttpClient) {}

  listar(): Observable<Produto[]> {
    return this.http.get<Produto[]>(API);
  }

  buscarPorId(id: number): Observable<Produto> {
    return this.http.get<Produto>(`${API}/${id}`);
  }

  criar(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(API, produto);
  }

  atualizar(produto: Produto): Observable<Produto> {
    return this.http.put<Produto>(`${API}/${produto.id}`, produto);
    
  }

  excluir(id: number): Observable<any> {
    return this.http.delete(`${API}/${id}`);
  }
}
