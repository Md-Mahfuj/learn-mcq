import React from "react";
import {useScroll} from "./utils";
import Landing from "./client/pages/Landing"

function App() {
    const [scrollToContent, contentRef] = useScroll()

    return (
        <div className="flex flex-col items-center justify-center bg-red">
            <Landing/>
        </div>
    );
}

export default App;
