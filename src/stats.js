import React from 'react'

const stats=({items})=> {
    const numItems=items.length;
    const numPacked=items.filter((item)=>item.packed).length;
    const percentage=(numPacked/numItems)*100

    if(!items.length)return(
        <p className='foot'>
        <em>
            start adding items to your packing list 
        </em>
        
        </p>
    )


  return (
    <footer className='foot'>
        <em>
            {percentage=== 100
            ? "you got Everything.ready to go!"
       :` you have ${numItems}  items om your list,and you already packed  ${numPacked} items (${percentage}%)`}
          
       </em>
    </footer>
  );
        };


export default stats