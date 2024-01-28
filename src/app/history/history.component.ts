import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../services/history.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent  implements OnInit {
  searchHistory: string[] = [];

  constructor(
    private historyService: HistoryService,
    private modalController: ModalController
    ) { }

  ngOnInit() {
    this.historyService.getHistory().subscribe((history) => {
      this.searchHistory = history;
    });
  }

  closeHistory() {
    this.modalController.dismiss();
  }

}
