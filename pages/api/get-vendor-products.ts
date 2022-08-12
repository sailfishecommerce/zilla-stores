import type { NextApiRequest, NextApiResponse } from "next";

import swellNode from "../../lib/swellNode";

export default async function VendorProductHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { swell, initSwell } = swellNode();
  initSwell();
  const vendor = req.body.vendor;
  switch (req.method) {
    case "POST": {
      return await swell
        .get("/products", {
          where: { select_store: "livehealthy", vendor },
          limit: 30,
        })
        .then((response: any) => {
          return res.status(200).send(response);
        });
    }
    default:
      return null;
  }
}
