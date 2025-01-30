import './Talent.css'
import Team from '../../images/team.png'

function Talent (){
    return(

        <section className='telents'>
            <h1 className='vagas'>Vagas abertas!</h1>
            <h2 className='h2-vagas'>Estamos procurando por talentos</h2>
            <p className='p-vagas'>Somos uma equipe 100% remota com pessoas do Brasil inteiro.</p>
            <img src={Team} alt='Team' className='team'/>
        </section>


        
    )
}

export default Talent