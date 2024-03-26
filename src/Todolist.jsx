
import { Submitbutton } from "./Submitbutton"
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import DeleteIcon from '@mui/icons-material/Delete';


export const Todolist =(props) => {
    // todoList = [{text:"inputされた文字列",isCoomplete:false（コンプリートの状態をtureかfalseで判定）}]

    const {todoList , onDelete , onComplete} = props

    // const [isComplete, setIsComplete]  = useState(false) //isComplete falseisComplete

    return(
        <>
        <ul style={{padding: "0", listStyle: "none"}}> 
            {todoList.map((todo,index) => {
                return (
                    <li key={index} style={{display:"flex" , flexDirection:"row", marginBottom: "8px"}}>
                        <span style={{flex: "1", marginRight: "0"}}>
                            {todo.isComplete? 
                                <span style={{textDecoration:"line-through"}}>{todo.text}</span> :
                                <span style={{height:"10px"}}>{todo.text}</span>
                            }
                        </span>
                        <Submitbutton 
                            buttonText="Complete"
                            onClickButton={() => onComplete(index)} 
                            buttonColor="success"
                            icon={todo.switchIcon || <TaskAltIcon/> }
                    />
                        <Submitbutton 
                            buttonText="Delete"
                            onClickButton={() => onDelete(index)} 
                            buttonColor="error"
                            icon={<DeleteIcon/>}
                            
                        />

                    </li>
                );
            })}
        </ul>
        </>
        )
}

// 変更点メモ
// <li> 要素の直下に <div> を使用するのではなく、<li> 要素内で直接コンテンツを配置します。
// マップ関数内で各アイテムに一意のキーを提供します（ここでは index を使用しています）。
// ボタンの onClickButton プロパティに、それぞれの関数とその引数を渡すために無名関数を使用します。
// アイテムのテキストを囲む <span> 要素を使用して、テキストに対して適切なスタイルを適用します。 */}
// 変更点メモ2
// <ul> 要素のスタイルに padding: 0 を適用し、デフォルトのリストの余白を削除します。
// 各 <li> 要素のスタイルに marginBottom: "8px" を適用して、ToDoアイテムの間に適切な行間を設定します。


// <変更前>
//          <ul>
//             {todoList.map((todo,index) =>{
//                 return(
//                 <div key={index} style={{display:"flex" , flexDirection:"row"}}>
//                     {todo.isComplete? 
//                         <li style={{textDecoration:"line-through"}}>{todo.text}</li>:
//                         <li style={{height:"8px"}}>{todo.text}</li>}

//                     <Submitbutton 
//                     buttonText="Delete"
//                     onClickButton={onDelete} 
//                     buttonColor="error"
//                     index={index}
//                     icon={<DeleteIcon/>}
//                     />
//                     <Submitbutton 
//                     buttonText="Complete"
//                     onClickButton={onComplete} 
//                     buttonColor="success"
//                     index={index}
//                     icon={<TaskAltIcon/>}
//                     />
//                 </div>
//             )})
//             }
//         </ul>
