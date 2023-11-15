import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TrophyComponent } from './trophy/trophy.component';
import { PlayersComponent } from './players/players.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'trofeus',
    component: TrophyComponent,

  },
  {
    path: 'jogadores',
    component: PlayersComponent,

  }



];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
