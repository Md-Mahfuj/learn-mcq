import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {useScroll} from "./utils";
import Landing from "./client/pages/Landing";
import Chapter from "./client/pages/Landing/course/Chapter";


function App() {
    const [scrollToContent, contentRef] = useScroll()

    return (
        <div className="flex flex-col">
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Landing}/>
                    <Route path='/subject/:subject' component={Chapter}/>

                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
