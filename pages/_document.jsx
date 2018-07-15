import PropTypes from 'prop-types';
import React from 'react';
import Document, {
  Head,
  Main,
  NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class QuoiQuoiDocument extends Document {
  static propTypes = {
    styleTags: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    ogTitle: PropTypes.string.isRequired,
  }

  static defaultProps = {
    title: '',
    description: '我們的品牌：quoi quoi，公司名稱：布知道有限公司(布知道工作室)。',
    ogTitle: 'quoi quoi 布知道營業項目：包包設計、客製化手作包、手作教室、布料',
  }

  static async getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();

    return {
      ...page,
      styleTags,
    };
  }

  render() {
    const {
      title,
      description,
      ogTitle,
      styleTags,
    } = this.props;
    return (
      <html lang="zh-TW">
        <Head>
          <title>
            {title}
          </title>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=Edge,chrome=1" />
          <meta name="description" content={description} />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:domain" content="quoiquoi.tw" />
          <meta name="twitter:creator" content="@quoiquoi" />
          <meta property="og:title" content={ogTitle} />
          <meta property="og:url" content="https://quoiquoi.tw/" />
          <meta property="og:description" content={description} />
          <meta property="og:type" content="website" />
          <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css" />
          <link rel="alternate" hrefLang="en" href="https://quoiquoi.tw/en" />
          <link rel="alternate" hrefLang="zh-TW" href="https://quoiquoi.tw/" />
          <link rel="stylesheet" media="all" href="https://quoiquoi.tw/assets/unify-2ce8270331e9c97df8fd61f2fcac547e55b8058371e1eaadfcf4e0169068ae24.css" />
          <link rel="shortcut icon" type="image/x-icon" href="https://quoiquoi.tw/assets/favicon-766e47d8c5a10d8e4ba737d98502f56f6aa7852600535dc972d9e777930215fb.ico" />
          {styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
