import React, { Suspense } from "react";
import Search from "./_components/Search";

const SearchPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Search />
      </Suspense>
    </div>
  );
};

export default SearchPage;
