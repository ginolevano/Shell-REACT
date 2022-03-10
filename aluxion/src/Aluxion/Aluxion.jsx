
import './Aluxion.scss';

import { useState } from 'react'

 const Aluxion = ({}) =>{

    let [posicion1 , setPosicion1] = useState (0)

    let [ posicion , setPosicion ] = useState (false)

    let [acordeon, setAcordeon] = useState (-1)
    
    let [sub, setSub] = useState(-1)

    let toggle = () =>{
        setPosicion (!posicion)
    }

    let menubg = (valor) =>{
        setAcordeon (valor)
       
    }

    let subMenu = (valor)=>{
        setSub (valor)
    }

    let cadaBtn = (valor) => {
        setPosicion1 (valor)
    }


    let imagen =[
        {src :'/assets/silla_negra.png', alt : 'Silla'},
        {src :'/assets/mesa_negra.png', alt :'Mesa' }
    ]

    let info = [
        {nombre: 'Michael W.Dreeben',
        forniture: 'Shell Dining Chair',
        info :'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, et.'
        },
    
        {nombre: 'Jeaper K.Thomas',
        forniture: 'Dunes Anthrazite Black',
        info :'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
        },
    
    ]

    let btn = [
        {li:'01', title : 'Shell Dining Chair'},
        {li:'02', title : 'Dunes Anthrazite Black'}
    ]

    let menu = [
        {menu:'Collection',    
        },
        {menu:'Design'},
        {menu:'Craftmanship'},
        {menu:'Ethics'},
    ]

    let submenu = [
        {sub:'Furnite'},
        {sub:'Lighting'},
        {sub:'Accesories'},
    ]
    
    let img__bg = [
        {imgBg :'assets/sofa_blanco.png'},
        {imgBg :'assets/silla_negra.png'},
        {imgBg :'assets/mesa_negra.png'},
    ]
     return(
        <div className='aluxion '>

            <div className='aluxion__cont wrapper'>
                    <div className='aluxion__menu'>
                            <div 
                            className={`aluxion__logo ${(posicion)? 'activo' : ''}`}>
                                <h1 className='aluxion__h1'>mater</h1>
                            </div>

                            <div 
                            
                            className={`aluxion__nav ${(posicion)? 'activo' : ''}`}>
                                <ul 
                                onClick={toggle}
                                className={`aluxion__bars ${(posicion)? 'activo' : ''}`
                                }>
                                    <li className='aluxion__line1'></li>
                                    <li className='aluxion__line2'></li>
                                    <li className='aluxion__line3'></li>
                                </ul>

                            </div>

                        

                    </div>
                

                <div className='aluxion__body'>

                    <div className='aluxion__info'>
                        <div className='aluxion__infocont'>

                                {
                                    info.map((valor,i)=>

                                    <div 

                                    key={i}
                                    className={`aluxion__infoall ${(posicion1 == i )? 'activo' : ''}`}
                                    style={ {transform : `translateY(-${posicion1 * 120}%)`} }>
                                        <p className='aluxion__name' > {valor.nombre} </p>
                                        <h2 className= 'aluxion__muebles' > {valor.forniture} </h2>
                                        <p className='aluxion__inf'> {valor.info} </p>
                                    </div>
                                    
                                    )
                                }

                            
                            
                            
                        </div>
                        <div className='aluxion__btncont'>
                            <button className='aluxion__btn'> Product Details</button>

                        </div>
                        
                    </div>


                    <div className='aluxion__img'>
                        {
                            imagen.map((valor,i)=>
                            <img
                            className = {`aluxion__imgs ${(posicion1 == i)? 'activo' : ''}`}
                            style={ {transform : `translateY(-${posicion1 * 100}%)`} }
                            key={i}
                            src={valor.src} alt={valor.alt} />
                            )
                        }                        
                    </div>
                </div>
        
            </div>  
            <footer className='aluxion__footer'>
                <ul className='aluxion__ul wrapper' >
                    {
                        btn.map((valor,i)=>
                        <li 
                        onClick={()=>{cadaBtn(i)}}
                        key={i}
                        className={`aluxion__li ${(posicion1 === i)? 'activo' : ''}`}
                        > {valor.li}
                            <span
                            key={i}
                            className='aluxion__span'
                            > {valor.title} </span>
                        </li>
                        )
                    }
                </ul>

            
            </footer>


            <div className='bg__black '>
                    
                <div 
                
                className={`bg__blackall ${(posicion)? 'activo' : ''}`}>
                    
                    <div className={`bg__cont wrapper ${(posicion)? 'activo' : ''}`}>
                        <div className='bg__blackcont'>

                            <ul className='bg__blackmenu'>
                                
                                {
                                    menu.map((valor,i)=>
                                    <li
                                    onClick={()=>{menubg(i)}}
                                    key={i}
                                    className='bg__menuli'
                                    > {valor.menu}
                                    
                                    {
                                        <ul
                                        className={`bg__submenu ${(acordeon === i)? 'activo' : ''}`}
                                        >
                                            {
                                            submenu.map((valor,i)=>
                                            <li
                                            className='bg__submenuli'
                                            onMouseOver={ ()=>{subMenu(i)}}
                                            onMouseOut={ ()=>{subMenu(-1)}}
                                            key={i}
                                            > {valor.sub} </li>,
                                            
                                            )
                                            }
                                        </ul>
                                    }
                                    
                                    </li>
                                    )
                                }
                            
                                
                            </ul>
                            
                            {/* <div className='fotter__all'>
                                
                                <ul className='fotter__bg'>
                                    <li className='fotter__li'>about</li>
                                    <li className='fotter__li'>Contact</li>
                                    <li className='fotter__li'>Dealers</li>
                                    
                                </ul>
                                <ul className='fotter__bg'>
                                    <li className='fotter__li'>News</li>
                                    <li className='fotter__li'>Care</li>
                                    <li className='fotter__li'>Press</li>
                                </ul>


                            </div> */}
                            
                        </div>
                        
                        
                        <div className='bg__blackcont bg__imgcont'>

                                {
                                    img__bg.map((valor,i)=>
                                    <div className='bgcont__img'>
                                        <img    
                                    className={`bgblak__img ${(sub == i)? 'activo' : ''}`}
                                    key={i}
                                    src={valor.imgBg} 
                                    alt="img" />
                                    </div>
                                    
                                    )
                                }
                                
                            

                        </div>
                    </div>


                </div>
                    
            </div>

        </div>
    )
}


Aluxion.defaultProps = {}


export default Aluxion