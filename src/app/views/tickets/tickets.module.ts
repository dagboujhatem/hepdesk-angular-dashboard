import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TicketIndexComponent} from './ticket-index/ticket-index.component';
import {TicketAddComponent} from './ticket-add/ticket-add.component';
import {TicketUpdateComponent} from './ticket-update/ticket-update.component';
import {TicketPrioriteComponent} from './ticket-priorite/ticket-priorite.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// Import routing module
import { TicketsRoutingModule } from './tickets-routing.module';
import { TicketShowComponent } from './ticket-show/ticket-show.component';
import {DataTablesModule} from 'angular-datatables';
import { TicketReponseFournisseurComponent } from './ticket-reponse-fournisseur/ticket-reponse-fournisseur.component';
import { TicketIndexFournisseurComponent } from './ticket-index-fournisseur/ticket-index-fournisseur.component';
import { TicketRelanceAddComponent } from './ticket-relance-add/ticket-relance-add.component';
import { TicketIndexAvisComponent } from './ticket-index-avis/ticket-index-avis.component';
import { TicketIndexAvisAddComponent } from './ticket-index-avis-add/ticket-index-avis-add.component';
import { TicketIndexApplicatifInformaticienComponent } from './ticket-index-applicatif-informaticien/ticket-index-applicatif-informaticien.component';
import { TicketIndexMaterielInformaticienComponent } from './ticket-index-materiel-informaticien/ticket-index-materiel-informaticien.component';
import { TicketReponseMaterielInformaticienComponent } from './ticket-reponse-materiel-informaticien/ticket-reponse-materiel-informaticien.component';
import { TicketIndexRelancerInformaticienComponent } from './ticket-index-relancer-informaticien/ticket-index-relancer-informaticien.component';
import { TicketReponseApplicatifInformaticienComponent } from './ticket-reponse-applicatif-informaticien/ticket-reponse-applicatif-informaticien.component';
import { TicketReponseRelanceInformaticienComponent } from './ticket-reponse-relance-informaticien/ticket-reponse-relance-informaticien.component';
import { TicketResoluIndexComponent } from './ticket-resolu-index/ticket-resolu-index.component';
import { TicketRelanceIndexComponent } from './ticket-relance-index/ticket-relance-index.component';
import {TicketReponseIndexInformaticienComponent} from './ticket-reponse-index-informaticien/ticket-reponse-index-informaticien.component';

@NgModule({
  declarations: [
    TicketIndexComponent,
    TicketAddComponent,
    TicketUpdateComponent,
    TicketPrioriteComponent,
    TicketShowComponent,
    TicketReponseFournisseurComponent,
    TicketIndexFournisseurComponent,
    TicketRelanceAddComponent,
    TicketIndexAvisComponent,
    TicketIndexAvisAddComponent,
    TicketIndexApplicatifInformaticienComponent,
    TicketIndexMaterielInformaticienComponent,
    TicketReponseMaterielInformaticienComponent,
    TicketIndexRelancerInformaticienComponent,
    TicketReponseApplicatifInformaticienComponent,
    TicketReponseRelanceInformaticienComponent,
    TicketResoluIndexComponent,
    TicketRelanceIndexComponent,
    TicketReponseIndexInformaticienComponent
  ],
  imports: [
    CommonModule,
    TicketsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
  ]
})
export class TicketsModule { }
