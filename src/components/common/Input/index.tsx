import {InputProps} from "@/types";

const CommonInput = ({
    label,
    inputType,
    className,
    placeholder,
    value,
    onChange,
    error,
}: InputProps) => {
    return (
        <div className="flex flex-col gap-1">
            <label className="text-label-medium select-none">{label}</label>
            <input type={inputType} className={className} placeholder={placeholder} value={value} onChange={onChange} />
            {error && <p className="text-red-500 text-caption-medium font-medium">{error}</p>}
        </div>
    )
}

export default CommonInput;