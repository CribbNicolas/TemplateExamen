import css from './Layout.module.css'

const Layout = ({children, title}) => {
    return (
        <>
        <header>
            <h1>Frontend 3</h1>
            <h2 className={css.title}>
                {title}
            </h2>
        </header>
        <main>
            {children}
        </main>
        <footer>
            <div>
                <h4>
                    Examen de React
                </h4>
                <h4>
                    Nicolas Cribb
                </h4>
            </div>
            <h4>
                31/05/23
            </h4>
        </footer>
        </>
    )
}

export default Layout