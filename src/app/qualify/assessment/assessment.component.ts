import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss']
})
export class AssessmentComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  showLabel = true;
  showCommentView = false;

  ngOnInit(): void {
  }

  showComment(){
    this.showLabel = this.showLabel;
    this.showCommentView = !this.showCommentView;
  }

}
