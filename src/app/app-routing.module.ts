import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllTaskComponent } from './all-task/all-task.component';
import { RemainingTaskComponent } from './remaining-task/remaining-task.component';
import { CommpletedTaskComponent } from './commpleted-task/commpleted-task.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', redirectTo: 'allTasks', pathMatch: 'full' },
  { path: 'allTasks', component: AllTaskComponent },
  { path: 'remainingTasks', component: RemainingTaskComponent },
  { path: 'completedTasks', component: CommpletedTaskComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
