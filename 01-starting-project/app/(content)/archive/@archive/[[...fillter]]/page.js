import NewsList from "@/Components/news-list";
import { getNewsForYear } from "@/lib/news";
import Link from "next/link";

import { 
    getAvailableNewsYears, 
    getAvailableNewsMonths,
    getNewsForYearAndMonth } from "@/lib/news";
import { Suspense } from "react";

async function FilteredNews({year, month}){
    let news; 

    if (year && !month){
        news = await getNewsForYear(year);
    } else if (year && month){
        news = await getNewsForYearAndMonth(year, month);
    }

    let newsContent = <p>No news found for the selected period.</p>

    if (news && news.length > 0){
        newsContent = <NewsList news={news} />
    }

    return newsContent;

}

export default async function FillteredNewsPage({params}){

    const filter = params.fillter;

    // console.log(filter);
    
    const selletedYear = filter?.[0];
    const sellectedMonth = filter?.[1];

    const acailableYears = await getAvailableNewsYears();
    let links = acailableYears;

    if (selletedYear && !sellectedMonth){
        
        links = getAvailableNewsMonths(selletedYear);
    }

    if (selletedYear && sellectedMonth){
        links = [];
    }

    if (
        (selletedYear && !acailableYears.includes(selletedYear)) ||
        (sellectedMonth && !getAvailableNewsMonths(selletedYear).includes(sellectedMonth))
    ){
        throw new Error(`Invalid filter.`)
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
        <Suspense fallback={<p>Loading News...</p>}>
            <FilteredNews year={selletedYear} month={sellectedMonth} />
        </Suspense>
        </>
    );
}
