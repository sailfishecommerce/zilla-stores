import swell from "swell-node";

export default function swellNode() {
  function initSwell() {
    return swell.init(
      "sailfish-e-commerce-limited",
      `${process.env.NEXT_PUBLIC_SWELL_SECRET_KEY}`
    );
  }
  return { initSwell, swell };
}
