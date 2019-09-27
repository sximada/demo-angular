import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { KeycloakService } from './keycloak.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title = 'demo-angular';
  profile: User;

  constructor(private keycloakService: KeycloakService) {}

  public ngOnInit(): void {
    this.profile = this.keycloakService.getUser();
  }
}
