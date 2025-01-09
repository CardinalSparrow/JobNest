import React from 'react'
import SearchJobsContainer from '../components/SearchJobsContainer'
//import Footer from '../components/Footer'
import styles from './findJobs.module.css'
import JobOpeningContainer from '../components/JobOpeningContainer'
import Footer from '../components/Footer'
export default function FindJobs() {
  return (
    <div className={styles.mainCont}>
      <div className='lg:m-20'>
      <SearchJobsContainer/>
      <div className='text-center mt-5 text-[#1f1f1f]'>
        <p className='font-[600] text-2xl'>Jobs suggested for you</p>
        <p className='text-grey m-2'>Lorem ipsum dolor sit amet, consectetur tremor adipiscing elit. Mauris in mauris semper,</p>
      </div>
      <JobOpeningContainer/>
      </div>
      <Footer/>
    </div>
  )
}
