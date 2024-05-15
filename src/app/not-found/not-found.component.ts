import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {
  private redirectCount = 10;

  constructor(public router: Router) { }

  public get redirectMessage(): string {
    if (this.redirectCount <= 0) {
      return 'Redirecting ...';
    }

    return `Redirecting you to home page in ${this.redirectCount}.`;
  }

  public ngOnInit(): void {
    setInterval(() => {
      this.redirectCount--;

      if (this.redirectCount <= 0) {
        this.router.navigate(['']);
      }
    }, 1000);
  }
}
