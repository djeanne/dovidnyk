import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  constructor() { }

  // Store a new entry in the local storage (temporarily)
  addEntry(entry) {
    let entries = [];
    if (localStorage.getItem('Entries')) {
      entries = JSON.parse(localStorage.getItem('Entries'));
      entries = [entry, ...entries];
    } else {
      entries = [entry];
    }
    localStorage.setItem('Entries', JSON.stringify(entries));
  }

  // fetch entries from the local storage to render them
  getEntries() {
    return JSON.parse(localStorage.getItem('Entries'));
  }

}
