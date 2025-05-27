import Link from "next/link";

export default function NewsPage(){

    return (

        <>
            <Link src={"/news/USA-Presidental-Election"} />
            <Link src={"/news/UK Politics"} />
            <Link src={"/news/WildLife"} />
            <Link src={"/news/Buissness"} />
        </>


    )

}