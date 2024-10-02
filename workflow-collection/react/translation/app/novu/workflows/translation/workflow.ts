import { workflow } from '@novu/framework';
import { renderEmail } from '../../emails/welcome-email';
import { createInstance, InitOptions } from 'i18next';
import { z } from 'zod';

const i18nOptions: InitOptions = {
  resources: {
    en: {
      translation: {
        welcomeEmailSubject: 'Welcome to Twitch, {{username}}!',
        welcomeEmailIntroduction:
          'We’re glad you could join us. Twitch has a huge, passionate community ready to watch and celebrate all the things you’re into, and we’ve saved a seat just for you.',
        linkText: 'WATCH NOW',
        welcomeEmailConclusion:
          'If you want to watch it, someone on Twitch streams it: games, anime, fitness, cosplay, esports, cooking, music, meditation. Take a look around, find a few channels to call home, and cozy up in chat.',
      },
    },
    de: {
      translation: {
        welcomeEmailSubject: 'Willkommen bei Twitch, {{username}}!',
        welcomeEmailIntroduction:
          'Wir freuen uns, dass Sie sich uns anschließen konnten. Twitch hat eine riesige, leidenschaftliche Community, die bereit ist, alles zu sehen und zu feiern, was Sie interessiert, und wir haben einen Platz nur für Sie reserviert.',
        linkText: 'JETZT ANSEHEN',
        welcomeEmailConclusion:
          'If you want to watch it, someone on Twitch streams it: games, anime, fitness, cosplay, esports, cooking, music, meditation. Take a look around, find a few channels to call home, and cozy up in chat.',
      },
    },
  },
};

export const welcomeWorkflow = workflow(
  'welcome-workflow',
  async ({ step, subscriber }) => {
    await step.email(
      'welcome-email',
      async (controls) => {
        const i18next = createInstance(i18nOptions);

        const translate = i18next.getFixedT(
          subscriber?.locale || controls.defaultLocale
        );

        const subject = translate('welcomeEmailSubject', {
          username: subscriber?.username || 'Novu',
        });
        const welcomeEmailIntroduction = translate('welcomeEmailIntroduction');
        const linkText = translate('linkText');
        const welcomeEmailConclusion = translate('welcomeEmailConclusion');
        return {
          subject,
          body: renderEmail(
            subject,
            welcomeEmailIntroduction,
            linkText,
            welcomeEmailConclusion
          ),
        };
      },
      {
        controlSchema: z.object({
          defaultLocale: z.string().default('en').optional(),
        }),
      }
    );
  }
);
