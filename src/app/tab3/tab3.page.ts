import { Component } from '@angular/core';
import { WordsService } from '../services/words.service';
import { HistoryService } from '../services/history.service';
import { ModalController } from '@ionic/angular';
import { HistoryComponent } from '../history/history.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  searchTerm: string = '';
  wordRhyme: any;
  errorMessage: string = '';

  constructor(
    private wordsService: WordsService,
    private historyService: HistoryService,
    private modalController: ModalController
  ) { }

  searchWord() {
    this.wordsService.getWordRhyme(this.searchTerm).subscribe(
      (rhymeResponse) => {
        this.wordRhyme = rhymeResponse;
        this.errorMessage = '';
        this.historyService.addToHistory(this.searchTerm);
      },
      (error) => {
        console.error(error);
        this.wordRhyme = null;
        this.errorMessage = 'No rhymes found';
      }
    );
  }

  async showHistory() {
    const modal = await this.modalController.create({
      component: HistoryComponent,
    });
    return await modal.present();
  }

}
