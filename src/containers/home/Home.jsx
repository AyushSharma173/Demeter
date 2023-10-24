import React from "react";
import Layout from "../../layout/Layout";

import HomeBanner from "../../components/Banner/Banner";
import CategoryBar from "../../components/CategoryBar/CategoryBar";
import MostSearched from "../../components/MostSearched/MostSearched";

import itemsMS from "../../mocks/prod-ms.json";

const Home = () => {
  return (
    <Layout>
      <HomeBanner />
      <CategoryBar variant="shadow" />
      <MostSearched items={itemsMS} />
    </Layout>
  );
};

export default Home;
