import React from 'react';

function HTMLParser({ htmlString }) {
  return (
    <div dangerouslySetInnerHTML={{ __html: htmlString }} />
  );
}

export default HTMLParser;
