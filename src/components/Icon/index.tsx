import React from 'react'

export interface SvgProps {
  display: string
  fill: string
  height: number
  title: string
  width: number
}

export interface Props extends SvgProps {
  children: JSX.Element | JSX.Element[]
  viewBox: string
}

const Icon: React.FC<Props> = ({
  children,
  display = 'inline-block',
  fill = 'currentColor',
  height = 20,
  title = 'svg',
  viewBox,
  width = 20,
}) => {
  const style = {
    display,
    fill,
    height,
    lineHeight: 1,
    verticalAlign: 'middle',
    width,
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" style={style} viewBox={viewBox}>
      {title && <title>{title}</title>}
      {children}
    </svg>
  )
}

const ArrowLeft: React.FC<SvgProps> = ({ display, fill, height, title = 'Arrow Left', width }) => (
  <Icon display={display} fill={fill} height={height} title={title} viewBox="0 0 256 256" width={width}>
    <path fill="none" d="M0 0h256v256H0z" />
    <path
      fill="none"
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
      d="M216 128H40M112 56l-72 72 72 72"
    />
  </Icon>
)

const ArrowRight: React.FC<SvgProps> = ({ display, fill, height, title = 'Arrow Left', width }) => (
  <Icon display={display} fill={fill} height={height} title={title} viewBox="0 0 256 256" width={width}>
    <path fill="none" d="M0 0h256v256H0z" />
    <path
      fill="none"
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
      d="M40 128h176M144 56l72 72-72 72"
    />
  </Icon>
)

const Image: React.FC<SvgProps> = ({ display, fill, height, title = 'Image', width }) => (
  <Icon display={display} fill={fill} height={height} title={title} viewBox="0 0 115.19 123.38" width={width}>
    <path
      d="M93.13 79.5c12.05 0 21.82 9.77 21.82 21.82s-9.77 21.82-21.82 21.82-21.82-9.77-21.82-21.82S81.08 79.5 93.13 79.5zM8.08.25h95.28c2.17 0 4.11.89 5.53 2.3a7.828 7.828 0 0 1 2.3 5.53v70.01a28.797 28.797 0 0 0-8.25-4.48V9.98c0-.43-.16-.79-.46-1.05-.26-.26-.66-.46-1.05-.46H9.94c-.43 0-.79.16-1.05.46-.26.26-.46.65-.46 1.05V80h.03l31.97-30.61c1.28-1.18 3.29-1.05 4.44.23.03.03.03.07.07.07l26.88 31.8a29.053 29.053 0 0 0-7.62 19.65c0 3.29.55 6.45 1.55 9.4H8.08c-2.17 0-4.11-.89-5.53-2.3s-2.3-3.39-2.3-5.53V8.08c0-2.17.89-4.11 2.3-5.53S5.94.25 8.08.25zm65.9 79.1 3.71-22.79c.3-1.71 1.91-2.9 3.62-2.6.66.1 1.25.43 1.71.86l17.1 17.97c-2.18-.52-4.44-.79-6.78-.79a28.974 28.974 0 0 0-19.36 7.35zm8-61.16c3.13 0 5.99 1.28 8.03 3.32a11.29 11.29 0 0 1 3.32 8.03c0 3.13-1.28 5.99-3.32 8.03a11.29 11.29 0 0 1-8.03 3.32c-3.13 0-5.99-1.28-8.03-3.32a11.29 11.29 0 0 1-3.32-8.03c0-3.13 1.28-5.99 3.32-8.03 2.07-2.07 4.91-3.32 8.03-3.32zm3.84 69.86 19.96 21.6c1.58-2.39 2.5-5.25 2.5-8.33 0-8.36-6.78-15.14-15.14-15.14-2.66-.01-5.15.67-7.32 1.87zm14.62 26.53-19.96-21.6c-1.58 2.39-2.5 5.25-2.5 8.33 0 8.36 6.78 15.14 15.14 15.14 2.66.01 5.15-.67 7.32-1.87z"
      fillRule="evenodd"
      clipRule="evenodd"
      stroke={fill}
      strokeWidth=".5"
      strokeMiterlimit="2.613"
    />
  </Icon>
)

const Star: React.FC<SvgProps> = ({ display, fill, height, title = 'Star', width }) => (
  <Icon display={display} fill={fill} height={height} title={title} viewBox="0 0 28 28" width={width}>
    <path
      d="m14 .692 4.324 8.761 9.668 1.406-6.996 6.819 1.651 9.63L14 22.76l-8.647 4.547 1.65-9.63-6.995-6.82 9.668-1.405L14 .693Z"
      fill={fill}
    />
  </Icon>
)

const Icons = {
  ArrowLeft,
  ArrowRight,
  Image,
  Star,
}

export default Icons
