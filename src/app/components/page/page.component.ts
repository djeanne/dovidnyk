import { Component, OnInit } from '@angular/core';
import { EntryService } from '../../services/entry.service';
import { Entry } from '../../interfaces/entry';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.sass']
})
export class PageComponent implements OnInit {
  public columns = ['Name', 'Phone', 'E-mail'];
  entries = [];

  constructor(
    private entryService: EntryService
  ) { }

  ngOnInit(): void {
    this.entries = this.entryService.getEntries(); 
  }

}
