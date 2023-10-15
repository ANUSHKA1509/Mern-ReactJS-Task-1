import React, { useState, useEffect } from 'react';

function WordCounter() {
    const [text, setText] = useState('');
    const [wordCount, setWordCount] = useState(0);

    const changeHandler = (event) => {
        setText(event.target.value);
    };

    useEffect(() => {
        const words = text.split(' ');
        let wordCount = 0;
        words.forEach((word) => {
            if (word.trim() !== '') {
                wordCount++;
            }
        });
        setWordCount(wordCount);
    }, [text]);

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid #ccc',
        boxShadow: '2px 2px 6px 0px  #ccc',
        padding: '20px',
        borderRadius: '15px',
        width: '30%',
        margin: 'auto'
    };

    const textareaStyle = {
        width: '100%',
        height: '150px',
        padding: '12px 20px',
        boxSizing: 'border-box',
        border: '2px solid #ccc',
        borderRadius: '4px',
        backgroundColor: '#f8f8f8',
        fontSize: '16px',
        resize: 'none'
    };

    const countStyle = {
        color: '#808080'
    };

    return (
      <div>
          <h1 style={{textAlign: "center"}}>ReactJS Task - 1 </h1>
          <br/><br/><br/>
          
          <div style={containerStyle}>
              <h2>Responsive Paragraph Word Counter</h2>
              <textarea style={textareaStyle} value={text} onChange={changeHandler} placeholder='Type something...'></textarea>
              <p style={countStyle}>Word Count: {wordCount}</p>
          </div>
      </div>
    );
}

export default WordCounter;
