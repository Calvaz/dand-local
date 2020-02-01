import Link from 'next/link'

export default function Header() {

    return (
        <header>
            <h1>DanD</h1>
            <h2>a fully local tabletop roleplay manager</h2>
            <menu>
                <li>
                    <Link href="/">
                        <a>Dashboard</a>
                    </Link>
                </li>
                <li>
                    <Link href="/characters">
                        <a>Characters</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </li>
            </menu>
        </header>
    )
}
