import { FaHeart } from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer className="h-14 w-full flex items-center justify-center bg-gray-950">
      <span className="flex items-center gap-1.5 text-xs sm:text-sm font-mono text-gray-400">
        Made by
        <FaHeart className="text-purple-500" size={13} />
        by
        <strong className="font-medium">Dario Reis</strong>
      </span>
    </footer>
  )
}
