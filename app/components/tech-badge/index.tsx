type TechBadgeProps = {
  name: string
}

export const TechBadge = ({ name }: TechBadgeProps) => {
  return (
    <span className="text-purple-400 bg-purple-900/80 text-sm py-1 px-3 rounded-lg">
      {name}
    </span>
  )
}
