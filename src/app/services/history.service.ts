import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  private searchHistory: string[] = [];
  private historySubject = new BehaviorSubject<string[]>([]);

  getHistory() {
    return this.historySubject.asObservable();
  }

  addToHistory(word: string) {
    this.searchHistory.unshift(word);
    this.historySubject.next([...this.searchHistory]);
  }
}
