import React from 'react';

const Date1 = () => {

    {/* get date today */}
    let date = new Date(Date.now())
    console.log(date)
    
     {/* get year today  */}
     var year = (new Date()).getFullYear();
    console.log(year);
    
     {/* get month today  */}
    let month = (new Date ()).getMonth();
    
    console.log(month)
    var day = (new Date()).getDate();
    console.log(day);
    console.log(`${day}/${month}/${year} `)
  return (
    <div>
      <h1>date</h1>
    </div>
  );
};

export default Date1;

