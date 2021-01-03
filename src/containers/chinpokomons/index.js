import React from 'react'
import './style.css'


const Chinpocomons = (props) => {

  const list = [
    {
      img: 'https://static.wikia.nocookie.net/spsot/images/f  /ff/Ic_unlock_cpm_roiderat.png/revision/latest/scale-to-width-down/128?cb=20150112020605',
      name: 'Roidrat'
    },
    {
      img: 'https://static.wikia.nocookie.net/spsot/images/8/8d/Ic_unlock_cpm_beetlebot.png/revision/latest/scale-to-width-down/128?cb=20150112020402',
      name: 'Beetlebot'
    },
    {
      img: 'https://static.wikia.nocookie.net/spsot/images/5/5b/Ic_unlock_cpm_gunrilla.png/revision/latest/scale-to-width-down/128?cb=20150112020508',
      name: 'Gunrilla'
    },
    {
      img: 'https://static.wikia.nocookie.net/spsot/images/4/41/Ic_unlock_cpm_derpal.png/revision/latest/scale-to-width-down/128?cb=20150112020406',
      name: 'Poodlesaurus'
    },
    {
      img: 'https://static.wikia.nocookie.net/spsot/images/9/94/Ic_unlock_cpm_pterdaken.png/revision/latest/scale-to-width-down/128?cb=20150112020603',
      name: 'Pterdaken'
    },
    {
      img: 'https://static.wikia.nocookie.net/spsot/images/5/57/Ic_unlock_cpm_fetuswami.png/revision/latest/scale-to-width-down/128?cb=20150112020505',
      name: 'Fetuswami'
    },
    {
      img: 'https://static.wikia.nocookie.net/spsot/images/7/73/Ic_unlock_cpm_shoe.png/revision/latest/scale-to-width-down/128?cb=20150112020641',
      name: 'Shoe'
    },
    {
      img: 'https://static.wikia.nocookie.net/spsot/images/c/cd/Ic_unlock_cpm_donkeytron.png/revision/latest/scale-to-width-down/128?cb=20150112020503',
      name: 'Donkeytron'
    },
    {
      img: 'https://static.wikia.nocookie.net/spsot/images/9/9e/Ic_unlock_cpm_furrycat.png/revision/latest/scale-to-width-down/128?cb=20150112020506',
      name: 'Furrycat'
    },
    {
      img: 'https://static.wikia.nocookie.net/spsot/images/6/6f/Ic_unlock_cpm_stegmata.png/revision/latest/scale-to-width-down/128?cb=20150112020643',
      name: 'Stegmata'
    },
    {
      img: 'https://static.wikia.nocookie.net/spsot/images/a/a1/Ic_unlock_cpm_pengin.png/revision/latest/scale-to-width-down/128?cb=20150112020602',
      name: 'Pengin'
    },
    {
      img: 'https://static.wikia.nocookie.net/spsot/images/e/e6/Ic_unlock_cpm_monkay.png/revision/latest/scale-to-width-down/128?cb=20150112020601',
      name: 'Monkay'
    },
    {
      img: 'https://static.wikia.nocookie.net/spsot/images/2/2a/Ic_unlock_cpm_ccnesme.png/revision/latest/scale-to-width-down/128?cb=20150112020406',
      name: 'Chu-chu Nezumi'
    },
    {
      img: 'https://static.wikia.nocookie.net/spsot/images/b/bf/Ic_unlock_cpm_vamporko.png/revision/latest/scale-to-width-down/128?cb=20150112020644',
      name: 'Vamporko'
    },
    {
      img: 'https://static.wikia.nocookie.net/spsot/images/e/e1/Ic_unlock_cpm_feligor.png/revision/latest/scale-to-width-down/128?cb=20150112020505',
      name: 'Gophermon'
    },
    {
      img: 'https://static.wikia.nocookie.net/spsot/images/c/c1/Ic_unlock_cpm_cosmonewt.png/revision/latest/scale-to-width-down/128?cb=20150112020406',
      name: 'Cosmonewt'
    },
    {
      img: 'https://static.wikia.nocookie.net/spsot/images/9/92/Ic_unlock_cpm_rabbitech.png/revision/latest/scale-to-width-down/128?cb=20150112020604',
      name: 'RabbiTech'
    },
    {
      img: 'https://static.wikia.nocookie.net/spsot/images/6/65/Ic_unlock_cpm_snakat.png/revision/latest/scale-to-width-down/128?cb=20150112020642',
      name: 'Sna-kat'
    },
    {
      img: 'https://static.wikia.nocookie.net/spsot/images/d/d6/Ic_unlock_cpm_accountafish.png/revision/latest/scale-to-width-down/128?cb=20150112020400',
      name: 'Accountafish'
    },
    {
      img: 'https://static.wikia.nocookie.net/spsot/images/6/66/Ic_unlock_cpm_gerbitoad.png/revision/latest/scale-to-width-down/128?cb=20150112020507',
      name: 'Gerbitoad'
    },
    {
      img: 'https://static.wikia.nocookie.net/spsot/images/d/db/Ic_unlock_cpm_biebersaurus.png/revision/latest/scale-to-width-down/128?cb=20150112020404',
      name: 'Biebersaurus'
    },
    {
      img: 'https://static.wikia.nocookie.net/spsot/images/6/68/Ic_unlock_cpm_fatdactyl.png/revision/latest/scale-to-width-down/128?cb=20150112020503',
      name: 'Fatdactyl'
    },
    {
      img: 'https://static.wikia.nocookie.net/spsot/images/4/45/Ic_unlock_cpm_terribovine.png/revision/latest/scale-to-width-down/128?cb=20150112020643',
      name: 'Terribovine'
    },
    {
      img: 'https://static.wikia.nocookie.net/spsot/images/8/81/Ic_unlock_cpm_ferasnarf.png/revision/latest/scale-to-width-down/128?cb=20150112020505',
      name: 'Ferasnarf'
    },
    {
      img: 'https://static.wikia.nocookie.net/spsot/images/c/c8/Ic_unlock_cpm_roostor.png/revision/latest/scale-to-width-down/128?cb=20150112020605',
      name: 'Roo-stor'
    },
    {
      img: 'https://static.wikia.nocookie.net/spsot/images/7/7b/Ic_unlock_cpm_velocirapstar.png/revision/latest/scale-to-width-down/128?cb=20150112020645',
      name: 'Velocirapstar'
    },
    {
      img: 'https://static.wikia.nocookie.net/spsot/images/d/d9/Ic_unlock_cpm_brocorri.png/revision/latest/scale-to-width-down/128?cb=20150112020405',
      name: 'Brocorri'
    },
    {
      img: 'https://static.wikia.nocookie.net/spsot/images/6/66/Ic_unlock_cpm_lambtron.png/revision/latest/scale-to-width-down/128?cb=20150112020601',
      name: 'Lambtron'
    },
    {
      img: 'https://static.wikia.nocookie.net/spsot/images/5/55/Ic_unlock_cpm_flowerpotamus.png/revision/latest/scale-to-width-down/128?cb=20150112020506',
      name: 'Flowerpotamus'
    },
    {
      img: 'https://static.wikia.nocookie.net/spsot/images/2/28/Ic_unlock_cpm_herbil.png/revision/latest/scale-to-width-down/128?cb=20150112020600',
      name: 'Mouse-Tik'
    },
  ]

  return (
    <div className="commonWraperr">
      <div className="listWrapper">
      </div>
      <div className="selectWrapper">
          <p className="questBodyTile" >fykguhirjoeifwhuigyuweh</p>
          <div className="chikimonWrapper">
          <img src={list[0].img}  alt='chinpokomon'>
          </img>
          </div>
        </div>
    </div>
  )
}

export default Chinpocomons