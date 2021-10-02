import React, {useState, useEffect} from "react";
import {Link, Switch, Route,useParams} from 'react-router-dom';
import Arrow from "../../../../assets/images/Arrow-icon.svg";
import playIcon from "../../../../assets/images/videoIcon.svg";
import Note from "../../../../assets/images/note.svg";
import Data from "./data";

const Chapter = (props) => {
    const { subject } = useParams();
    const lessons = ['', '', '', ''];
    const data = Data[subject] || []
    const [chapters, setChapters] = useState(data);

    const ChapterItem = ({item}) => {
        const [isExand, setExpand] = useState(false);
        return (
            <div  className="bg-white mb-4 border border-gray-100 rounded-xl">
                <div onClick={()=>{setExpand(!isExand)}} className="flex py-4 items-center bg-white border-b-2 border-gray-100 rounded-xl">
                    {/*<img className="ml-7" src={Arrow}/>*/}
                    <div
                        className="flex ml-7 items-center justify-center w-14 h-14 bg-red-400 bg-opacity-10 rounded-full">
                        <p className="text-lg text-red-400">01</p>
                    </div>
                    <div className="ml-8 flex-1">
                        <p className="text-base text-indigo-900">{item.chapterName}</p>
                        <div className="flex items-center ">
                            <p className="text-sm text-gray-500">6 Videos</p>
                            <div className="ml-3 flex items-center">
                                <div className="w-1 h-1 bg-gray-500 rounded-full"/>
                                <p className="ml-3 text-sm text-gray-500">2 hours</p>
                            </div>
                            {/*<div className="ml-3 flex items-center">*/}
                            {/*    <div className="w-1 h-1 bg-gray-500 rounded-full"/>*/}
                            {/*    <p className="ml-3 text-sm text-gray-500">2 Notes</p>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                    <img className="w-6 h-6 mr-12 cursor-pointer" src={Arrow}/>
                </div>
                {isExand &&
                <div>
                    {item?.lessons.map((item, index) => {
                        return (
                            <LessonItem index={index} item={item}/>
                        )
                    })}
                </div>
                }
            </div>
        )
    };
    const LessonItem = ({item, index}) => {
        return (
            <a onClick={()=>{
                window.open(item.url, '_blank');
            }} className="flex py-1 items-center">
                {/*<img className="w-10 h-10 ml-9" src={index % 2 == 0 ? playIcon : Note}/>*/}
                <div
                    className={`flex-1 py-2 ml-5 border-gray-100  ${(index + 1) !== chapters.length && 'border-b'}`}>
                    <p className="text-sm text-indigo-900">{item.name}</p>
                    {/*<p className="mt-3 text-sm">Questions: 20</p>*/}
                    {/*<p className="mt-3 text-sm">{JSON.stringify(item)}</p>*/}
                </div>
            </a>
        )
    }

    return (
        <div className="flex-col lg:pt-24 lg:px-24 sm:px-0 sm:pt-9">

            {chapters.map((item, index) => {
                return (
                    <ChapterItem item={item} index={index}/>
                )
            })}
        </div>
    )
};

export default Chapter;