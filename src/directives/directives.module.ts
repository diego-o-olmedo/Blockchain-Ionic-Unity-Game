import { NgModule } from '@angular/core';
import { HideHeaderDirective } from './hide-header/hide-header';
import { MyMatchHeightDirective } from './my-match-height/my-match-height';
@NgModule({
	declarations: [HideHeaderDirective,
    MyMatchHeightDirective],
	imports: [],
	exports: [HideHeaderDirective,
    MyMatchHeightDirective]
})
export class DirectivesModule {}
