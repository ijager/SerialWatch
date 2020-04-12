import { Component, OnInit, Input, ChangeDetectionStrategy, AfterViewInit, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'sw-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent implements OnInit, AfterViewInit {
  @ViewChild('scrollframe', {static: false}) scrollFrame: ElementRef;
  @ViewChildren('line') itemElements: QueryList<any>;

  @Input() lines: string[] = [];
  @Input() autoScrollThreshold = 100;

  private scrollContainer: HTMLElement;
  private isNearBottom = true;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.scrollContainer = this.scrollFrame.nativeElement;
    this.itemElements.changes.subscribe(_ => this.onItemElementsChanged());
  }

  private onItemElementsChanged(): void {
    if (this.isNearBottom) {
      this.scrollToBottom();
    }
  }

  private scrollToBottom(): void {
    this.scrollContainer.scroll({
      top: this.scrollContainer.scrollHeight,
      left: 0,
      behavior: 'smooth'
    });
  }

  private isUserNearBottom(): boolean {
    const position = this.scrollContainer.scrollTop + this.scrollContainer.offsetHeight;
    const height = this.scrollContainer.scrollHeight;
    return position > height - this.autoScrollThreshold;
  }

  scrolled(event: any): void {
    this.isNearBottom = this.isUserNearBottom();
  }

}
