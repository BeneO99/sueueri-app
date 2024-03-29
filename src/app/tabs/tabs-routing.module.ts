import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'calendar',
        loadChildren: () => import('../calendar/calendar.module').then(m => m.CalendarPageModule)

      },    
      {
        path: 'events',
        loadChildren: () => import('../events/events.module').then(m => m.EventsPageModule)

      },    
      {
        path: 'debts',
        loadChildren: () => import('../debts/debts.module').then(m => m.DebtsPageModule)

      },    
      {
        path: 'informations',
        loadChildren: () => import('../informations/informations.module').then(m => m.InformationsPageModule)

      },      
      {
        path: 'orders',
        loadChildren: () => import('../orders/orders.module').then(m => m.OrdersPageModule)

      },
      {
        path: '',
        redirectTo: '/tabs/calendar',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/calendar',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
