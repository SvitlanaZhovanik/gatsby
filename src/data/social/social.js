import { FiFacebook } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';

const fullSocial = [
  {
    id: '_1',
    name: {
      en: 'Link to linkedin',
      ru: 'Ссылка на linkedin',
      uk: 'Посилання на linkedin',
    },
    Component: FiLinkedin,
    href: 'https://www.linkedin.com/',
  },
  {
    id: '_2',
    name: {
      en: 'Link to facebook',
      ru: 'Ссылка на facebook',
      uk: 'Посилання на facebook',
    },
    Component: FiFacebook,
    href: 'https://www.facebook.com/',
  },
  {
    id: '_3',
    name: {
      en: 'Link to instagram',
      ru: 'Ссылка на instagram',
      uk: 'Посилання на instagram',
    },
    Component: FiInstagram,
    href: 'https://instagram.com/',
  },
];

export const getSocialData = contactsObject =>
  fullSocial.map(contactData => ({
    ...contactData,
    href: contactsObject[contactData.id],
  }));
