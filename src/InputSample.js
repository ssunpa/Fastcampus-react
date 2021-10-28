import React, { useState, useRef } from 'react';

function InputSample() {
    const [inputs, setInpusts] = useState({
        name: '',
        nickname: '',
    });

    const nameInput = useRef();
    const { name, nickname } = inputs;
    const onChange = (e) => {
        const { name, value } = e.target;
        setInpusts({
            ...inputs,
            [name]: value,
        });
    };

    const onReset = () => {
        setInpusts({
            name: '',
            nickname: '',
        });
        nameInput.current.focus();
    };
    return (
        <div>
            <input
                name="name"
                placeholder="이름"
                onChange={onChange}
                value={name}
                ref={nameInput}
            />
            <input
                name="nickname"
                placeholder="닉네임"
                onChange={onChange}
                value={nickname}
            />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값 :</b>
                {name}({nickname})
            </div>
        </div>
    );
}

export default InputSample;
