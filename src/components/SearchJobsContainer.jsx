import React from 'react'
import SearchBar from './SearchBar'
export default function SearchJobsContainer() {
  return (
    <div className={`h-auto flex flex-col items-center p-5 bg-gradient-to-r from-white to-teal-500`}>
        <h2 className={`font-[600] text-3xl`}>Find Jobs</h2>
        <p className={`text-xl font-[400] mb-4`}>55 Jobs Available For You Now</p>
        <SearchBar bg={"#1F1F1F"}/>
    </div>
  )
}
