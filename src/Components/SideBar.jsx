import React from 'react';

const SideBar = ({posts,setData}) => {

    const filterResult = (item) =>{
        if(item==='All'){
            setData(posts)
            return
        }
       const result = posts.filter((currData)=>{
        return currData.category === item
       })
       setData(result)
    }
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h1 className="text-xl font-bold mb-4">Categories</h1>
      <div className="space-y-3">
        <div className="flex items-center">
         
          <button className="text-gray-700"  onClick={(()=>filterResult(`men's clothing`))}>
            Men Clothing
          </button>
        </div>
        <div className="flex items-center">
         
          <button className="text-gray-700"  onClick={(()=>filterResult(`jewelery`))}>
            Jewellery
          </button>
        </div>
        <div className="flex items-center">
          
          <button className="text-gray-700"  onClick={(()=>filterResult(`electronics`))}>
            Electronics
          </button>
        </div>
        <div className="flex items-center">
         
          <button className="text-gray-700"  onClick={(()=>filterResult(`women's clothing`))}>
            Women Clothing
          </button>
         
        </div>
        <div className='flex items-center'>
             <button className="text-gray-700" onClick={(()=>filterResult(`All`))}>
                All
             </button>
          </div>
      </div>
    </div>
  );
};

export default SideBar;
