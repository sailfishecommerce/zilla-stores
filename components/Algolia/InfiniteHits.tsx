import { useEffect, useRef } from "react";
import { connectInfiniteHits } from "react-instantsearch-dom";

import ShopLoader from "@/components/Loader/ShopLoader";
import type { hitType } from "@/types";
import GroceryProduct from "@/components/Product/GroceryProduct";

interface Props {
  hits: hitType[];
  hasMore: boolean;
  refineNext: () => void;
  minHitsPerPage: number;
  animation?: boolean;
}

function InfiniteHits({ hits, hasMore, refineNext }: Props) {
  const filterHits = hits.filter((fhits) => fhits.images.length !== 0);
  const sentinelRef = useRef(null);

  useEffect(() => {
    if (!sentinelRef.current) return;
    function onSentinelIntersection(entries: any[]) {
      entries.forEach((entry) => {
        if (entry.isIntersecting && hasMore) {
          refineNext();
        }
      });
    }

    let observer: any = new IntersectionObserver(onSentinelIntersection);
    observer.observe(sentinelRef.current);

    return () => {
      observer.disconnect();
    };
  }, [hasMore, refineNext, sentinelRef]);

  return (
    <>
      {filterHits.length > 0 ? (
        <div className="ais-InfiniteHits">
          <ul className="ais-InfiniteHits-list">
            <div className="row g-0 mx-n2">
              {filterHits.map((hit: any) => (
                <div
                  key={hit.id}
                  className="col-xl-3 col-lg-6 col-md-4 col-sm-6 px-2 mb-3"
                >
                  <GroceryProduct product={hit} />
                </div>
              ))}
            </div>
            <li className="ais-InfiniteHits-sentinel" ref={sentinelRef} />
          </ul>
          <style jsx>
            {`
              ul.ais-InfiniteHits-list {
                padding: 0px;
                list-style: none;
              }
            `}
          </style>
        </div>
      ) : (
        <ShopLoader />
      )}
    </>
  );
}

const InfiniteProductHits = connectInfiniteHits(InfiniteHits);

export default InfiniteProductHits;
