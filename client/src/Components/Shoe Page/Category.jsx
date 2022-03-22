import React from 'react';
import { Button } from 'react-bootstrap' 

function Category({filter, category}) {
    return (
        <div className="buttons">
            {
                category.map((cat, i)=>{
                    return <Button variant="dark" type="button" className="btn-port" onClick={()=> filter(cat)} key={i}>{cat}</Button>
                })
            }
        </div>
    )
}

export default Category;