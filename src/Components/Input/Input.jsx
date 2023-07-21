import { $Input } from "./styles";
export const Input = ({ text, type, value, name }) => {
    return (
        <$Input required type={type} placeholder={text} value={value} name={name} />
    )
}