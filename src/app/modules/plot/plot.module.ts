import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { PlotComponent } from './plot.component';
import { PluginService, Plugin } from '../../core/services/plugin.service';

import { PlotService } from './plot.service';
import { LigthningChartComponent } from './ligthning-chart/ligthning-chart.component';
import { WebglPlotComponent } from './webgl-plot/webgl-plot.component';

@NgModule({
  declarations: [
    PlotComponent,
    LigthningChartComponent,
    WebglPlotComponent
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    PlotComponent
  ],
  providers: [
    PlotService
  ]
})
export class PlotModule implements Plugin {

  name = "plot";
  stream$ = this.plotService.stream$;
  defaultTemplate = 'plot';
  order = 50;
  removePrefix = true;

  constructor(
    private plotService: PlotService,
    private pluginService: PluginService
  ) {
    console.log( "PlotModule constructor." );
    this.pluginService.registerPlugin(this);

	}
}
