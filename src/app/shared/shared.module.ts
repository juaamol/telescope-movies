import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IconLabelComponent } from './components/icon-label/icon-label.component';
import { MinutesToHoursPipe } from './pipes/minutes-to-hours/minutes-to-hours.pipe';
import { SafePipe } from './pipes/safe/safe.pipe';

@NgModule({
  declarations: [MinutesToHoursPipe, SafePipe, IconLabelComponent],
  imports: [CommonModule],
  exports: [TranslateModule, MinutesToHoursPipe, SafePipe, IconLabelComponent],
})
export class SharedModule {}
