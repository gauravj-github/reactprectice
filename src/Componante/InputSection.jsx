import "./input.css"
const InputSection = ({text,placeholder}) => {
  return (
    
    <div className="input">
        <input type={text} placeholder={placeholder}/>
    </div>
  )
}

export default InputSection