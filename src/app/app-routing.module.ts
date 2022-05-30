import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageFilmComponent } from './pages/page-film/page-film.component';

const routes: Routes = [{ path: 'film', component: PageFilmComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
