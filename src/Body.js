import React, { useState, useEffect } from 'react';
import Bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function Body(props) {
    const [items, setitems] = useState([])

    useEffect(() => {
        fetch('https://themealdb.com/api/json/v1/1/filter.php?a=Canadian')
            .then(response => response.json())
            .then(data => { setitems(data.meals) })
    }, [])
    const itemlist = items.map(item => {
        return <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                    <p>{item.strMeal}</p>
                    <img src={item.strMealThumb}></img>
                    <p>{item.idMeal}</p>
                </div>
    })
    return (
        <div>
            <div className="row mt-5">
                {itemlist}
            </div>
        </div>
    );
}
export default Body;
