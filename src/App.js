import ReactDOM from "react-dom/client";

import {createBrowserRouter, RouterProvider} from "react-router";

import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About"
import Error from "./components/Error"

const AppLayout = () => {
    return(
        <div>
            <Header/>
            <Body/>
        </div>
    );
}

const appRouterConfig = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error/>
    },
    {
        path:"/about",
        element: <About/>
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouterConfig}/>);