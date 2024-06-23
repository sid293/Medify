import React from 'react'
import Homepage from '../Homepage';
import Offers from '../Offers';
import Specilization from '../Specilization';
import Specialist from '../Specialist';
import PatientCaring from '../PatientCaring';
import News from '../News';
import Families from '../Families';
import Faq from '../Faq';
import Footer from '../Footer'

export default function Dashboard(){

    return(<div>
      <Homepage />
      <Offers />
      <Specilization />
      <Specialist />
      <PatientCaring />
      <News />
      <Families />
      <Faq />
      <Footer />
    </div>)
}