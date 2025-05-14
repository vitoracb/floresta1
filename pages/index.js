import { IntlProvider, FormattedMessage } from 'react-intl';

const messages = {
  'pt-BR': { welcome: 'Bem-vindo ao app!' },
  en: { welcome: 'Welcome to the app!' },
};

export default function Home() {
  return (
    <IntlProvider locale="pt-BR" messages={messages['pt-BR']}>
      <h1><FormattedMessage id="welcome" defaultMessage="Bem-vindo ao app!" /></h1>
    </IntlProvider>
  );
} 