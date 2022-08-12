import aa from "search-insights";
import { useAppSelector } from "@/hooks/useRedux";

export default function useAlgoliaEvents() {
  const { userToken }: any = useAppSelector((state) => state.user);

  aa("init", {
    appId: `${process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID}`,
    apiKey: `${process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY}`,
    useCookie: false,
  });

  function clickedObjectIDsAfterSearch(
    insights: (
      arg0: string,
      arg1: { eventName: string; userToken: string; queryID: string }
    ) => void,
    queryID: string
  ) {
    insights("clickedObjectIDsAfterSearch", {
      eventName: "Product Clicked after searching",
      userToken,
      queryID,
    });
  }

  function clickedProductAfterSearch(
    queryID: string,
    objectIDs: string[],
    positions: number[]
  ) {
    aa("clickedObjectIDsAfterSearch", {
      userToken,
      eventName: "Product clicked after a search",
      index: "LIVEHEALTHY_PRODUCTION_INDEX",
      queryID,
      objectIDs,
      positions,
    });
  }

  function itemViewed(eventName: string, objectIDs: string[] | any) {
    aa("viewedObjectIDs", {
      eventName,
      userToken,
      index: "LIVEHEALTHY_PRODUCTION_INDEX",
      objectIDs,
    });
  }

  function filterViewed(filters: string[]) {
    aa("viewedFilters", {
      eventName: "filter_viewed",
      userToken,
      index: "LIVEHEALTHY_PRODUCTION_INDEX",
      filters,
    });
  }

  function filterClicked(filters: string[]) {
    aa("clickedFilters", {
      eventName: "filter_clicked",
      userToken,
      index: "LIVEHEALTHY_PRODUCTION_INDEX",
      filters,
    });
  }

  function productAddedToCart(objectIDs: string[] | any) {
    aa("convertedObjectIDs", {
      eventName: "product_added_to_cart",
      userToken,
      index: "LIVEHEALTHY_PRODUCTION_INDEX",
      objectIDs,
    });
  }

  function productAddedToCartAfterSearch(
    queryID: string,
    objectIDs: string[] | any
  ) {
    aa("convertedObjectIDsAfterSearch", {
      userToken,
      index: "LIVEHEALTHY_PRODUCTION_INDEX",
      eventName: "product_added_to_cart_after_search",
      queryID,
      objectIDs,
    });
  }

  function itemClicked(eventName: string, objectIDs: string[]) {
    aa("clickedObjectIDs", {
      eventName,
      userToken,
      index: "LIVEHEALTHY_PRODUCTION_INDEX",
      objectIDs,
    });
  }

  return {
    clickedObjectIDsAfterSearch,
    filterViewed,
    filterClicked,
    productAddedToCart,
    itemClicked,
    productAddedToCartAfterSearch,
    itemViewed,
    clickedProductAfterSearch,
  };
}
