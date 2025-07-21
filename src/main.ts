import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { ProdutoListaComponent } from './app/components/produto-lista/produto-lista.component';


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
