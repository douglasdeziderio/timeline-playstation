import Conteudo1 from "../Conteudo/Conteudo1";
import Conteudo2 from "../Conteudo/Conteudo2";
import Conteudo3 from "../Conteudo/Conteudo3";
import Conteudo4 from "../Conteudo/Conteudo4";
import Conteudo5 from "../Conteudo/Conteudo5";
import styles from "./LinhadoTempo.module.css";
import Ps1 from "../img/ps1.svg";
import Ps2 from "../img/ps2.svg";
import Ps3 from "../img/ps3.svg";
import Ps4 from "../img/ps4.svg";
import Ps5 from "../img/ps5.svg";
import { useState, useEffect } from "react";

function LinhadoTempo({ reset }) {
    const [sumir, setSumir] = useState(null);

    const click = (index) => {
        if (sumir === index) {
            setSumir(null);
        } else {
            setSumir(index);
        }
    };

    useEffect(() => {
        if (reset) {
            setSumir(null);
        }
    }, );

    const textoPS1 = "Conhecido como 'Playstation 1', na verdade se chama PSOne, surgindo por volta de 1994\n  pela Sony. Com o console fazendo estreia no mundo dos games, o PS1 é até hoje um dos\n produtos com maior destaque da Sony até hoje. Dispitando com grandes consoles como\n Nitendo 64 e Sega Saturn. Enfrentando limitação do CD, entre erros e acertos, lançou \ntitulos como: Metal Gear Solid, Driver, Crash e entre outros.";

    const textoPS2 = "O console mais famoso do Brasil, 'PS2' ou Playstation 2 veio para mostra quanto a marca era forte. \n Embora sua mídia, dvd, era fortemente piratiado, isso não abalou a Sony. Os anos 2000 foram \nanos de ouro para os jogadores e para Sony. Sendo um dos consoles mais vendidos da Sony.\n O console trazia gráficos muito bonitos, possibilidade de jogo multiplayer e possibilidade de \nassistir DVD. Grandes titulos marcar essa geração: GTA San Andreas, Shadow of the Colossus,\n Final Fantasy X e entre outros.";

    const textoPS3 = "Sendo o terceiro console da Sony, Playstation 3, infelizmente não teve tão brilho aqui no Brasil. \nPrimeiro devido ao seu preço na época de R$ 7.890, que já é bem assustador hoje, \nainda mais com o sálario mínimo de 2006 que era R$ 350. O segundo era a popularidade \ndo Xbox 360, console concorrente da Microsoft, era mais acessivel e fácil de piratear:\n já que o PS3 colocou a mídia blu-ray em seu console. Apesar da aposta errada da Sony, \no console teve grandes titulos como: God of War 3, Uncharted, Infamous e entre outros.";

    const textoPS4 = "Playstation 4 trouxe a popularidade da marca de volta à fama, ainda caro, mas não tão quanto o PS3.\n Trazendo gráficos de tirar o folego e apenas isso, conseguiu despertar o interesse \nno consumidor no lançamento. Lançado até 3 tipos de modelos: FAT, SLIM e PRO; tentando \ntrazer também desempenho como promessa. Jogos que passaram pelo console: Uncharted 4, \nThe Last of Us: Parte 2, Horizon Zero Dawn e entre outros.";

    const textoPS5 = "Sendo o console da atual geração, Playstation 5, faz as mesmas promessas do seu anterior. E assim como\n o PS4, falho em cumprir: a ideia era trazer jogos em 4k com fluidez na experiência.\n Por mais que o PS5 tenha as mesmas falhas do PS4, a marca ainda continua forte no imaginário\n popular, fazendo o produto ser esgotados na maioria das lojas. Outro negativo, \nembora não afaste os consumidores, são os poucos lançamentos no console. Alguns \ndos poucos são: Spider-man 2, Horizon Forbbiden West, Ratchet & Clank: Rift Apart e entre outros.";

    return (
        <div>
            <div className={styles.mostrar}>
                {sumir === 0 && <Conteudo1 texto={textoPS1} imagem={Ps1} />}
                {sumir === 1 && <Conteudo2 texto={textoPS2} imagem={Ps2} />}
                {sumir === 2 && <Conteudo3 texto={textoPS3} imagem={Ps3} />}
                {sumir === 3 && <Conteudo4 texto={textoPS4} imagem={Ps4} />}
                {sumir === 4 && <Conteudo5 texto={textoPS5} imagem={Ps5} />}
            </div>

            <div className={styles.tempo}>
                <hr className={styles.linha} />
                <div className={styles.tudo}>
                    <span className={styles.ano}>1994</span>
                    <div className={styles.bola} onClick={() => click(0)}></div>
                </div>

                <hr className={styles.linha} />

                <div className={styles.tudo}>
                    <span className={styles.ano}>2000</span>
                    <div className={styles.bola} onClick={() => click(1)}></div>
                </div>

                <hr className={styles.linha} />

                <div className={styles.tudo}>
                    <span className={styles.ano}>2006</span>
                    <div className={styles.bola} onClick={() => click(2)}></div>
                </div>

                <hr className={styles.linha} />

                <div className={styles.tudo}>
                    <span className={styles.ano}>2013</span>
                    <div className={styles.bola} onClick={() => click(3)}></div>
                </div>

                <hr className={styles.linha} />
                
                <div className={styles.tudo}>
                    <span className={styles.ano}>2020</span>
                    <div className={styles.bola} onClick={() => click(4)}></div>
                </div>
                <hr className={styles.linha} />
            </div>
        </div>
    );
}

export default LinhadoTempo;
