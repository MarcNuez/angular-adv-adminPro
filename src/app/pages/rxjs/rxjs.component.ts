import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit,OnDestroy {

  public intervalSubs: Subscription;


  constructor() {

    // this.retornaObservable().pipe(
    //   retry(2)
    // ).subscribe(
    //   valor => console.log('subs:', valor),
    //   err => console.warn('error:', err),
    //   () => console.log('completed')
    // );

    

    this.intervalSubs = this.retornaIntervalo().subscribe(
      console.log
      //(valor) => console.log(valor)
    )

  }

  //cuando me vaya  de la pagina me desuscribo
  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  retornaIntervalo(): Observable<number> {
    return interval(250)
      .pipe(//van por orden OJO
        // take(10),//si este va primero tendremos solo hasta el 10 si va lo ultimo tendremos hasta el 20
        map(valor => valor + 1),
        filter(valor => (valor % 2 === 0) ? true : false),
      );

  }

  retornaObservable(): Observable<number> {
    let i = 0;

    const obs$ = new Observable<number>(observer => {



      const intervalo = setInterval(() => {
        i++;
        observer.next(i);

        if (i === 4) {
          clearInterval(intervalo);
          observer.complete();
        }
        if (i === 2) {

          observer.error('llego al 2');
        }

      }, 1000)


    });

    return obs$;
  }

  ngOnInit(): void {
  }

}
