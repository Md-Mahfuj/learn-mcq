import React from "react";
import book from "../../../../assets/images/book.svg"
import {Link, Switch, Route,useParams} from 'react-router-dom';

const Course = (props) => {
    const subject = [
        // {name: "English 1st Paper"},
        // {name: "বাংলা ১ম পত্র"},
        // {name: "বাংলা ২য় পত্র"},
        {name: "ICT"},
        {name: "phaysis"},
        // {name: "রসায়ন"},
        // {name: "সাধারণ গণিত"},
        // {name: "উচ্চতর গণিত"},
        // {name: "জীববিজ্ঞান"},
    ]

    const CourseItem = (props) => {
        return (
            <Link
                to={`subject/${props.name}`}
                className="flex flex-col w-32 mr-4 mb-4 bg-white items-center justify-center rounded-lg shadow-md  cursor-pointer">
                <img className="w-11 h-11 mt-4" src={book}/>
                <h1 className="mt-3 mb-4 font-semibold">{props.name}</h1>
            </Link>
        )
    };
    return (
        <div className="flex-col">
            <h1 className="flex items-center justify-center mt-5 mb-4 text-3xl font-semibold text-center">What would you like to
                learn?</h1>
            <div className="flex mt-10 lg:ml-96 lg:mr-96 items-center justify-center flex-wrap sm:ml-0 sm:mr-0 sm:flex-row">
                {
                    subject.map((item, index) =>
                        <CourseItem
                            name={item.name}
                        />)
                }
            </div>
        </div>
    )
};
export default Course;