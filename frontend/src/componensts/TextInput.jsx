function TextInput(props){
    return (
        <input 
            type={props.type || "text"}
            placeholder={props.placeholder || ""}
            value={props.value || ""}
            onChange={(e) => props.onChange?.(e.target.value)}
         />
    );
}

export default TextInput