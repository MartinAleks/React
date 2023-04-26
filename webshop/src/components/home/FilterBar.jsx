import React from 'react'

function FilterBar( props ) {

    const filterByCategory = (categoryClicked) => {
        const result = props.dbProducts.filter(element => element.category === categoryClicked);
        props.setProducts(result);
    }
    return (
        <div>
             {props.categories.map(element => <button key={element.name} onClick={() => filterByCategory(element.name)}>{element.name}</button>)}
        </div>
    )
}

export default FilterBar