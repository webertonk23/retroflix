import { Component, OnInit } from '@angular/core';
import { ConsoleService } from '../../services/console.service';
import { Console } from '../../interfaces/console';

@Component({
  selector: 'app-consoles',
  templateUrl: './consoles.component.html',
  styleUrl: './consoles.component.css'
})
export class ConsolesComponent implements OnInit {
  consoles?: Console[]
  paginate?: object

  constructor(
    private consoleService: ConsoleService,
  ) { }

  ngOnInit(): void {
    this.index();
  }

  index() {
    this.consoleService.getConsoles().subscribe({
      next: (res) => {
        console.log(res)
        this.consoles = res.data
        this.paginate = res
      },
      error: (err) => console.log(err),
    });
  }

}
