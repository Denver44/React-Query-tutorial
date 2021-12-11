import InfiniteScroll from "react-infinite-scroller";
import Person from "components/people/Person";
import { fetchPeople } from "components/api/helper.js";

const InfinitePeople = () => {
  // TODO: get data for InfiniteScroll via React Query
  return <InfiniteScroll />;
};

export default InfinitePeople;
