import './Input.css';

interface InputProps {
    label: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
}

const Input = ({ label, type, value, onChange, error }: InputProps) => {
    return (
    <div className="input-wrapper">
        <label className="input-label">{label}</label>
        <input
        className={`input-field ${error ? 'input-error' : ''}`}
        type={type}
        value={value}
        onChange={onChange}
        />
        {error && <span className="input-error-text">{error}</span>}
    </div>
    );
};

export default Input;