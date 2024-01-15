import { Component } from '@angular/core';

const SUBSCRIBER_ID = '651ece9ae1b82d64b388943a';
const APPLICATION_ID = 'Kzaqr_H9HtvD';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'novu-angular-notification-center';

  subscriberId = SUBSCRIBER_ID;
  applicationIdentifier = APPLICATION_ID;
  backendUrl = 'https://api.novu.co';
  socketUrl = 'https://ws.novu.co';

  sessionLoaded = (data: unknown) => {
    console.log('loaded -->', { data });
  };
  popoverConfig = { offset: 10 };
}
