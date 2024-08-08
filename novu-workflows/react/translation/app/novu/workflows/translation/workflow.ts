import { workflow } from '@novu/framework';
import { renderEmail } from '../../emails/welcome-email';
import i18next from 'i18next';

i18next.init({
  fallbackLng: 'en',
  resources: {
    en: {
      translation: require('./locales/en.json'),
    },
    de: {
      translation: require('./locales/de.json'),
    },
  },
});

export const welcomeWorkflow = workflow(
  'welcome-workflow',
  async ({ step, subscriber }) => {
    await step.email('welcome-email', async () => {
      i18next.getFixedT(subscriber.locale);

      const subject = i18next.t('welcomeEmailSubject', {
        name: subscriber.name,
      });
      const body = i18next.t('welcomeEmailBody', { name: subscriber.name });
      return {
        subject,
        body: renderEmail(subject, body),
      };
    });
  }
);
