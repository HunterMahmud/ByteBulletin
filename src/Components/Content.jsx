import React from 'react';
import HTMLParser from '../Utils/HTMLParser';
import { useLoaderData } from 'react-router-dom';

const Content = () => {
    const data = useLoaderData();
    const {body_html} = data;
   // console.log(data);
    return (
        <div className="mx-auto">
        <HTMLParser htmlString={body_html} />
      </div>
    );
};

export default Content;