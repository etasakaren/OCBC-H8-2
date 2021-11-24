import React, { useEffect, useState } from "react"
import './Articles.css';
import Moment from "moment";
import ArticleDetails from "./ArticleDetails";

function Articles() {
    const [articles, setArticles] = useState([]);
    Moment.locale('en');

    const getArticles = () => {
        fetch('/articles'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                setArticles(myJson)
            });
    }

    useEffect(() => {
        getArticles()
    }, [])


    return (
        <div className="Articles">
            {
                articles && articles.length > 0 && articles.map((element, index) => {
                    return <ArticleDetails key={index} aTitle={element['title']} desc={element['body']} date={element['date']} ></ArticleDetails>
                })
            }
        </div>
    )
}
export default Articles