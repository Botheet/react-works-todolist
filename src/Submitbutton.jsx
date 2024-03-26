import Button from '@mui/material/Button';
export const Submitbutton =(props) => { //ここのpropsは受け取りがわ

    //{buttonText:"todoを追加",onClickButton:onClickAddTodo}このオブジェクトの形式で受け取ってきている
    // 
    const {onClickButton, buttonText="",buttonColor="primary",isDisabled=false,index=null,icon} = props //分割代入。{}内をpropsで展開
//isDisabled→ぼたんを非活性にできる
    return(
        <>
        <Button onClick={()=>{onClickButton(index!==null&&index);
                //console.log("testtset")
                }} //indexがぬるじゃなかったら引数がここに入る
                variant="contained"
                disabled={isDisabled} 
                color={buttonColor}
                endIcon={icon} //propsにiconを追加。→各ボタンにiconを渡せる
                size="small"
                sx={{
                ml:2
                } } //MUIで省略できている。正確にはmargenleft
                >
            {buttonText}</Button>
        </>
    )
}