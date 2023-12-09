import React from 'react';

const Props1 = (props) => {
    const {colorItem} = props
    return (
        <>
        <div style={{color: colorItem}}>
          Item
        </div>
         < p style={{color: colorItem}}>
            Click
         </p>
        </>
    );
};

export default Props1;