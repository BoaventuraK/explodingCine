import { useState } from "react";
import TextInput from "../componensts/TextInput";

function Forum(){
    const [searchTerm, setSearchTerm] = useState('')

    return(
        <section>
            <h1>Forum</h1>
            <TextInput type="text" placeholder="Search a movie" value={searchTerm}/>
        </section>
    );
}

export default Forum