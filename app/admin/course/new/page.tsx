import UploadButton from "@/app/components/UploadButton";
import { sql } from "@vercel/postgres";

export const revalidate =0

export default function NewCourse(){
    async function saveCourse(formData: FormData){
        "use server"
        const title = formData.get("title") as string;
        const description = formData.get("description") as string;
        const url = formData.get("url") as string;
        console.log(title,description,url)
    
         await sql `INSERT INTO courses(title, description, url) VALUES ( ${title}, ${description}, ${url} )`;
        
    }

    return (
        <div>
            <h1 className="text-white text-center text-4xl"> Cadastrar Cursos </h1>
            <form>
                <input type="text" name="title" placeholder="Digite o Título do Curso"/><br/>
                <input type="text" name="description" placeholder="Digite a Descrição do Curso"/><br/>
                <input type="text" name="url" placeholder="Digite a URL da Imagem"/><br/>
                <UploadButton />
                <button formAction={saveCourse} className="text-white"> Salvar </button>
            </form>
        </div>
    )
}