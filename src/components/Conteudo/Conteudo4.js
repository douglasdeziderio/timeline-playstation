import styles from "./Conteudo.module.css";

function Conteudo4( {texto, imagem}){
    return(
        <div>
            <div className={styles.quadrado}>
                <div>
                    <span style={{ whiteSpace: "pre-line" }}>{texto}</span>
                </div>

                <div>
                    <img className={styles.imagemPs3} src={imagem} alt="Imagem do PS4" />
                </div>
            </div>
        </div>
    )
}

export default Conteudo4