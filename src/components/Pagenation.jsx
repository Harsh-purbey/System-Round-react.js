import React, { useEffect } from 'react'

const Pagenation = ({noOfCards ,setNoOfCards, pageNo, setPageNo ,allCards}) => {

    // for handle click 
    
    const handleNext = () => {
        setNoOfCards(noOfCards + 6);
        setPageNo(pageNo+1);
      }

    //   updatepage

    const handlePage = (page) =>{

        setPageNo(page);

        if(page===1){
            setNoOfCards(page);
        }
        else{
            setNoOfCards(page*6-6);
        }
       
    }

    // for showing pagenos upto three

    const threePage = Array.from({length:3},(_,index)=> pageNo + index).filter((value) => value<18)

  return (
    <div className=' text-white mt-4 px-96 flex justify-center gap-6'>
      {
        threePage.map((value,index) =><button className={` rounded-full p-3 ${value===pageNo?' text-black bg-white':'bg-slate-700'} `} key={index} onClick={()=> handlePage(value)}  >{value}</button> )
      }

      {
        pageNo<17 ? <button className='text-slate-700 text-xl font-bold' onClick={() => handleNext()}>{">>"}</button> :""
      }

    </div>
  )
}

export default Pagenation
