import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordsService {
  private apiUrl = 'https://wordsapiv1.p.rapidapi.com/words';

  constructor(private http: HttpClient) { }

  getWordDefinition(word: string): Observable<any> {
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': 'a1b147d54cmsh764647262b789e5p1b9179jsn9ad671dc4933',
      'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
    });
    return this.http.get(`${this.apiUrl}/${word}/definitions`, { headers });
  }

  getWordPronunciation(word: string): Observable<any> {
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': 'a1b147d54cmsh764647262b789e5p1b9179jsn9ad671dc4933',
      'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
    });

    return this.http.get(`${this.apiUrl}/${word}/pronunciation`, { headers });
  }

  getExamples(word: string): Observable<any> {
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': 'a1b147d54cmsh764647262b789e5p1b9179jsn9ad671dc4933',
      'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
    });
    return this.http.get(`${this.apiUrl}/${word}/examples`, { headers });
  }

  getAlso(word: string): Observable<any> {
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': 'a1b147d54cmsh764647262b789e5p1b9179jsn9ad671dc4933',
      'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
    });
    return this.http.get(`${this.apiUrl}/${word}/also`, { headers });
  }

  getWordSynonym(word: string): Observable<any> {
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': 'a1b147d54cmsh764647262b789e5p1b9179jsn9ad671dc4933',
      'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
    });

    return this.http.get(`${this.apiUrl}/${word}/synonyms`, { headers });
  }

  getWordAntonym(word: string): Observable<any> {
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': 'a1b147d54cmsh764647262b789e5p1b9179jsn9ad671dc4933',
      'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
    });

    return this.http.get(`${this.apiUrl}/${word}/antonyms`, { headers });
  }

  getWordRhyme(word: string): Observable<any> {
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': 'a1b147d54cmsh764647262b789e5p1b9179jsn9ad671dc4933',
      'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
    });

    return this.http.get(`${this.apiUrl}/${word}/rhymes`, { headers });
  }

}
