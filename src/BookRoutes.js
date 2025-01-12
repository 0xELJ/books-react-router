import { Route, Routes } from "react-router-dom";
import { BookLayout } from "./BookLayout";
import { BookList } from "./pages/BookList";
import { Book } from "./pages/Book";
import { NewBook } from "./pages/NewBook";

export const BookRoutes = () => {
    return (
        <>
            <BookLayout />
            <Routes>
                <Route index element={<BookList />} />
                <Route path=":id" element={<Book />} />
                <Route path="new" element={<NewBook />} />
            </Routes>
        </>
    );
}