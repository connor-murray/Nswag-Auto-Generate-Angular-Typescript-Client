import {Component, OnInit} from '@angular/core';
import {IMyDto, MyDto, ValuesClient} from './app.generated';
import {catchError, map, tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'nswag';
  apiResult$: Observable<MyDto>;

  constructor(private valuesClient: ValuesClient) {
  }

  ngOnInit(): void {
    this.apiResult$ = this.valuesClient.getMtDto()
      .pipe(
        tap(result => console.log(result)),
        catchError((error: any) => {
          console.error(`BOOM! ${error}`);
          return of(null);
        })
      );
  }
}
