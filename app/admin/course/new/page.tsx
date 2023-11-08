export default async function NewCourse(){
    function saveCourse(){
        console.log("Acessou a função.")
    }
    
    return (
        <div>
            <h1 className="text-white text-center text-4xl"> Cadastrar Cursos </h1>
            <form>
                <input type="text" name="title" placeholder="Digite o Título do Curso"/><br/>
                <input type="text" name="description" placeholder="Digite a Descrição do Curso"/><br/>
                <input type="text" name="url" placeholder="Digite a URL da Imagem"/><br/>
                <button formAction={saveCourse} className="text-white"> Salvar </button>
            </form>
        </div>
    )
}