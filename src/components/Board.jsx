import Question from "./Question"
import Answer from "./Answer"
import { useState } from "react"
export default function Board(){
    return(
        <div className = "container mx-auto">
            <div className = "">
                <Question/>
                <Answer/>
            </div>
        </div>
    )
}