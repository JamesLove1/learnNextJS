
"use client";
import { useFormState, useFormStatus } from "react-dom";

// import { useActionState } from 'react';

export default function FormSubmit(){

    const status = useFormStatus();
    // const status = useActionState();

    if (status.pending){
        return <p>Creating post...</p>
    }

    return (
        <>
            <button type="reset">Reset</button>
            <button>Create Post</button>
        </>
    )

}