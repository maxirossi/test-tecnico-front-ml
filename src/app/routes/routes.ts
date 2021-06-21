import { Routes, RouterModule } from '@angular/router';
import {  MlHomeComponent } from '../components/ml-home';

const routes: Routes = [
  {
    path: '',
    component: MlHomeComponent,
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}