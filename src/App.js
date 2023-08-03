
import React from "react";
import { ReactDOM } from "react-dom/client";
import Header from "./AllTrails/Header";
import Main from "./AllTrails/Main";
import Footer from "./AllTrails/Footer";
import "./App.css"

export default function App(){
  return(
    <div>
      
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}

































// import React from "react";
// //import { ReactDOM } from "react-dom/client";
// // // import Navbar from "./Components/Navbar";
// // // import Main from "./Components/Main";
// // import Main from "./DigitalBusinessCardComponent/Main";
// // import Details from "./DigitalBusinessCardComponent/Details";
// // import Footer from "./DigitalBusinessCardComponent/Footer";
// // import './App.css';
// // import Jokes from "./Jokes";
// // import data from "./data.js";
// // // import Navbar from "./Navbar";
// // import Card from "./Card";
// // import TravelData from "./TravelJournalComponent/TravelData";
// // import TravelCard from "./TravelJournalComponent/TravelCard";
// // import Navbar from "./TravelJournalComponent/Navbar";
// // import MemeHeader from "./MemeCreator/MemeHeader";
// // import MemeUserData from "./MemeCreator/MemeUserData";
// // import Count from "./Count";




// //current date and time
// // Sample Output : Today is : Tuesday.
// // Current time is : 10 PM : 30 : 38


// export default function App(){
  
//   let newDate = new Date()
  
//   let day=newDate.getDay()
//   let dayArray=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
//   let curentDay = dayArray[day]
//   let hours = newDate.getHours()
//   let minutes = newDate.getMinutes()
//   let seconds = newDate.getSeconds()
  
//   let date=new Date().getDate()
//   let dd = date<10 ? "0"+date : date

//   let month = new Date().getMonth() + 1
//   let mm = month<10 ? "0"+1 : mm
//   console.log(mm)

//   let yyyy = new Date().getFullYear()
//   console.log("mm-dd-yyyy :" + mm + "-" + dd + "-" + yyyy)
//  //mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
 
//  let word = "w3resource"
//  console.log(word)

//   return(
//     <div>
//         <h1>Today is : {curentDay}.</h1>
//         <h1>Current time is : {hours} PM : {minutes} : {seconds}</h1>
//     </div>
//   )
// }















// // export default function App(){
// //   const [count, setCount] = React.useState(0)
    
// //     function add() {
// //         setCount(prevCount => prevCount + 1)
// //     }
    
// //     function subtract() {
// //         setCount(prevCount => prevCount - 1)
// //     }
    
   
// //     return (
// //         <div className="counter">
// //             <button className="counter--minus" onClick={subtract}>–</button>
            
// //             <button className="counter--plus" onClick={add}>+</button>
// //         </div>
// //     )
// // }
























// // const TravelJournal = TravelData.map(item =>{
// //   return(
// //     <TravelCard
// //         key={item.id}
// //         item={item}    
// //     />
// //   )
// // })
// // console.log(TravelJournal)
// // export default function App(){
// //   return(
// //     <div>
// //       <Navbar/>
// //       <h1>Welcome to Travel Journal</h1>
      
// //       {TravelJournal}
// //     </div>
// //   )
// // }




















// // export default function App() {
// //             // <Hero />
// //             const CardComponents = data.map((card)=>{
// //               return(
// //               <Card  
// //                 img={card.coverImg}
// //                 rating={card.stats.rating}
// //                 reviewCount={card.stats.reviewCount}
// //                 location={card.location}
// //                 title={card.title}
// //                 price={card.price}
// //                 />
// //               )
// //             })
// //             console.log(CardComponents)

// //     return (
// //         <div>
// //             <Navbar />
// //             {CardComponents}
// //         </div>
// //     )
// // }






// // function Page(){
// //   return(
// //     <>
// //       <Navbar/>
// //       <Main/>
// //     </>
// //   )
// // }
// // export default Page;

// // export default function DigitalBusinessCard(){
// //   return(
// //     <div className="kavya">
// //       <Main/>
// //       <Details/>
// //       <Footer/>
// //     </div>
// //   )
// // }


// // export default function Joke(){
// //   return(
// //     <div>
// //       <h1>hello</h1>
// //       <Jokes setup='hj' punchline='hdja'/>
// //       <hr></hr>
// //       <Jokes punchline='hdja'/>
// //     </div>
// //   )
// // }


