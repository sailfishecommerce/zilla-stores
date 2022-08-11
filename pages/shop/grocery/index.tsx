/* eslint-disable @next/next/no-img-element */
import { InstantSearch, Configure } from "react-instantsearch-dom";

import searchClient from "@/lib/algoliaConfig";
import GroceryLayout from "@/layout/GroceryLayout";
import Breadcrumb from "@/components/UI/Breadcrumb";
import InfiniteProductHits from "@/components/Algolia/InfiniteHits";

const linksArray = [
  { text: "Home", link: "/" },
  { text: "Product Catalog", link: null },
];

export default function GroceryPage({ collection, category }: any) {
  console.log("collection, category", collection, category);
  return (
    <GroceryLayout title="Grocery Catalog">
      <InstantSearch
        indexName="LIVEHEALTHY_PRODUCTION_INDEX"
        searchClient={searchClient}
      >
        <Configure
          hitsPerPage={16}
          clickAnalytics
          distinct
          enablePersonalization={true}
        />
        <section className="ps-lg-4 pe-lg-3 pt-4">
          <div className="px-3 pt-2">
            <Breadcrumb linksArray={linksArray} className="text-black" />

            <section className="d-md-flex justify-content-between align-items-center mb-4 pb-2">
              <h1 className="h2 mb-3 mb-md-0 me-3">Product catalog</h1>
              <div className="d-flex align-items-center">
                <div className="d-none d-sm-block py-2 fs-sm text-muted text-nowrap me-2">
                  Sort by:
                </div>
                <ul className="nav nav-tabs fs-sm mb-0">
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      Popular
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Cheap
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Expensive
                    </a>
                  </li>
                </ul>
              </div>
            </section>
            {/*<!-- Product grid-->*/}
            <InfiniteProductHits minHitsPerPage={16} />
          </div>
        </section>
      </InstantSearch>
    </GroceryLayout>
  );
}
