/* eslint-disable @next/next/no-img-element */
import React from "react";
import CarouselWrapper from "./CarouselWrapper";

const imgStyles = {
    width: "100%",
    height: "320px",
    objectFit: "cover",
};

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center",
    height: "340px",
};

const imgs = [
    "http://d2ji2mue1p384z.cloudfront.net/img/480x360/162951.jpg",
    "http://d2ji2mue1p384z.cloudfront.net/img/480x360/162986.jpg",
    "http://d2ji2mue1p384z.cloudfront.net/img/480x360/220048.jpg",
];

const loadingImage =
    "data:image/gif;base64,\
  R0lGODlhAQABAPAAAMzMzAAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==";

const clickEvent = (info) => {
    console.log("click", info);
};

const settings = {
    loop: true,
    responsive: {},
    controlsText: ["◀", "▶"],
    mouseDrag: true,
    lazyload: true,
    edgePadding: 100,
    gutter: 5,
};

export default function SliderApp() {
    return (
        <div style={styles}>
            <CarouselWrapper onClick={() => {}} settings={settings}>
                {imgs.map((el, index) => (
                    <div key={index} style={{ position: "relative" }}>
                        <img
                            className="tns-lazy-img"
                            data-src={el}
                            src={loadingImage}
                            alt=""
                            style={imgStyles}
                        />
                    </div>
                ))}
            </CarouselWrapper>
        </div>
    );
}
