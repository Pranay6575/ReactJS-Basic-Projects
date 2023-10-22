import styled from "styled-components";
import FilterContainer from "./components/FilterContainer";
import { useEffect, useState } from "react";
import axios from "axios";
import SearchResult from "./components/SearchResult";

export const BASE_URL = "http://localhost:9000";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [ filterData, setFilterdata] = useState(null);

  const fetchFoodData = async () => {
    setLoading(true);
    try {
      let res = await axios.get(BASE_URL);
      setData(res.data);
      setLoading(false);
    } catch (err) {
      setError("Error Occur");
    }
  };

  

  useEffect(() => {
    fetchFoodData();
  }, []);

  if (error) return <div>{error}</div>;
  if (loading) return <div>Loading....</div>;

  return (
    <>
      <Container>
        <HeaderSection>
          <div className="logo">
            <img src="/Foody Zone.svg" alt="logo image" />
          </div>
          <div className="searchInput">
            <input placeholder="Search Food..." onChange={serachFood} />
          </div>
        </HeaderSection>
        <FilterContainer />
      </Container>
      <SearchResult foodData={data} />
    </>
  );
};

export default App;

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const HeaderSection = styled.section`
  height: 150px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;

  .searchInput {
    input {
      background-color: #454242;
      color: white;
      border: 1px solid #c14444;
      border-radius: 5px;
      height: 40px;
      width: 285px;
      font-size: 16px;
      padding: 0 15px;
    }
  }
`;
