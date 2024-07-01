import { Link, Outlet } from "react-router-dom";

export const BookLayout = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/books/1">Book 1</Link>
                </li>
                <li>
                    <Link to="/books/2">Book 2</Link>
                </li>
                <li>
                    <Link to="/books/new">New Book</Link>
                </li>
            </ul>
            {/* 
                Add an <Outlet> component to render nested routes. 
                We can optionally add the context prop to pass data to the nested routes.
            */}
            {/* <Outlet context={{ userId: "123" }} /> */}
            <Outlet />
        </div>
    );
}