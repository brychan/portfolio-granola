export default function Input({ value, onChange, label }) {
    const aria = label ? label : ''
    return (
        <input
            className="bg-black-200 rounded-lg outline-none p-2 w-3/4"
            type="text"
            aria-label={aria}
            onChange={onChange}
            value={value}
        />
    )
}
