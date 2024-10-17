import styles from "./Conteudo.module.css";

function Conteudo1( {texto, imagem}){
    return(
        <div>
            <div className={styles.quadrado}>
                <div>
                    <span style={{ whiteSpace: "pre-line" }}>{texto}</span>
                </div>

                <div>
                    <img className={styles.imagem} src={imagem} alt="Imagem do PS1" width="400px" />
                </div>
            </div>
        </div>
    )
}

export default Conteudo1