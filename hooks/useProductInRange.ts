import axios from "axios";
import { useQuery, useQueryClient } from "react-query";

type queryDataType = { query: any; id: string };

export default function useProductInRange(queryData: queryDataType) {
  const { id, query } = queryData;
  const queryClient = useQueryClient();

  function getProductInRange() {
    return axios.post("/api/get-products-by-ratings", { query });
  }

  const { data, status, error } = useQuery(
    `getProductInRange-${id}`,
    getProductInRange,
    {
      staleTime: Infinity,
      placeholderData: () =>
        queryClient.getQueryData(`getProductInRange-${id}`),
    }
  );

  return [data?.data, status, error];
}
