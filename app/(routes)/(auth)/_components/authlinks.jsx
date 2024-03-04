'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const authlinks = ({ href, children }) => {
    const pathname = usePathname()
    return (
        <Link className={`p-3 ${(pathname === href) && 'border-b border-primary'} font-semibold`} href={href}>{children}</Link>
    )
}

export default authlinks