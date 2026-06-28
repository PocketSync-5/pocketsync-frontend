import './Button.css';

interface ButtonProps {
    label: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary';
    loading?: boolean;
}

const Button = ({ label, onClick, variant = 'primary', loading = false }: ButtonProps) => {
    return (
        <button
        className={`btn btn-${variant}`}
        onClick={onClick}
        disabled={loading}
    >
        {loading ? <span className="btn-spinner" /> : label}
    </button>
    );
};

export default Button;