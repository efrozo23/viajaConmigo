import { NgModule } from '@angular/core';
import { LoginModelPipe } from './login-model/login-model';
@NgModule({
	declarations: [LoginModelPipe],
	imports: [],
	exports: [LoginModelPipe]
})
export class PipesModule {
	username: String;
	password: String;

}
