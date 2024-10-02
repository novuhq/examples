import { Component } from '@angular/core';
import { styles } from './styles';
const SUBSCRIBER_ID = 'SUBSCRIBER_ID';
const APPLICATION_ID = 'APPLICAITON_IDENTIFIER';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'novu-angular-notification-center';

  // required props for notification center
  subscriberId = SUBSCRIBER_ID;
  applicationIdentifier = APPLICATION_ID;

  // optional props for notification center
  backendUrl = 'https://api.novu.co';
  socketUrl = 'https://ws.novu.co';
  subscriberHash = 'SUBSCRIBER_HASH';
  showUserPreferences = true;
  allowedNotificationActions = true;
  popoverConfig = { offset: 10 };
  i18n = {
    lang: 'en',

    translations: {
      poweredBy: 'Powered By',
    },
  };

  stores = [
    {
      storeId: 'default_store',
    },
    /** storeId and feedIdentifier must be identical and should be copied from In-App editor feed */
    {
      storeId: 'product-updates',
      query: { feedIdentifier: 'product-updates' },
    },
    {
      storeId: 'user-activity',
      query: { feedIdentifier: 'user-activity' },
    },
  ];

  tabs = [
    { name: 'All Notifications', storeId: 'default_store' },
    // name can be any custom name
    { name: 'Product Updates', storeId: 'product-updates' },
    { name: 'User Activity', storeId: 'user-activity' },
  ];
  styles = styles;

  sessionLoaded = (data: unknown) => {
    console.log('loaded -->', { data });
  };

  notificationClicked = (message: any) => {
    console.log('Notification clicked:', message);
  };

  unseenCountChanged = (count: number) => {
    console.log('Unseen count changed', count);
  };

  actionClicked = (
    workflowTriggerIdentifier: string,
    actionButtonType: string,
    message: any
  ) => {
    console.log(
      'Action clicked - workflowTriggerIdentifier:',
      workflowTriggerIdentifier
    );
    console.log('Action clicked - actionButtonType:', actionButtonType);
    console.log('Action clicked - message:', message);
  };

  tabClicked = (data: any) => {
    console.log('Tab clicked:', data);
  };

  preferenceFilter = (preferences: any) => {
    if (preferences.template.tags.includes('don-not-show-tag')) {
      return false;
    } else {
      return true;
    }
  };
}
