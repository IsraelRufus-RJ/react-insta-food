const heading = React.createElement("h1", {id:"heading", xyz: "abc"}, "Hello World from react!!!");
console.log("React Element", heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("Root",  root);

// <div id="parent">
//     <div id="child1">
//         <h1>I'm H1 tag</h1>
//         <h2>I'm H2 tag</h2>
//     </div>
//     <div id="child2">
//         <h1>I'm H1 tag</h1>
//         <h2>I'm H2 tag</h2>
//     </div>
// </div>

const parent = React.createElement("div", {id: "parent"}, 
    [React.createElement("div", {id: "child1"}, 
        [
            React.createElement("h1", {}, "I'm H1 Tag."),
            React.createElement("h2", {}, "I'm H2 Tag")
        ]
    ),
    React.createElement("div", {id: "child2"}, 
        [
            React.createElement("h1", {}, "I'm H1 Tag."),
            React.createElement("h2", {}, "I'm H2 Tag")
        ]
    )]
);

root.render(parent);