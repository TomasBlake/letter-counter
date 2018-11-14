import React from 'react';

const validationComponent = (props) => {
    
    const textLength = props.textLength;
    let validationText = 'Text is long enough';
    if (textLength < 5) {
        validationText = 'Text is too short'
    }
    
    return(
        <div>
            <p>
                {validationText}
            </p>
        </div>
    );
}

export default validationComponent;