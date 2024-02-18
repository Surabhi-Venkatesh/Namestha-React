// const heading = React.createElement("h1",{id: "venki"},"ADITYA") // To create an element

const nested = React.createElement("div",{id : "Parent"}, 
[ React.createElement("div",{id : "child"}, 
[React.createElement("h1",{id : "h1"},"I'm h1 tag"), React.createElement("h2",{id : "h2"},"I'm h2 tag")]),              React.createElement("div",{id : "child"}, 
[React.createElement("h1",{id : "h1"},"I'm h1 tag"), React.createElement("h2",{id : "h2"},"I'm h2 tag")])]
) // To create nested elements


const root = ReactDOM.createRoot(document.getElementById("div"))
root.render(nested)