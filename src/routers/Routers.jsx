import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Quiz from "../pages/Quiz";
import JobOffers from "../pages/JobOffers";
import FeedBack from "../pages/FeedBack";
import NotFound from "../pages/NotFound";

const Routers = () => {
    return (
        <Routes >
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/quiz" element={<Quiz/>}/>
            <Route path="/joboffers" element={<JobOffers/>}/>
            <Route path="/feedback" element={<FeedBack/>}/>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default Routers;
