import { Observable } from 'rxjs';
import { merge, map } from 'rxjs/operators';

/* Operators */
// Merge operator
// Creating Observable
const observable1 = Observable.create((observer: any) => {
    observer.next('hello');
    observer.next('11');
});

const observable2 = Observable.create((observer: any) => {
    observer.next('hi');
    observer.next('1');
});

const resultObservable = observable1.pipe(merge(observable2));
resultObservable.subscribe((result: any) => {
    // console.log('result', result);
});
// resultObservable.unsubsribe();

// Map Operator
Observable.create((observer: any) => {
    observer.next('Hey guys');
    observer.next('abc');
}).pipe(map((val: any) => {
    console.log('val', val);
    return val.toUpperCase();
})).subscribe((res: any) => {
    // console.log('res', res);
});

// Pluck Operator
