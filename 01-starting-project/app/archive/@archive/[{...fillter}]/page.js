import NewsList from "@/Components/news-list";
import { getNewsForYear } from "@/lib/news";
import Link from "next/link";

import { getAvailableNewsYears } from "@/lib/news";

export default function FillteredNewsPage({params}){

    const filter = params.fillter;
    
    const selletedYear = filter?.[0];
    const sellectedMonth = filter?.[1];

    let news;

    if (selletedYear && !sellectedMonth){
        news = getNewsForYear(selletedYear);
    }

    let newsContent = <p>No news found for the selected period.</p>

    if (news && news.length > 0){
        newsContent = <NewsList news={news} />
    }

    const links = getAvailableNewsYears();

    return ( 
        <>
        <header id="archive-header">
            <nav>
                <ul>
                    {links.map(link => (
                        <li key={link}>    
                            <Link href={`/archive/${link}`}>
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
        {newsContent}
        </>
    );
}