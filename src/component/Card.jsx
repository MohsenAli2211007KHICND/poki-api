import React , {useState} from 'react'
import './Card.css'

export default function Card({pokiInfo}) {
  const [num,setNum]=useState('001')
  const [showData, setShowData] =useState(false);

  

  

  return (
    <>
      <div className='poki-card'>
        <h4>{`${pokiInfo.name}   #${pokiInfo.id}`}</h4>
        <a role={'button'} onClick={()=> setShowData(!showData)}><img src={pokiInfo.sprites.other.home.front_default}></img></a>
        <div>
          {showData ? 
          <ui>
          <li>
              <span>Abilities</span>
              <span>{pokiInfo.abilities[0] ?  pokiInfo.abilities[0].ability.name : ''}</span>
            </li>
            <li>
              <span>Weight</span>
              <span>{pokiInfo.weight}</span>
            </li>
            <li>
              <span>Height</span>
              <span>{pokiInfo.height}</span>
            </li>
          </ui>
          :null}
          
        </div>
      </div>   
    </> 
  )
}
