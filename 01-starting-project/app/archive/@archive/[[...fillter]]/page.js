import NewsList from "@/Components/news-list";
import { getNewsForYear } from "@/lib/news";
import Link from "next/link";

import { getAvailableNewsYears, 
    getAvailableNewsMonths,
    getNewsForYearAndMonth } from "@/lib/news";

export default function FillteredNewsPage({params}){

    const filter = params.fillter;

    // console.log(filter);
    
    const selletedYear = filter?.[0];
    const sellectedMonth = filter?.[1];

    let news;
    let links = getAvailableNewsYears();

    if (selletedYear && !sellectedMonth){
        news = getNewsForYear(selletedYear);
        links = getAvailableNewsMonths(selletedYear);
    }

    if (selletedYear && sellectedMonth){
        news = getNewsForYearAndMonth(selletedYear, sellectedMonth);
    }

    let newsContent = <p>No news found for the selected period.</p>

    if (news && news.length > 0){
        newsContent = <NewsList news={news} />
    }

    return ( 
        <>
        <header id="archive-header">
            <nav>
                <ul>
                    {links.map(link => {

                        const href = selletedYear 
                        ? `/archive/${selletedYear}/${link}` 
                        : `/archive/${link}`;

                        return (
                            <li key={link}>    
                                <Link href={href}>
                                    {link}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </header>
        {newsContent}
        </>
    );
}
