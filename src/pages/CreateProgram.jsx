import { ProgramForm } from "../components/ProgramForm"
import axios from "axios";

function CreateProgram(){

    return (
        <div className="items-center mx-4 flex flex-col mt-8">
            <h2 className="text-2xl font-bold mb-4">Create a New Programme</h2>
            <ProgramForm/>
        </div>
    )
}
export default CreateProgram; 