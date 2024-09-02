import { useDispatch, useSelector } from "react-redux"
import { fetchCards } from "./redux/slice/CardSlice"
import { useEffect, useState } from "react";
import Pagenation from "./components/Pagenation";
import Cards from "./components/Cards";


export default function App() {
//declear variables
  const dispatch = useDispatch();
  const [allCards, setAllCards] = useState([]);
  const [showCards, setShowCards] = useState([]);
  const [noOfCards, setNoOfCards] = useState(0);
  const [pageNo,setPageNo] =useState(1);
  const state = useSelector((state) => state.card);

// call dispatch first time here

  useEffect(() => {
    dispatch(fetchCards());
  }, [])

  
// take all data for ease to show sex cards only
  useEffect(() => {
    if (state.data.length !== 0) {
      setAllCards(state.data);
      setShowCards(state.data.slice(noOfCards, noOfCards + 6))
    }
  }, [state])
//when page change card must change
  useEffect(() => {
    setShowCards(state.data.slice(noOfCards, noOfCards + 6))
  }, [noOfCards])


  

  return (
 <>
    {
      allCards.length===0 ? 
      // handle loading
      <h1 className="font-bold text-4xl text-center">Loading...</h1> :
      // our components cards and pagenation
       <div className="h-dvh bg-slate-300 p-4">
        {/* card */}
      <Cards showCards={showCards} allCards={allCards} setAllCards={setAllCards} noOfCards={noOfCards} setNoOfCards={setNoOfCards}/>
      {/* pagenantion */}
      <Pagenation noOfCards={noOfCards} setNoOfCards={setNoOfCards} pageNo={pageNo} setPageNo={setPageNo} allCards={allCards}/>
    </div>
    }
   </>
  )
}