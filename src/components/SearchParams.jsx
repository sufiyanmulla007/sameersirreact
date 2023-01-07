import React from "react";
import { useSearchParams } from "react-router-dom";
const SearchParams=()=>{
const[SearchParams,SetSearchParams]=useSearchParams();
console.table(SearchParams.get("age"));
console.table(SearchParams.get("city"));
const age=SearchParams.get("age");
const city=SearchParams.get('city');
return(
    <>
    <div>
    <h3>SearchParams use react router Dom</h3>
    <h2>my age is:{age}</h2>
    <h3>my city name is:{city}</h3>
    
    </div>
    </>
    );
};
export default SearchParams;