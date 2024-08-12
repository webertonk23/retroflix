import { Component, OnInit, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'app-emulator',
  templateUrl: './emulator.component.html',
  styleUrls: ['./emulator.component.css']
})
export class EmulatorComponent implements OnInit, AfterViewInit {
  enableDebug = false;
  enableThreads = false;
  queryString = window.location.search;
  urlParams = new URLSearchParams();

  @Input() urlRom: string = '';

  ngOnInit(): void {
    this.urlParams = new URLSearchParams(this.queryString);

    if (this.urlParams.get('debug') === '1') {
      this.enableDebug = true;
      console.log('Debug is enabled');
    } else {
      console.log('Debug is disabled');
    }

    if (this.urlParams.get('threads') === '1') {
      if (window.SharedArrayBuffer) {
        this.enableThreads = true;
        console.log('Threads are enabled');
      } else {
        console.warn('Threads are disabled as SharedArrayBuffer is not available.');
        console.log('Threads are disabled');
      }
    } else {
      console.log('Threads are disabled');
    }
  }

  ngAfterViewInit(): void {
    this.loadEmulatorScript();
  }

  private async loadEmulatorScript() {
    const core = this.setCore();

    if (!core) {
      console.error('Nenhum núcleo identificado');
      return;
    }

    // Definindo as variáveis globais do EmulatorJS
    window['EJS_player'] = '#game';
    window['EJS_gameName'] = this.urlRom.split('/').pop() ?? '';
    window['EJS_biosUrl'] = '';
    window['EJS_gameUrl'] = this.urlRom;
    window['EJS_core'] = core;
    window['EJS_pathtodata'] = 'assets/data/';
    window['EJS_startOnLoaded'] = true;
    window['EJS_DEBUG_XX'] = this.enableDebug;
    window['EJS_disableDatabases'] = true;
    window['EJS_threads'] = this.enableThreads;

    // Carregando o script do EmulatorJS
    const script = document.createElement('script');
    script.src = 'assets/data/loader.js';
    document.body.appendChild(script);
  }

  setCore() {
    const ext: string = this.urlRom.split('.').pop()!;
    if (['fds', 'nes', 'unif', 'unf'].includes(ext))
      return 'nes';

    if (['smc', 'fig', 'sfc', 'gd3', 'gd7', 'dx2', 'bsx', 'swc'].includes(ext))
      return 'snes';

    if (['z64', 'n64'].includes(ext))
      return 'n64';

    if (['pce'].includes(ext))
      return 'pce';

    if (['ngp', 'ngc'].includes(ext))
      return 'ngp';

    if (['ws', 'wsc'].includes(ext))
      return 'ws';

    if (['col', 'cv'].includes(ext))
      return 'coleco';

    if (['d64'].includes(ext))
      return 'vice_x64sc';

    if (['nds', 'gba', 'gb', 'z64', 'n64'].includes(ext))
      return ext;

    return false;
  }
}
