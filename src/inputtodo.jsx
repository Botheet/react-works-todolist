//import { useEffect, useState } from "react"
import { useState } from "react"
import { Submitbutton } from "./Submitbutton";
import { Todolist } from "./Todolist";
import EditIcon from '@mui/icons-material/Edit';
import { useInputForm } from "./useInputForm";

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

    const onclickDeleteButton = (todoNum)=> {
        //console.log("テスト２")
        const newTodoList = todoList.filter((_,index)=>{return index !== todoNum})
        setTodoList(newTodoList)
        // console.log(newTodoList)
    }
    const handleCompleteClick = (completeIndex)=>{
        const newTodoList =  todoList.map((todo,index)=>{
            return index===completeIndex?{...todo,isComplete:!todo.isComplete}:todo})
        setTodoList(newTodoList)
    }
    //!で反転させる（

             // 空文字または空白文字のみかを判定する関数
    const isBlank = (str) => {
        return !str || /^[ \t\r\n ]*$/.test(str);
    };

    return(
    <>
    <h1>TODOを入れてください</h1>
    <div style={{display:"flex",flexDirection:"row"}}>
    <input placeholder="ToDoを入力" value= {value} onChange={onChangeValue}/>
    <Submitbutton icon={<EditIcon/>} buttonText="ToDoを追加" onClickButton={onClickAddTodo} isDisabled={isBlank(value)} />
    
    </div>

    <Todolist onComplete={handleCompleteClick} todoList={todoList} onDelete={onclickDeleteButton} />
    </>
    )
}