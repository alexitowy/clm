import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'landing',
    loadChildren: () =>
      import('./pages/initial-page/initial-page.module').then(
        (m) => m.InitialPageModule,
      ),
  },
  {
    path: '**',
    redirectTo: 'landing',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
