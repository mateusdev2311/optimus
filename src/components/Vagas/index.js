import './Vagas.css'


function Vagas (){
    return(
        <section className='job-opportunities' >
            <h3 className='job-category'>Design</h3>
            <div className='job'>    
                <h4>Product Designer</h4>
                <p>full-time</p>
                <p>Faixa Salarial: R$7.000</p>
            </div>
            <div className='job'>
                <h4>UX Designer</h4>
                <p>Full-time</p>
                <p>Faixa Salarial: R$6.000</p>
            </div>
            <h3 className='job-category'>Desenvolvimento de Software</h3>
            <div className='job'>
                <h4>Desenvolvedor IOS</h4>
                <p>Full time</p>
                <p>Faixa Salarial: 8.000</p>
            </div>
            <div className='job'>
                <h4>Desenvolvedor Front-end</h4>
                <p>Full time</p>
                <p>Faixa Salarial: 7.000</p>
            </div>
            <div className='job'>
                <h4>Desenvolvedor Back-end</h4>
                <p>Full time</p>
                <p>Faixa Salarial: 8.000</p>
            </div>

            


        </section>
    )
}

export default Vagas