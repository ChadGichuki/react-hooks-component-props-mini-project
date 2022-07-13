import React from "react";

function Article({
    title,
    date="January 1, 1970",
    preview,
    minutes
}) {
    return(
        <article>
            <h3>{ title }</h3>
            <small>{ date }</small>
            {minutes<30 ? <DisplayCoffee minutes={minutes}/> : <DisplayBento minutes={minutes}/>}
            <p>{ preview }</p>
        </article>
    )
}

// Component to display coffee
function DisplayCoffee({minutes}){
    const coffees = Math.ceil(minutes / 5)
    const icon = '☕️'
    return(
        <p>{icon.repeat(coffees)} {minutes} min read.</p>
        )                  
}

// Component to dispaly bentos
function DisplayBento({minutes}){
    const bentos = Math.ceil(minutes /10)
    const icon = '🍱'
    return(
        <p>{icon.repeat(bentos)} {minutes} min read.</p>
        )
}

export default Article