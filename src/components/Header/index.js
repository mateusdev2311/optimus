import './Header.css';
import Logo from '../../images/mundo.png';

function Header() {
    const opcoes = ['Home', 'Produtos', 'Recursos', 'Sobre nós'];
  return (
    <div className='header'>
      <h1 className='titulo'>OptimusTech</h1>
      <img src={Logo} alt='logo' className='logo'/>
        <div className='menu'>
        {opcoes.map((opcao) => <a href='home'>{opcao}</a>)}
        
        </div>
      <a href='home' className='botao-entrar'>Entrar</a>
      <a href='home' className='botao-cadastrar'>Cadastrar</a>




      </div>
  );
}


export default Header;