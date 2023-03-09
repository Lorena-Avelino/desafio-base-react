import './App.css';
import Button from './components/button/button';
import TransformText from './components/transformText/transformText';

function App() {
  return (
    <>
      <TransformText texto='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' color='blueviolet' typeText='uppercase'/>
    
      <Button label="Baixar CV"/>
    </>
  );
}

export default App;
