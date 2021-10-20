import React from 'react';

function Hello({ color, name, isSpecial }) {
    return (
        <div
            style={{
                color,
            }}
        >
            {isSpecial && <b>*</b>}
            안녕XD {name}
        </div>
    );
}

Hello.defaultProps = {
    name: 'noname',
};

export default Hello;
