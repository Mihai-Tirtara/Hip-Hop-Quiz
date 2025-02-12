import Question from "./Question"
import Answer from "./Answer"
import { useState } from "react"
export default function Board(){
    return(
        <div class="container mx-auto">
            <div class="">
                <Question/>
                <Answer/>
            </div>
        </div>
    )
}