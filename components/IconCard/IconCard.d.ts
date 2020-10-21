import { CardProps } from '@material-ui/core/Card';
import { CardContentProps } from '@material-ui/core/CardContent';
import { CardHeaderProps } from '@material-ui/core/CardHeader';

export interface Props {

    /**
     * Icon to be displayed. This property is mandatory
     */
    icon: Object;

    /**
     * The color of the icon that will be displayed
     * @default "theme"
     */
    iconColor?: "orange" |
    "green" |
    "red" |
    "blue" |
    "purple" |
    "rose" |
    "theme"

    /**
     * The title to be displayed. This property can be a string or a component
     * @default ""
     */
    title?: React.ReactNode;

    /**
     * The subtitle to be displayed. This property can be a string or a component
     */
    subtitle?: React.ReactNode;

    /**
     * The content of the card
     */
    content?: React.ReactNode;

    /**
     * The footer to be displayed. This property can be a string or a component
     */
    footer?: React.ReactNode;

    /**
     * If set to true, the background will be transparent
     */
    plain?: boolean;

    /**
     * Override or extend the styles applied to the content of the card
     */
    customCardContentClass?: string;

    /**
     * Override or extend the styles applied to the card
     */
    customCardClass?: string;

    /**
     * Demos:
     * 
     * - https://bit.dev/totalsoft_oss/react-mui/icon-card
     * 
     */
}

export type IconCardProps = Props | CardProps | CardContentProps | CardHeaderProps

export default function IconCard(props: IconCardProps): JSX.Element;