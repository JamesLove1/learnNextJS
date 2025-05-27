import NewsList from "@/Components/news-list";
import { getNewsForYear } from "@/lib/news";

export default function FillteredNewsPage({params}){

    const newsYear = params.year;
    const news = getNewsForYear(newsYear)

    console.log(news)
    return ( 
        <NewsList news={news} />
    );
}