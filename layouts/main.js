import React from 'react';
import Head from 'next/head';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

class MainLayouts extends React.Component {
  constructor (props) {
    super(props);
  }

  render (children) {
    return (
      <div>
        <Head>
          <title>star wars</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="stylesheet" href="../static/fontawesome/css/fontawesome-all.css" />
          <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Anton" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Quicksand" rel="stylesheet" />
          <link href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.3.15/slick.css" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Chau+Philomene+One" rel="stylesheet" />
          <link href="../static/css/nprogress.css" rel="stylesheet" />
          <link href="../static/css/general.css" rel="stylesheet" />
          <link href="../static/css/react-drawer.css" rel="stylesheet" />
          <link href="../static/css/compile/main.css" rel="stylesheet" />

          <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        </Head>
        <div className="container-fluid">
          <Header />
          {children}
          <Footer />
        </div>
      </div>
    );
  }
}

export default MainLayouts;
