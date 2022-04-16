export default function Input({ value, onChange }) {
    return (
        <input
            className="bg-black-200 rounded-lg outline-none p-2 w-3/4"
            type="text"
            onChange={onChange}
            value={value}
        />
    )
}
