import './Value.css'

function Value(){
const valor = ['400+','100+','20K','500+']
const subtitulo = ['Projetos concluídos','Colaboradores','Downloads','Reviews 5 estrelas']


    return(
        <section className='value'>

            {valor.map((item, index) => (
                    <div key={index} style={valor.card} className='map'>
                    <h2 style={valor.valor} className='numero'>{item}</h2>
                    <h3 style={valor.subtitulo} className='sub'>{subtitulo[index]}</h3>
                 


                    </div>
                ))}
                <div className='map'>
                <p className='text1'>Nós ajudamos a construir mais de<br/> 400 projetos incríveis.</p>
                <p className='text2'>Temos mais de 100 colaboradores<br/> no nosso time que se preocupam<br/> com nossos clientes.</p>
                <p className='text3'>Nossos projetos que estão<br/> disponíveis em lojas já foram<br/> baixados mais de 20.000 vezes.</p>
                <p className='text4'>Estamos orgulhosos de contar com<br/> mais de 500 reviews 5 estrelas<br/> em nossos produtos.</p></div>



        </section>
     


    )

}

export default Value
