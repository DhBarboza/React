import { ButtonHTMLAttributes } from 'react';
import '../styles/button.scss';

// definindo as propriedades que o botão pode receber:
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
export function Button(props: ButtonProps) {
    return (
        <button className="button" {...props}/>
    )
}

<Button type="submit"/>