import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MissionAddComponent} from './mission-add/mission-add.component';
import {MissionIndexComponent} from './mission-index/mission-index.component';
import {MissionReponseComponent} from './mission-reponse/mission-reponse.component';
import { MissionConfirmerComponent } from './mission-confirmer/mission-confirmer.component';
import { MissionShowComponent } from './mission-show/mission-show.component';
import { MissionUpdateComponent } from './mission-update/mission-update.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Gestion des missions'
    },
    children: [
      {
        path: '',
        redirectTo: 'index'
      },
      {
        path: 'index',
        component: MissionIndexComponent,
        data: {
          title: 'Liste des missions'
        }
      },
      {
        path: 'add',
        component: MissionAddComponent,
        data: {
          title: 'Ajouter une mission'
        }
      },
      {
        path: 'show/:id',
        component: MissionShowComponent,
        data: {
          title: 'Afficher les détails d\'une mission'
        }
      },
      {
        path: 'update/:id',
        component: MissionUpdateComponent,
        data: {
          title: 'Modifier les informations d\'une mission'
        }
      },
      {
        path: 'repondre/:id',
        component: MissionReponseComponent,
        data: {
          title: 'Répondre à une mission'
        }
      },
      {
        path: 'confirmer/:id',
        component: MissionConfirmerComponent,
        data: {
          title: 'Répondre à une mission'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MissionsRoutingModule {}
