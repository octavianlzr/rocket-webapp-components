import { ButtonProps } from '@material-ui/core/Button';

export interface DownwardButtonProps extends Omit<ButtonProps, 'color'> {
    /**
    * The title of button.
    */
    title?: string;
    /**
    * Callback fired when a "click" event is detected.
    */
    onClick?: () => void
    /**
    * If true, the button will be disabled.
    */
    disabled?: boolean
    /**
    * The color of button.
    * @default "themeNoBackground"
    */
    color?: "primary" |
    "info" |
    "theme" |
    "themeNoBackground" |
    "themeWithBackground" |
    "success" |
    "warning" |
    "danger" |
    "rose" |
    "white" |
    "simple" |
    "defaultNoBackground" |
    "primaryNoBackground" |
    "infoNoBackground" |
    "successNoBackground" |
    "warningNoBackground" |
    "dangerNoBackground" |
    "roseNoBackground"
    /**
    * The size of button.
    * @default "medium"
    */
    size?: "medium" | "small"
    /**
    * The fontSize of button's content.
    * @default "default"
    */
    fontSize?: "inherit" | "default" | "small" | "large"
}
/**
 *
 * Demos:
 *
 * - https://bit.dev/totalsoft_oss/react-mui/downward-button
 *
 * 
 */
export default function DownwardButton(props: DownwardButtonProps): JSX.Element;