import swellNode from "@/lib/swellNode";

export default async function getAStoreCategory(categoryId: string) {
  const { swell, initSwell } = swellNode();
  initSwell();
  return await swell.get(`/categories/${categoryId}`, {
    where: {
      store_name: "livehealthy_store",
    },
  });
}
