import React from 'react'
import ImgPrinc from './ImgPrinc/ImgPrinc'
import TradYMod from './Tradicion/TradYMod'
import HistoriaInc from './HistoriaInicio/HistoriaInc'
import ProdInic from './ProductosInicio/ProdInic'
import NoticiaInicio from './NoticiaInicio/NoticiaInicio'
import Nuevo from './Nuevo/Nuevo'

const Inicio = () => {
  return (
    <div>
        <ImgPrinc/>
        <Nuevo />
        <TradYMod/>
        <HistoriaInc/>
        <ProdInic/>
        <NoticiaInicio/>
   </div>
  )
}

export default Inicio