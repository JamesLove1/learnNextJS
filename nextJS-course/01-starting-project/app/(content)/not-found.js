import { notFound } from "next/navigation";

export default function notFoundPage(){
    return (
        <div id="error">
            <h1>Not Found!</h1>
            <p>The requested resource could not be found!</p>
        </div>
        )
}