import React, { useState, useEffect } from 'react'
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import styles from './App.css'
import Cards from "./components/Cards/Cards"
import Pagination from "./components/Pagination/Pagination"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import CardCharacter from './components/Cards/CardCharacter'

function App() {
  return(
    <Router>
      <div className='App'></div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}
        ></Route>
        <Route path="/:id" element={<CardCharacter />} />
      </Routes>
    </Router>
  )
}
let arrayCards=[];
const Home = () => {
  let [pageNumber, setPageNumber] = useState(1);
  let [fetchedData, updateFetchedData ] = useState([]);
  let {info, results} = fetchedData;
  let [status, updateStatus] = useState("");
  let [gender, updateGender] = useState("");
  let [species, updateSpecies] = useState("");
  let [search, setSearch] = useState("");
  let [cards, setCards]= useState([]);
let [currentPage, setCurrentPage] = useState(1);
let [fetching, setFetching] = useState(true);
let [totalCount, setTotalCount] = useState(0);
const [showPage, setShowPage] = useState(false);
const [isLoading, setLoading] = useState(false);
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

// console.log('fetch', fetchedData);
// useEffect(() => { if(fetching) {
//   setTimeout(() =>  (async function() {
    
//     console.log('fetching')
//     axios.get(`https://rickandmortyapi.com/api/character/?page=${currentPage}&name=${search}&status=${status}&gender=${gender}&species=${species}`)
//     .then(response => {
      
//       setCards(response.data)
//       console.log("cards",cards)
//       updateFetchedData(response.data)
//       setCurrentPage(prevState=> prevState+1)
      
//         console.log('data2',response.data)
//       setTotalCount(response.data.info.count)
//     }
//     )
//     .finally(()=>{setFetching(false)})
//   })(), 1000)
 
// }}, [fetching]);
  useEffect(() => { 
    setLoading(true);
    setTimeout(()=>{
      (async function() {
        let data = await fetch(api)
        .then(response => response.json());
        updateFetchedData(data);
        setLoading(false);
        
      })()
    },1000)
  }, [api]);
useEffect(()=> {
  document.addEventListener('scroll', scrollHadler);
  return function() {
    document.removeEventListener('scroll', scrollHadler)
  }
}, [])
const scrollHadler = (e) => {
  if( e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop+window.innerHeight)<100 ) {
    setFetching(true)
  }
};

   const [showButton, setShowButton] = useState(false);
   useEffect(() => {
     window.addEventListener("scroll", () => {
       if (window.pageYOffset > 300) {
         setShowButton(true);
       } else {
         setShowButton(false);
       }
     });
   }, []);
   const scrollToTop = () => {
     window.scrollTo({
       top: 0,
       behavior: 'smooth'
     });
   };
  //  useEffect(()=>{
  //     let btnPage = document.getElementById('Page');
  //     btnPage.addEventListener('click', ()=>{
  //       setShowPage(false);
  //     })
  //  },[])

  return (
  
    <div className="App bg">
      <div className="container">
      {showButton && (
         <button onClick={scrollToTop} className="back-to-top">
         <div className='arrow_top'>&#8679;</div>
       </button>
      )}
      
            <div className="row">
            
            {isLoading ?<div className='spinner'></div>:<Cards page="/" results={results} isLoading/>}
            
            </div>
            
          </div>
          <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} info = {info}/>
          
    </div>
  );}
  
  

export default App;
