import React from 'react';
import { Button } from 'react-bootstrap' 

function Category({filter, category}) {
    return (
        <div className="buttons">
            {
                category.map((cat, i)=>{
                    return <><Button variant="outline-light" type="button" className="btn-port" onClick={()=> filter(cat)} key={i}>{cat}</Button><br/></>
                })
            }
        </div>
    )
}

export default Category;