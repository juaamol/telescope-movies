import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MinutesToHoursPipe } from './pipes/minutes-to-hours/minutes-to-hours.pipe';
import { SafePipe } from './pipes/safe/safe.pipe';

@NgModule({
  declarations: [MinutesToHoursPipe, SafePipe],
  imports: [CommonModule],
  exports: [TranslateModule, MinutesToHoursPipe, SafePipe],
})
export class SharedModule {}
