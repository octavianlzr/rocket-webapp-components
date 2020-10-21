import { InputAdornmentProps } from '@material-ui/core/InputAdornment'

export interface PasswordFieldProps extends InputAdornmentProps {

    /**
     * The text to be displayed on tooltip when the user wants to hide the password
     * @default "Hide password"
     */
    hidePasswordText?: string;

    /**
     * The text to be displayed on tooltip when the user wants to show the password
     * @default "Show password text"
     */
    showPasswordText?: string;

    /**
     * Demos:
     * 
     * - https://bit.dev/totalsoft_oss/react-mui/password-field
     * 
     */

}

export default function PasswordField(props: PasswordFieldProps): JSX.Element;