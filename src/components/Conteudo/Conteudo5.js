import styles from "./Conteudo.module.css";

function Conteudo5( {texto, imagem}){
    return(
        <div>
            <div className={styles.quadrado}>
                <div>
                    <span style={{ whiteSpace: "pre-line" }}>{texto}</span>
                </div>

                <div>
                    <img className={styles.imagem} src={imagem} alt="Imagem do PS5" width="400px" />
                </div>
            </div>
        </div>
    )
}

export default Conteudo5