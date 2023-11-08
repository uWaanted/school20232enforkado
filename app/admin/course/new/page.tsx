export default function NewCourse(){
    return (
        <div>
            <h1 className="text-white font-xl"> Cadastrar Cursos </h1>
            <form>
                <input type="text" placeholder="Digite o Título do Curso"/><br/>
                <input type="text" placeholder="Digite a Descrição do Curso"/><br/>
                <input type="text" placeholder="Digite a URL da Imagem"/><br/>
                <button className="text-white"> Salvar </button>
            </form>
        </div>
    )
}