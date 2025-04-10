import Link from "next/link"
import logo from "@/assets/logo.png"
import classes from "@/components/main-header.module.css"

export default function MainHeader() {


    return (
        <header className={classes.header}>
            <Link className={classes.logo} href="/">
                <img src={logo.src} />
                NextLevel Food
            </Link> 
        
            <nav className={classes.nav}>
                <ul>
                <li><Link href="/meals">Meals</Link></li>
                <li><Link href="/community">Foodies Community</Link></li>
                </ul>
            </nav>

        </header>
    )

}