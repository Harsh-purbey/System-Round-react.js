import React from 'react'

const Cards = ({showCards,allCards,setAllCards,noOfCards,setNoOfCards}) => {
    const date = new Date();
    const day =['Sun','Mon','Tue','Wed','Thr','Fri','Sat']
    const month =['Jan','Feb','Mar','April','May','June','July','Aug','Sep','Oct','Nov','Dec']
    const handleDelete = (id)=>{
        const updatedCards = allCards.filter((value)=>value.id!==id)
        setAllCards(updatedCards);
        setNoOfCards(noOfCards+1);
    }

  return (
    <div className='h-[90%]  flex flex-wrap justify-center items-center gap-10 '>
      {
        showCards.map((value, index) => <div key={index} className='rounded h-[45%] bg-slate-100 w-[25%] shadow-xl px-6 py-2'>
           
            <div className=' text-red-700  text-right cursor-pointer' onClick={() =>handleDelete(value.id)}>X</div>
            <h2 className='font-bold'>{value.title}...</h2>
            <p>{value.body.slice(0,50)}...</p>
            <p className='text-gray-500'>{day[date.getDay()]}, {date.getDate()} {month[date.getMonth()]} {date.getFullYear()} {date.getHours()}:{date.getMinutes()} GMT</p>
            <img className='h-[110px] w-[350px] m-1' src="./HireMe.jpeg" alt="HIRE ME"  />
            </div>)
      }
    </div>
  )
}

export default Cards
