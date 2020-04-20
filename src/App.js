import React, {useState} from 'react';
import Siswa from './Components/Siswa'
import Sekolah from './Components/Sekolah'



function App() {
  const[jumlahMurid,setJumlahMurid] = useState(0);

  const dataJumlahMurid = (dataJumlahMurid) => {
   setJumlahMurid(jumlahMurid);
  }
  return (
    <div>
      <Siswa dataJumlahMurid  = {dataJumlahMurid} jumlahMurid={jumlahMurid}/>
    
   <Sekolah jumlahMurid = {jumlahMurid}/>
    </div>
  );
}

export default App;
