import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <meta name="title" content="Vicious Streak Salon" />
        <meta
          name="description"
          content="Vicious Streak Salon by Vidalia Arellano. I'm a hair vivids specialist and a hair extension specialist located in Santa Ana, California. Certified with Bellami Hair."
        />
        <meta name="author" content="Vidalia Arellano" />
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.viciousstreaksalon.com" />
        <meta property="og:title" content="Vicious Streak Salon" />
        <meta
          property="og:description"
          content="Vicious Streak Salon by Vidalia Arellano. I'm a hair vivids specialist and a hair extension specialist located in Santa Ana, California. Certified with Bellami Hair."
        />
        <meta
          property="og:image"
          content="/profile/salon.jpg"
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.viciousstreaksalon.com"
        />
        <meta property="twitter:title" content="Vicious Streak Salon" />
        <meta
          property="twitter:description"
          content="Vicious Streak Salon by Vidalia Arellano. I'm a hair vivids specialist and a hair extension specialist located in Santa Ana, California. Certified with Bellami Hair."
        />
        <meta
          property="twitter:image"
          content="/profile/salon.jpg"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
