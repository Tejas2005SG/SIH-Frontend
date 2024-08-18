'use client'
import React,{useState} from 'react';
import Navbar from "@/app/components/Navbar/Navbar.js";
import Header from "@/app/components/Header/header.js";
import { SearchBar } from "@/app/components/SearchBar/SearchBar.js";
import  {SearchResultsList}  from "@/app/components/SearchBar/SearchResultsList.js";

function Homepage() {

  const [results, setResults] = useState([]);
  return (
    <div className='w-[100vw] h-[100vh] bg-[#ffffff]'>
      <div>
      <Navbar/>
      <Header/>

      <div className="search-bar-container text-black">
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && <SearchResultsList results={results} />}
      </div>

      </div>
          
      
    </div>
  )
}

export default Homepage