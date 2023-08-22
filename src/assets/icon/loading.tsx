import * as React from "react"
import { SVGProps } from "react"

const Loading = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={500}
    height={500}
    style={{
      width: "100%",
      height: "100%",
      transform: "translate3d(0,0,0)",
      contentVisibility: "visible",
    }}
    {...props}
  >
    <defs>
      <clipPath id="a">
        <path d="M0 0h500v500H0z" />
      </clipPath>
    </defs>
    <g clipPath="url(#a)">
      <path
        fill="#EC0D0E"
        d="M0-250c137.975 0 250 112.025 250 250S137.975 250 0 250-250 137.975-250 0-137.975-250 0-250z"
        style={{
          display: "block",
        }}
        transform="matrix(.00003 0 0 .00003 400.472 246.243)"
      />
      <path
        fill="#EC0D0E"
        d="M0-250c137.975 0 250 112.025 250 250S137.975 250 0 250-250 137.975-250 0-137.975-250 0-250z"
        style={{
          display: "block",
        }}
        transform="matrix(.02251 0 0 .02251 375.962 241.95)"
      />
      <path
        fill="#EC0D0E"
        d="M0-250c137.975 0 250 112.025 250 250S137.975 250 0 250-250 137.975-250 0-137.975-250 0-250z"
        style={{
          display: "block",
        }}
        transform="matrix(.06203 0 0 .06203 316.787 246.096)"
      />
      <path
        fill="#EC0D0E"
        d="M0-250c137.975 0 250 112.025 250 250S137.975 250 0 250-250 137.975-250 0-137.975-250 0-250z"
        style={{
          display: "block",
        }}
        transform="translate(242.206 262.984) scale(.08211)"
      />
      <path
        fill="#EC0D0E"
        d="M0-250c137.975 0 250 112.025 250 250S137.975 250 0 250-250 137.975-250 0-137.975-250 0-250z"
        style={{
          display: "block",
        }}
        transform="matrix(.05963 0 0 .05963 166.92 270.456)"
      />
      <path
        fill="#EC0D0E"
        d="M0-250c137.975 0 250 112.025 250 250S137.975 250 0 250-250 137.975-250 0-137.975-250 0-250z"
        style={{
          display: "block",
        }}
        transform="matrix(.02011 0 0 .02011 111.144 256.709)"
      />
      <path
        fill="#EC0D0E"
        d="M0-250c137.975 0 250 112.025 250 250S137.975 250 0 250-250 137.975-250 0-137.975-250 0-250z"
        style={{
          display: "block",
        }}
        transform="matrix(0 0 0 0 91.75 246.25)"
      />
    </g>
  </svg>
)
export default Loading
