import React from "react";

const newsItem = ({ item }) => {
    return (
        <div className="news_item">
            <h3>{item.title}</h3>
            <div>
                <h4> {item.feed} </h4>
            </div>
        </div>
    );
};

export default newsItem;
