import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CoursePage from "./client/pages/Course";
import Home from "./client/pages/Home/Home";
import Landing from "./client/pages/Landing";
import Chapter from "./client/pages/Landing/course/Chapter";
import { useScroll } from "./utils";



function App() {
    const [scrollToContent, contentRef] = useScroll()

    return (
        <  div className="flex flex-col "
               style={{backgroundColor: "#fbfbfa"}}
        >
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Landing}/>
                    <Route path="/home" component={Home}/>
                    <Route path='/subject/:subject' component={Chapter}/>
                    <Route path='/course' component={CoursePage}/>

                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
