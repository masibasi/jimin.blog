import ME from "./me.png";
import "./App.css";
import "./hover.css";
import { Firework } from "./Firework";
import confetti from "canvas-confetti";

function App() {
    const fire = () => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
        });
        var end = Date.now() + 1 * 1000;

        // go Buckeyes!
        var colors = ["#bb0000", "#ffffff"];

        (function frame() {
            confetti({
                particleCount: 2,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: colors,
            });
            confetti({
                particleCount: 2,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: colors,
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        })();
    };

    return (
        <div className="App">
            <header className="App-header">
                <Firework />
                <h1 className="Title">지민 홈피에 오신걸 환영합니다!</h1>
                <div className="ImgWrapper hvr-grow" onClick={fire}>
                    <img src={ME} className="App-logo " alt="logo" />
                </div>
                <p>Hello Everyone!</p>
                업데이트 준비중 ~.~<p className="tip">사진을 눌러보세요</p>
            </header>
        </div>
    );
}

export default App;
