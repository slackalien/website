import * as React from "react"
import ExternalIcon from "../icons/external-icon"

type Props = {
  children: React.ReactNode
  href: string
  icon?: boolean
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

const ExternalLink = ({ children, icon = true, ...props }: Props) => {
  return (
    <a {...props} target="_blank" rel="noopener noreferrer">
      {children}
      {icon && <ExternalIcon style={{ margin: "-2px 5px 0 5px" }} size={16} />}
    </a>
  )
}

export default ExternalLink
