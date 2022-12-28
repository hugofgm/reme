
export type InputValueType = undefined | string | number

interface InputProps {
    value: InputValueType
    onChange: (value: InputValueType) => void
}

export const InputModule = ({value, onChange}: InputProps) => {
    return(
        <div>
            <input type="text" value = {value} onChange = {(e) => onChange(e.target.value)} />
        </div>
    )
}