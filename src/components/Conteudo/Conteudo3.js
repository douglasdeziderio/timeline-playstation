import styles from "./Conteudo.module.css";

function Conteudo3( {texto, imagem}){
    return(
        <div>
            <div className={styles.quadrado}>
                <div>
                    <span style={{ whiteSpace: "pre-line" }}>{texto}</span>
                </div>

                <div >
                    <img className={styles.imagemPs3} src={imagem} alt="Imagem do PS3" />
                </div>
            </div>
        </div>
    )
}

export default Conteudo3