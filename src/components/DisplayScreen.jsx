import React from "react";

import Header from "./Header";
import SearchPanel from "./SearchPanel";
import DataTable from "./DataTable";
import Footer from "./Footer";

const DisplayScreen = () => {
  return (
    <main>
      <div className="display-screen right">
        <div className="display-top">
          <Header />
          <SearchPanel />
        </div>
        <DataTable />
        <Footer />
      </div>
    </main>
  );
};

export default DisplayScreen;
