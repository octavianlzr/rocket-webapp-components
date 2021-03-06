export interface SaveButtonProps {

    /**
     * The text to be displayed on tooltip
     */
    title?: string;

    /**
     * Callback fired when a "click" event is detected
     * @param {object} event The event source of the callback.
     */
    onClick: (event: React.SyntheticEvent) => void

    /**
     * If set to true, the button will be disabled
     */
    disabled?: boolean

    /**
    * @default "theme"
    * The color of the button
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
    * @default "medium"
    * The size of the button
    */
    size?: "small" |
    "medium"

    /**
    * @default "small"
    * The size of the font
     */
    fontSize?: "inherit" |
    "default" |
    "small" |
    "large"

    /**
    * Demos:
    * 
    * - https://bit.dev/totalsoft_oss/react-mui/save-button
    * 
    *  Take a look over the code for further information:https://github.com/osstotalsoft/rocket-webapp-components/blob/develop/components/SaveButton/SaveButton.js
    */
}

export default function SaveButton(props: SaveButtonProps): JSX.Element;