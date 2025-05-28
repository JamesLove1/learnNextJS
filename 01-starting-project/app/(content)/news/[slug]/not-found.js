import { notFound } from "next/navigation";

export default function notFoundPage(){
    return (
        <div id="error">
            <h1>Not Found!</h1>
            <p>Unforntunaly we could not find the requested article!</p>
        </div>
        )
}