import { NotfoundComponent } from './notfound/notfound.component';
import { TodoComponent } from './todo/todo.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomeComponent }, 
  { path: 'todo', component: TodoComponent },
  { path: '**', component: NotfoundComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
