import React from 'react';

function Loop() {
    // Create an array of 100 items
    const allBox = Array.from({ length: 100 });

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {allBox.map(() => (
               <div style={{width:'100px',height:'100px',backgroundColor:'red',margin:'10px'}} className="box">123456789</div>
            ))}
        </div>
    );
}

export default Loop;
