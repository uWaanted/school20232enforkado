export default function Courses() {
    return (
        <main className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="md:col-span-2 lg:col-span-3 mt-4 text-white text-center">
                <h2 id="cursos">
                    CONHEÇA NOSSOS <span>CURSOS</span>
                </h2>
            </div>
            <div className="bg-[#4d4d4d] rounded-md pb-2">
                <a href="/curso_html.html">
                    <img className="hover:scale-105" src="/img/html.svg" alt="" />
                    <div className="text-white text-center">
                        <h3>Curso de HTML</h3>
                        <p>O curso é realizado por profissionais..</p>
                    </div>
                </a>
            </div>
            <div className="bg-[#4d4d4d] rounded-md pb-2">
                <a href="/curso_css.html">
                    <img src="/img/css.svg" alt="" />
                    <div className="text-white text-center">
                        <h3>Curso de CSS</h3>
                        <p>O curso é realizado por profissionais..</p>
                    </div>
                </a>
            </div>
            <div className="bg-[#4d4d4d] rounded-md pb-2">
                <a href="/curso_js.html">
                    <img src="/img/js.svg" alt="" />
                    <div className="text-white text-center">
                        <h3>Curso de JS</h3>
                        <p>O curso é realizado por profissionais..</p>
                    </div>
                </a>
            </div>
            <div className="bg-[#4d4d4d] rounded-md pb-2">
                <a href="/curso_html.html">
                    <img src="/img/design.svg" alt="" />
                    <div className="text-white text-center">
                        <h3>Curso de DESIGN</h3>
                        <p>O curso é realizado por profissionais..</p>
                    </div>
                </a>
            </div>
            <div className="bg-[#4d4d4d] rounded-md pb-2">
                <a href="/curso_html.html">
                    <img src="/img/games.svg" alt="" />
                    <div className="text-white text-center">
                        <h3>Curso de GAMES</h3>
                        <p>O curso é realizado por profissionais..</p>
                    </div>
                </a>
            </div>
            <div className="bg-[#4d4d4d] rounded-md pb-2">
                <a href="/curso_html.html">
                    <img src="/img/robot.svg" alt="" />
                    <div className="text-white text-center">
                        <h3>Curso de ROBÓTICA</h3>
                        <p>O curso é realizado por profissionais..</p>
                    </div>
                </a>
            </div>
        </main>

    )
}