import React, {useState} from 'react';

const DiaryEditor = () => {

    const [state, setState] = useState({
        author: '',
        conts: '',
        emotion: 1,
    });

    /* const [author, setAuthor] = useState('이다미');
    const [conts, setConts] = useState(''); */
    
    const changeState = (e) => {
        console.log(e.target.value);
        console.log(e.target.name);
        
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = () => {
        console.log(state);
        alert('저장');
    };

    return (
        <div className="DiaryEditor">
            <h2>오늘의 일기</h2>
            <div>
                <form>
                    <fieldset>
                        <div>
                            <input name="author" value={state.author} 
                                onChange={changeState}
                            />
                        </div>
                        <div>
                            <textarea name="conts" value={state.conts} 
                                onChange={changeState} 
                            />
                        </div>
                        <div>오늘의 감정점수 :&nbsp;&nbsp; 
                            <select name="emotion" value={state.emotion}
                                onChange={changeState}
                            >
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                            </select>
                        </div>
                        <div>
                            <button onClick={handleSubmit}
                            >저장하기</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    );
}

export default DiaryEditor;