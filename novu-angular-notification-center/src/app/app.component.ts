import { Component } from '@angular/core';

const SUBSCRIBER_ID = 'SUBSCRIBER_ID';
const APPLICATION_ID = 'APPLICATION_ID';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'novu-angular-notification-center';

  subscriberId = SUBSCRIBER_ID;
  applicationIdentifier = APPLICATION_ID;

  sessionLoaded = (data: unknown) => {
    console.log('loaded -->', { data });
  };
  popoverConfig = { offset: 10 };
}
