import Head from "next/head";
import { PropsWithChildren } from "react";

import FoodDeliveryFooter from "../components/FoodDeliveryFooter";
import FoodDeliveryHeader from "../components/FoodDeliveryHeader";

interface FoodDeliveryLayout {
    title: string;
    children: JSX.Element;
}
export default function FoodDeliveryLayout({
    title,
    children,
}: PropsWithChildren<FoodDeliveryLayout>) {
    return (
        <body className="handheld-toolbar-enabled">
            <Head>
                <meta charSet="utf-8" />
                <title>Bandicoot | {title}</title>
                {/* SEO Meta Tags*/}
                <meta
                    name="description"
                    content="Bandicoot - Bootstrap E-commerce Template"
                />
                <meta
                    name="keywords"
                    content="bootstrap, shop, e-commerce, market, modern, responsive,  business, mobile, bootstrap, html5, css3, js, gallery, slider, touch, creative, clean"
                />
                <meta name="author" content="Bandicoot Studio" />
                {/* Viewport*/}
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                {/* Favicon and Touch Icons*/}
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
                <link
                    rel="mask-icon"
                    color="#fe6a6a"
                    href="/safari-pinned-tab.svg"
                />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="theme-color" content="#ffffff" />
            </Head>
            <main className="page-wrapper">
                <FoodDeliveryHeader />
                {children}
            </main>
            <FoodDeliveryFooter />
        </body>
    );
}
