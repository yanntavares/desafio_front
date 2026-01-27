type ButtonProps = {
    label: string,
    variant?: 'primary' | 'secondary',
    onClick?: () => void,
};

export function Button( { label, variant = 'primary', onClick } : ButtonProps ) {
    const styles = {
        primary: 'bg-blue-400 text-white hover:bg-blue-500',
        secondary: 'bg-white text-blue-600'
    }

    return (
        <button 
            className={ `w-32 px-4 py-2 rounded-lg transition ${styles[variant]}` }
            onClick={onClick}
        >
            { label }
        </button>
    )
};  