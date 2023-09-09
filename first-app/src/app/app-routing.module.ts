import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'groceries',
    loadChildren: () => import('./pages/groceries/groceries.module').then( m => m.GroceriesPageModule)
  },
  {
    path: 'others',
    loadChildren: () => import('./pages/others/others.module').then( m => m.OthersPageModule)
  },
  {
    path: 'electricity-bills',
    loadChildren: () => import('./pages/electricity-bills/electricity-bills.module').then( m => m.ElectricityBillsPageModule)
  },
  {
    path: 'college-fees',
    loadChildren: () => import('./pages/college-fees/college-fees.module').then( m => m.CollegeFeesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
