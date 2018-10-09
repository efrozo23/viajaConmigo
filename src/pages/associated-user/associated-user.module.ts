import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AssociatedUserPage } from './associated-user';

@NgModule({
  declarations: [
    AssociatedUserPage,
  ],
  imports: [
    IonicPageModule.forChild(AssociatedUserPage),
  ],
})
export class AssociatedUserPageModule {}
