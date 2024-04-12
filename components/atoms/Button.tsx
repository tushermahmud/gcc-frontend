type Props = {
    classes?: string;
    label?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
}

const Button = ({classes,label,onClick,type}:Props) => {
    return (
        <button onClick={onClick} className={`${classes}`} type={type}>
            {label}
        </button>
    )
}
export default Button;