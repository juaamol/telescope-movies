import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MinutesToHoursPipe } from './pipes/minutes-to-hours/minutes-to-hours.pipe';

@NgModule({
  declarations: [MinutesToHoursPipe],
  imports: [CommonModule],
  exports: [TranslateModule, MinutesToHoursPipe],
})
export class SharedModule {}
