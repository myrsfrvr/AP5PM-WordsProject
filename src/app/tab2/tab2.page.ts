import { Component } from '@angular/core';
import { WordsService } from '../services/words.service';
import { HistoryService } from '../services/history.service';
import { ModalController } from '@ionic/angular';
import { HistoryComponent } from '../history/history.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  searchTerm: string = '';
  wordSyn: any;
  wordAnt: any;
  errorMessage: string = '';

  constructor(
    private wordsService: WordsService,
    private historyService: HistoryService,
    private modalController: ModalController
    ) {}

  searchWord() {
    this.wordsService.getWordSynonym(this.searchTerm).subscribe(
      (synonymResponse) => {
        this.wordSyn = synonymResponse;
        this.errorMessage = '';
        this.historyService.addToHistory(this.searchTerm);
      },
      (error) => {
        console.error(error);
        this.wordSyn = null;
        this.errorMessage = 'No synonyms found';
      }
    );

    this.wordsService.getWordAntonym(this.searchTerm).subscribe(
      (antonymResponse) => {
        this.wordAnt = antonymResponse;
      },
      (error) => {
        this.wordAnt = null;
        this.errorMessage = 'No antonyms found';
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
