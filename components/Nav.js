import Link from "next/link"

const Nav = () => {
  return (
    <nav>
        <ul>
            <li>
                <Link href='/'> Trang chủ </Link>
            </li>
            <li>
                <Link href='/about'> About </Link>
            </li>
        </ul>
    </nav>
  )
}

export default Nav