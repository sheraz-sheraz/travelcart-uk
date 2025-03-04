import { SVGProps } from "react"
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const DirectFlightIcon = ({
    title,
    titleId,
    ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={164}
        height={22}
        fill="none"
        style={{
            fill: "#FFF",
            stroke: "#FFF",
        }}
        aria-labelledby={titleId}
        {...props}
    >
        {title ? <title id={titleId}>{title}</title> : null}
        <g clipPath="url(#a)">
            <path
                fill="#fff"
                d="M49.416 11.584a1.533 1.533 0 1 1-2.168-2.168 1.533 1.533 0 0 1 2.168 2.168ZM16.752 9.416a1.533 1.533 0 1 0-2.168 2.168 1.533 1.533 0 0 0 2.168-2.168Zm2.493 1.843a1.022 1.022 0 1 0 1.445-1.445 1.022 1.022 0 0 0-1.445 1.445Zm3.903 0a1.022 1.022 0 1 0 1.446-1.445 1.022 1.022 0 0 0-1.446 1.445Zm16.512.036a1.022 1.022 0 1 0 1.446-1.445 1.022 1.022 0 0 0-1.446 1.445Zm3.939-.036a1.021 1.021 0 1 0 1.446-1.445 1.021 1.021 0 0 0-1.446 1.445Zm-7.87-1.776-1.382-.002-3.577-4.468h-1.555l2.144 4.476-3.615.007-1.24-1.24-.655-.014.744 2.382-.689 2.307.6.016 1.216-1.216 3.643.012-2.148 4.47h1.555l3.559-4.47h1.4c.638 0 2.005-.49 2.005-1.13 0-.638-1.367-1.13-2.005-1.13Z"
            />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M0 .5h64v21H0z" />
            </clipPath>
        </defs>
    </svg>
)
export default DirectFlightIcon
