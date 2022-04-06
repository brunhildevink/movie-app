import React from 'react'

export interface SvgProps {
  display: string
  fill: string
  height: number
  title: string
  width: number
}

export interface Props extends SvgProps {
  children: JSX.Element
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

const Star: React.FC<SvgProps> = ({ display, fill, height, title = 'Star', width }) => (
  <Icon display={display} fill={fill} height={height} title={title} viewBox="0 0 28 28" width={width}>
    <path
      d="m14 .692 4.324 8.761 9.668 1.406-6.996 6.819 1.651 9.63L14 22.76l-8.647 4.547 1.65-9.63-6.995-6.82 9.668-1.405L14 .693Z"
      fill={fill}
    />
  </Icon>
)

const Icons = {
  Star,
}

export default Icons
