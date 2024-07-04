import reactLogo from '../../assets/react-core-concepts.png';
import './Header.css';
const reactDescriptions=['Fundamentals','Crucial','Core'];

function genRandomInt(max)
{
return Math.floor(Math.random()*(max+1));
}

export default function Header()
{
  const decripetion=reactDescriptions[genRandomInt(2)];
  return(<header>
    <img src={reactLogo} />
    <h1>React Essentials</h1>
    <p>
      {decripetion} React concepts you will need for almost any app you are
      going to build!
    </p>
  </header>);
}