import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./pages/folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'meds/:med/:backgroundColor/:type',
    loadChildren: () => import('./pages/meds/meds.module').then( m => m.MedsPageModule)
  },
  {
    path: 'calculator/:medCalculate/:backgroundColorCalculate/:typeCalculate',
    loadChildren: () => import('./pages/calculator/calculator.module').then( m => m.CalculatorPageModule)
  },
  {
    path: 'search/:backgroundColorSearch',
    loadChildren: () => import('./pages/search/search.module').then( m => m.SearchPageModule)
  },  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'adm',
    loadChildren: () => import('./pages/adm/adm.module').then( m => m.AdmPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
