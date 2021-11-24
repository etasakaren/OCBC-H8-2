import React, { useEffect, useState } from "react"
import './Articles.css';
import Moment from "moment";
import Articles from './Articles';

interface Articles{
    aTitle:string;
    date:string;
    desc:string;
}

function ArticleDetails(props: Articles) {
    let [readMore, setReadMore] = useState(false);
    
    let onClickReadMore = () => setReadMore(!readMore);

    return (
        <div className="PerArticle" >
            <div className="ArticleTitle">{props.aTitle}</div>
            <div className="ArticleDate">{Moment(props.date).format('MMMM Do YYYY, h:mm a')}</div>
            {readMore === false ? <div className="ArticleLess">
                {props.desc}
            </div> :
                <div className="ArticleMore">
                    {props.desc}
                </div>}
            <button className="button is-info" onClick={onClickReadMore}>{readMore === false ? 'Read More' : 'Read Less'}</button>
            <hr />
        </div>

    );
} export default ArticleDetails;