import React from "react";
import Book from "./book";

function Library(props) {
    return (
        <div>
            <Book name="React" numOfPage={300} />
            <Book name="Vue" numOfPage={400} />
            <Book name="Angular" numOfPage={500} />
        </div>
    );
}

export default Library;