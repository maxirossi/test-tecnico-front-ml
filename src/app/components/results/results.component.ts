import { Component, OnInit, Input } from '@angular/core';
//import {Component, Input, OnDestroy, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ml-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.sass']
})
export class ResultsComponent implements OnInit {

  constructor() { }

  @Input() arrProducts : Array<any> = [];

  ngOnInit(): void {
  }

}
