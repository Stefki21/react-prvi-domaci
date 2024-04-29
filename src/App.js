import logo from './logo.svg';
import Card from './card';
import './App.css';
import myImage from './images/Jokic.jpg';

function App() {
  return (
    <div className="App">
      <div className='body'>
        <h1>Nikola Jokić</h1>
        <div className='mainUpper'>
      
        <div className='image'>
          <img src={myImage} alt='Nikola Jokić' ></img>
        </div>
        <Card className='firstP'>
          <p style={ {margin: 0}}>
            Nikola Jokić (Sombor, 19. februar 1995) srpski je košarkaš koji igra na poziciji centra, a trenutno nastupa za Denver Nuggets. Dva puta je dobijao nagradu NBA MVP-a, i to za sezone 2020/21 i 2021/22.
          </p>
        </Card>
        <Card className='secondP'>
          <p style={ {margin: 0}}> 
            Karijeru je počeo u Mega Basketu iz Beograda gdje je proveo tri sezone. Izabran je u drugom krugu NBA drafta 2014. kao 41. po redu od strane Denver Nuggetsa sa kojima je u julu 2015. potpisao ugovor.
          </p>
        </Card>
        <Card className='thirdP'>
          <p style={ {margin: 0}}>
            Kao igrač Denvera postavio je mnoge rekorde i zabilježio mnoge značajne rezultate. 
            Jokić je ostvario najbrži tripl-dabl u istoriji NBA lige za samo 14 minuta i 33 sekunde provedenih na terenu. 
            Ujedno je postao evropski košarkaš sa najvećim brojem tripl-dabl mečeva i ušao među 10 najboljih igrača po ovom parametru u istoriji NBA lige. 
            Tri puta je izabran u najbolju petorku NBA lige (2019, 2021 i 2022). 
            Sa seniorskom reprezentacijom Srbije je osvojio srebrnu medalju na Olimpijskim igrama u Riju 2016. godine.
          </p>
        </Card>
      </div>
      </div>
      
    </div>
  );
}

export default App;
