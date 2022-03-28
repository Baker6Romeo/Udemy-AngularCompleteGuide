import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading', {static: true}) header: ElementRef;

  constructor() {
    console.log('constructior called!')
  }

  ngOnInit(): void {
    console.log('ngOnInit called!')
    console.log(this.header.nativeElement.textContent)
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!')
    console.log(changes)
    console.log(this.header.nativeElement.textContent)
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called')
    console.log(this.header.nativeElement.textContent)
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called')
    console.log(this.header.nativeElement.textContent)
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called')
    console.log(this.header.nativeElement.textContent)
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called')
    console.log(this.header.nativeElement.textContent)
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called')
    console.log(this.header.nativeElement.textContent)
  }

}
