import"./styles.scss"

type fillButtonProps = {
    buttonName:string
}
export const FillXLDefault=({buttonName}:fillButtonProps)=>{
    return (
        <button className="fillXLDefault"><span>{buttonName}</span></button>
    )
}