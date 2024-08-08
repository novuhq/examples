import { workflow } from '@novu/framework';
import { renderEmail } from '../../emails/welcome-email';
import i18next from 'i18next';

i18next.init({
  fallbackLng: 'en',
  resources: {
    en: {
      translation: {
        welcomeEmailSubject: 'Welcome {{name}} to Facebook',
        welcomeEmailBody:
          'Welcome to Facebook, you can now edit your profile {{username}} and connect with your friends and family',
      },
    },
    de: {
      translation: {
        welcomeEmailSubject: 'Willkommen {{name}} auf Facebook',
        welcomeEmailBody:
          'Willkommen bei Facebook. Sie können jetzt Ihr Profil {{username}} bearbeiten und mit Ihren Freunden und Ihrer Familie in Kontakt treten',
      },
    },
  },
});

export const welcomeWorkflow = workflow(
  'welcome-workflow',
  async ({ step, subscriber }) => {
    await step.email('welcome-email', async () => {
      const t = i18next.getFixedT(subscriber.locale);

      const subject = t('welcomeEmailSubject', {
        name: subscriber.name,
      });
      const body = t('welcomeEmailBody', { username: subscriber.username });
      return {
        subject,
        body: renderEmail(subject, body),
      };
    });
  }
);
