import {
  Directive,
  ElementRef,
  AfterViewInit,
  Input,
  HostListener
} from "@angular/core";

@Directive({
  selector: "[myMatchHeight]" // Attribute selector
})
export class MyMatchHeightDirective implements AfterViewInit {
  @Input() myMatchHeight: string;

  constructor(private el: ElementRef) {
    console.log("in match");
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.matchHeight(this.el.nativeElement, this.myMatchHeight);
    }, 50);
  }
  @HostListener("window:resize")
  onResize() {
    // call our matchHeight function here
    this.matchHeight(this.el.nativeElement, this.myMatchHeight);
  }
  matchHeight(parent: HTMLElement, className: string) {
    // match height logic here
    console.log("match", parent);
    if (!parent) return;

    // step 1: find all the child elements with the selected class name
    const children = parent.getElementsByClassName(className);

    if (!children) return;
    Array.from(children).forEach((x: HTMLElement) => {
      x.style.height = "initial";
    });
    // step 2a: get all the child elements heights
    const itemHeights = Array.from(children).map(
      x => x.getBoundingClientRect().height
    );

    // step 2b: find out the tallest
    const maxHeight = itemHeights.reduce((prev, curr) => {
      return curr > prev ? curr : prev;
    }, 0);

    // step 3: update all the child elements to the tallest height
    Array.from(children).forEach(
      (x: HTMLElement) => (x.style.height = `${maxHeight}px`)
    );
  }
}
