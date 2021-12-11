import axios from "components/api/axios";

const fetchPeople = async () => {
  const response = await axios.get("/people/");
  return response;
};

const fetchSpecies = async () => {
  const response = await axios.get("/species/");
  return response;
};

export { fetchPeople, fetchSpecies };
