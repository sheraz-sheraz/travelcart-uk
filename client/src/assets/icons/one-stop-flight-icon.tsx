import { SVGProps } from "react"
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const OneStopFlightIcon = ({
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
                d="M9.64 9.49a1.422 1.422 0 1 0-2.012 2.012A1.422 1.422 0 0 0 9.639 9.49Zm2.313 1.71a.948.948 0 1 0 1.341-1.34.948.948 0 0 0-1.341 1.34Zm3.62 0a.948.948 0 1 0 1.341-1.34.948.948 0 0 0-1.34 1.34Zm15.321.034a.948.948 0 1 0 1.341-1.34.948.948 0 0 0-1.34 1.34Zm3.654-.034a.948.948 0 1 0 1.342-1.34.948.948 0 0 0-1.342 1.34Zm-7.302-1.647-1.282-.002-3.319-4.146h-1.442l1.99 4.153-3.355.007-1.151-1.151-.607-.012.69 2.21-.64 2.14.557.015 1.128-1.128 3.381.011-1.993 4.146h1.442l3.303-4.146h1.298c.593 0 1.861-.456 1.861-1.048 0-.593-1.268-1.05-1.86-1.05Z"
            />
            <path
                fill="red"
                d="M39.096 12.456a2.77 2.77 0 1 0 3.919-3.918 2.77 2.77 0 0 0-3.919 3.918Z"
            />
            <path
                fill="#000"
                d="M55.994 9.49a1.422 1.422 0 1 0-2.011 2.012 1.422 1.422 0 0 0 2.011-2.011ZM51 11.478a.943.943 0 0 0 .67-.277.948.948 0 1 0-.67.277ZM47.379 11.478a.943.943 0 0 0 .67-.277.948.948 0 1 0-.67.277Z"
            />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M0 .5h64v21H0z" />
            </clipPath>
        </defs>
    </svg>
)
export default OneStopFlightIcon;
