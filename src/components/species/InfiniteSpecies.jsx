import InfiniteScroll from "react-infinite-scroller";
import Species from "components/species/Species";
import { fetchSpecies } from "components/api/helper.js";

const InfiniteSpecies = () => {
  // TODO: get data for InfiniteScroll via React Query
  return <InfiniteScroll />;
};

export default InfiniteSpecies;
