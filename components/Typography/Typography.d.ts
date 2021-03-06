import { TypographyProps as BaseProps } from '@material-ui/core/Typography'

export interface TypographyProps extends BaseProps {

    /**
     * If provided, a text will appear on hover
     */
    tooltip?: string;

    /**
     * @default 'inherit' 
    * Applies the theme typography styles.
    
     */
    variant?: 'inherit' |
                'h1' |
                'h2' |
                'h3' |
                'h4' |
                'h5' |
                'h6' |
                'subtitle1' |
                'subtitle2' |
                'body1' |
                'body2' |
                'caption' |
                'button' |
                'overline'

    /**
     * The color of the component
     */
    color?: 'initial' |
            'inherit' |
            'primary' |
            'secondary' |
            'textPrimary' |
            'textSecondary' |
            'error'

    /**
     * Set the text-align on the component.
     */
    align?: 'inherit' |
            'left' |
            'center' |
            'right' |
            'justify'

    /**
     * Demos:
     * 
     * - https://bit.dev/totalsoft_oss/react-mui/typography
     * 
     *  Take a look over the code for further information:https://github.com/osstotalsoft/rocket-webapp-components/blob/develop/components/Typography/Typography.js
     */

}

export default function Typography(props: TypographyProps): JSX.Element;