import React, { useEffect, useState, createContext } from 'react';

export const CoronaContext = createContext();

export const CoronaProvider = props => {
    useEffect(() => {
        fetchItems();
    }, []);

    const [data, setData] = useState([]);
    const [news, setNews] = useState([]);

    const fetchItems = () => {
        fetch('/api/data')
            .then(res => res.json())
            .then(final => {
                setData(final);
            });

        fetch('/api/news')
            .then(res => res.json())
            .then(final => {
                setNews(final);
            });
    }

    return (
        <CoronaContext.Provider value={[data, setData, news, setNews]}>
            {props.children}
        </CoronaContext.Provider>
    );
};