import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {useScroll} from "./utils";
import Landing from "./client/pages/Landing";
import Chapter from "./client/pages/Landing/course/Chapter";
import CoursePage from "./client/pages/Course"


function App() {
    const [scrollToContent, contentRef] = useScroll()

    return (
        <  div className="flex flex-col "
               style={{backgroundColor: "#fbfbfa"}}
        >
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Landing}/>
                    <Route path='/subject/:subject' component={Chapter}/>
                    <Route path='/course' component={CoursePage}/>

                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
