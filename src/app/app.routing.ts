import { Routes, RouterModule } from '@angular/router';

import { HomeRoutes } from './home/index';
import { TestRoutes } from './test/index';

const appRoutes: Routes = [
    ...HomeRoutes,
    ...TestRoutes
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
