//import { useEffect, useState } from "react"
import { useState } from "react"
import { Submitbutton } from "./Submitbutton";
import { Todolist } from "./Todolist";
import EditIcon from '@mui/icons-material/Edit';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { useInputForm } from "./useInputForm";

import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

export const InputTodo =()=>{

    const{ value,onChangeValue,setValue } = useInputForm()

    //inputに入力した値を管理するステート
    // const [todoValue, setTodoValue] = useState("") //初期値を空文字に設定
    const [todoList, setTodoList] = useState([])//Todoリストにする配列

    //useEffect(()=>{alert("todoが更新されました")},[todoList]) 
    //レンダリングさせたときに（この場合useState）。
    //[]内は何に依存するか。空だと初回の一回のみ。todoListが更新されるたびにエフェクトが発生する。
    // addTodoList にしてあげたり、 compleしたときに反応させたりできるß

    //ボタンを押したときにtodoを追加するための関数
    const onClickAddTodo =()=>{
        //スプレッド構文で展開後、todoValueを加えた新しい配列を作る
        const newTodoList = [...todoList,{text:value,isComplete:false}] //オブジェクトにした
        //プロパティ名text、タイトル、ディスクリプション、メモ
        setTodoList(newTodoList)
        setValue("") //初期化
    }
    const handleKeyDown = (e) => {
        if (isEnterKey(e) && !isIMEActive(e)) {
            e.preventDefault();
            if (!isBlank(value)) {
                onClickAddTodo();
            }
        }
    };
    
    const isEnterKey = (e) => {
        return e.key === 'Enter';
    };
    
    const isIMEActive = (e) => {
        return e.nativeEvent.isComposing || e.nativeEvent.keyCode === 229;
    };

    const onclickDeleteButton = (todoNum)=> {
        //console.log("テスト２")
        const newTodoList = todoList.filter((_,index)=>{return index !== todoNum})
        setTodoList(newTodoList)
        // console.log(newTodoList)
    }
    const handleCompleteClick = (completeIndex) => {
        const newTodoList = todoList.map((todo, index) => {
            if (index === completeIndex) {
                return {
                    ...todo,
                    isComplete: !todo.isComplete,
                    switchIcon: !todo.isComplete ?<KeyboardReturnIcon/> : <TaskAltIcon/>
                };
            }
            return todo;
        });
        setTodoList(newTodoList);
    };
    
    //!で反転させる（

             // 空文字または空白文字のみかを判定する関数
    const isBlank = (str) => {
        return !str || /^[ \t\r\n ]*$/.test(str);
    };

    return(
    <>
    <h1>TODOを入れてください</h1>
    <>
    <div style={{display:"flex",flexDirection:"row", alignItems: "left", marginBottom: '10px'}}>
    
        <input placeholder="ToDoを入力" 
            value= {value} 
            onChange={onChangeValue}
            onKeyDown={handleKeyDown}
            style={{ width: '80%', marginRight: '10px'  }} 
        />
    </div>
    <span style={{marginLeft:-20 ,marginTop:'10px'}}>
        <Submitbutton 
            icon={<EditIcon/>} 
            buttonText="ToDoを追加" 
            onClickButton={onClickAddTodo} 
            isDisabled={isBlank(value)} 
            
        />
    </span>
    </>


    <Todolist onComplete={handleCompleteClick} todoList={todoList} onDelete={onclickDeleteButton} />
    </>
    )
}