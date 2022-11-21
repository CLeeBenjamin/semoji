import LetterForm from "./LetterForm"

const letters = "abcdefghijklmnopqrstuvwxyz".split("")



export default function CreateLanguage() {
    
    return (
        <div> 
            {letters.map(x => { return <LetterForm key={x} letter={x}/> })}
        </div>

    )
}

