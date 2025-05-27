import Link from "next/link"

export default function MainHeader(){

    return (
        <>
            <Link href="/">Home</Link><br/>
            <Link href="/news">news</Link>
        </>
    )

}