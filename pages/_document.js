import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="icon" type="image/x-icon" href="/logo.jpg"/>
            </Head>
            <body className="antialiased">
            <Main/>
            <NextScript />
            </body>
        </Html>
    );
}