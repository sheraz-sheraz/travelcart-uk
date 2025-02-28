import { SVGProps } from "react"
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const TwoStopFlightIcon = ({
    title,
    titleId,
    ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={64}
        height={22}
        fill="none"
        aria-labelledby={titleId}
        {...props}
    >
        {title ? <title id={titleId}>{title}</title> : null}
        <g clipPath="url(#a)">
            <path
                fill="#000"
                d="M2.55 9.464a1.46 1.46 0 1 0-2.064 2.064A1.46 1.46 0 0 0 2.55 9.464Zm2.375 1.755a.973.973 0 1 0 1.377-1.376.973.973 0 0 0-1.377 1.376Zm3.717 0a.973.973 0 1 0 1.377-1.376.973.973 0 0 0-1.377 1.376Zm15.728.034a.973.973 0 1 0 1.377-1.376.973.973 0 0 0-1.377 1.376Zm3.751-.034a.973.973 0 1 0 1.377-1.376.973.973 0 0 0-1.377 1.376Zm-7.496-1.692-1.316-.002-3.407-4.255-1.481-.001 2.042 4.264-3.443.007-1.182-1.182-.623-.012.709 2.268-.656 2.198.57.015 1.159-1.159 3.47.012-2.046 4.257h1.48l3.39-4.257h1.334c.608 0 1.91-.468 1.91-1.076 0-.608-1.302-1.077-1.91-1.077Z"
            />
            <path
                fill="red"
                d="M32.197 12.507a2.844 2.844 0 1 0 4.023-4.022 2.844 2.844 0 0 0-4.023 4.022ZM46.712 12.507a2.844 2.844 0 1 0 4.023-4.022 2.844 2.844 0 0 0-4.023 4.022Z"
            />
            <path
                fill="#000"
                d="M43.324 11.504a.968.968 0 0 0 .688-.285.973.973 0 1 0-.688.285ZM39.607 11.504a.968.968 0 0 0 .689-.285.973.973 0 1 0-.688.285ZM62.968 9.464a1.46 1.46 0 1 0-2.065 2.064 1.46 1.46 0 0 0 2.065-2.064ZM57.84 11.504a.969.969 0 0 0 .973-.973.973.973 0 1 0-.973.973ZM54.123 11.504a.968.968 0 0 0 .688-.285.973.973 0 1 0-.688.285Z"
            />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M0 .5h64v21H0z" />
            </clipPath>
        </defs>
    </svg>
)
export default TwoStopFlightIcon
