import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllUserListComponent } from './myComp/all-user-list/all-user-list.component';
import { EditUserComponent } from './myComp/edit-user/edit-user.component';

const routes: Routes = [
  {path:'', component:AllUserListComponent},
  {path:'form', component:EditUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
