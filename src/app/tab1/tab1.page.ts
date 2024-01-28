import { Component } from '@angular/core';
import { WordsService } from '../services/words.service';
import { HistoryService } from '../services/history.service';
import { ModalController } from '@ionic/angular';
import { HistoryComponent } from '../history/history.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  searchTerm: string = '';
  wordDef: any;
  wordPron: any = {};
  example: any;
  also: any;

  errorMessage: string = '';

  constructor(
    private wordsService: WordsService,
    private historyService: HistoryService,
    private modalController: ModalController
  ) { }

  searchWord() {
    this.wordsService.getWordDefinition(this.searchTerm).subscribe(
      (definitionsResponse) => {
        this.wordDef = definitionsResponse;
        this.errorMessage = '';
        this.historyService.addToHistory(this.searchTerm);
      },
      (error) => {
        console.error(error);
        this.wordDef = null;
        this.errorMessage = 'Word not found in the dictionary, please try again';
      }
    );

    this.wordsService.getWordPronunciation(this.searchTerm).subscribe(
      (pronunciationsResponse) => {
        this.wordPron = pronunciationsResponse;

      },
      (error) => {
        console.error(error);
        this.wordPron = ['No pronunciation available.'];
      }
    );

    this.wordsService.getExamples(this.searchTerm).subscribe(
      (examplesResponse) => {
        this.example = examplesResponse;
      },
      (error) => {
        console.error(error);
        this.wordPron = ['No examples available.'];
      }
    );

    this.wordsService.getAlso(this.searchTerm).subscribe(
      (alsoResponse) => {
        this.also = alsoResponse;
      },
      (error) => {
        console.error(error);
        this.wordPron = ['No examples available.'];
      }
    );
  }

  getObjectValues(obj: any): any[] {
    return obj ? Object.values(obj) : [];
  }

  async showHistory() {
    const modal = await this.modalController.create({
      component: HistoryComponent,
    });
    return await modal.present();
  }

}
