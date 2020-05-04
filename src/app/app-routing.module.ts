import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  // { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'inicio', loadChildren: './pages/inicio/inicio.module#InicioPageModule' },
  { path: 'ministerios', loadChildren: './pages/ministerios/ministerios.module#MinisteriosPageModule' },
  { path: 'informacion/:id', loadChildren: './pages/informacion/informacion.module#InformacionPageModule' },
  { path: 'iglesiashijas', loadChildren: './pages/iglesiashijas/iglesiashijas.module#IglesiashijasPageModule' },
  { path: 'informacionhijas/:id', loadChildren: './pages/informacionhijas/informacionhijas.module#InformacionhijasPageModule' },
  { path: 'staff', loadChildren: './pages/staff/staff.module#StaffPageModule' },
  { path: 'calendario', loadChildren: './pages/calendario/calendario.module#CalendarioPageModule' },
  { path: 'gruposcafe', loadChildren: './pages/gruposcafe/gruposcafe.module#GruposcafePageModule' },
  { path: 'radioamerica', loadChildren: './pages/radioamerica/radioamerica.module#RadioamericaPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
