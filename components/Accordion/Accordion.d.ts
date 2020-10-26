export interface AccordionProps {
    /**
    * The index of the active child.
    * @default -1
    */
    active?: number;
    /**
     * The content of accordion.
     */
    content: {
        title: string,
        content: React.ReactNode
    }[];
}
/**
 *
 * Demos:
 *
 * - https://bit.dev/totalsoft_oss/react-mui/accordion
 *
 * - Take a look over the code for further information: https://github.com/osstotalsoft/rocket-webapp-components/blob/develop/components/Accordion/Accordion.js
 */
export default function Accordion(props: AccordionProps): JSX.Element;