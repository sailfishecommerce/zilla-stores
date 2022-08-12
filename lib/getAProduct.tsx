import swellNode from "@/lib/swellNode";

export default async function getAProduct(productId: string) {
  const { swell, initSwell } = swellNode();
  initSwell();
  return await swell.get(`/products/${productId}`, {
    where: { select_store: "livehealthy", active: true },
  });
}
