import EmojiOptions from "./EmojiOptions"

const emojis = ["✌","😂","😝","😁","😱","👉","🙌","🍻","🔥","🌈","☀","🎈","🌹","💄","🎀","⚽","🎾",
                "🏁","😡","👿","🐻","🐶","🐬","🐟","🍀","👀","🚗","🍎","💝","💙","👌","❤","😍","😉",
                "😓","😳","💪","💩","🍸","🔑","💖","🌟","🎉","🌺","🎶","👠","🏈","⚾","🏆","👽","💀",
                "🐵","🐮","🐩","🐎","💣","👃","👂","🍓","💘","💜","👊","💋","😘","😜","😵","🙏","👋",
                "🚽","💃","💎","🚀","🌙","🎁","⛄","🌊","⛵","🏀","🎱","💰","👶","👸","🐰","🐷","🐍",
                "🐫","🔫","👄","🚲","🍉","💛","💚"]


export default function LetterForm(props) {
    
    return (
        <form >
        <label htmlFor="cars"> {props.letter}  </label>
        <select name="cars" id="cars">
        {emojis.map(x => { return <EmojiOptions key={x} emoji={x}/> })}
        </select>
    </form>

    )
}