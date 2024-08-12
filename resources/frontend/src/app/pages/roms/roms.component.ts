import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsoleService } from '../../services/console.service';
import { Console } from '../../interfaces/console';
import { Rom } from '../../interfaces/rom';

@Component({
  selector: 'app-roms',
  templateUrl: './roms.component.html',
  styleUrl: './roms.component.css'
})
export class RomsComponent {
  consoleId?: string
  console?: Console
  roms?: Rom[]
  viewEmulator = false
  urlRom = ""

  constructor(
    private activatedRoute: ActivatedRoute,
    private consoleService: ConsoleService,
  ) { }

  ngOnInit() {
    this.consoleId = this.activatedRoute.snapshot.paramMap.get('id')!;
    this.consoleService.getConsole(this.consoleId).subscribe({
      next: (res) => {
        console.log(res)
        this.console = res
        this.roms = res.roms
      },
      error: (err) => console.log(err),
    });
  }

  loadRom(rom: Rom) {
    this.urlRom = rom.url;
    this.viewEmulator = true;
  }
}
