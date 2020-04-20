import React, {useState } from 'react';
export default (props) => {
    
    const [jumlahMurid, setJumlahMurid] = useState(props.jumlahMurid);
    const [nilaiSiswa, setNilaiSiswa] = useState(90);

    const tambahSiswa = () => {
        setJumlahMurid(jumlahMurid + 1);
    }

    const dropOut = () => {
        setJumlahMurid(jumlahMurid -1 );
    }
    const tambahNilai = () => {
        setNilaiSiswa(nilaiSiswa + 1);
    }
    const kurangNilai = () => {
        setNilaiSiswa(nilaiSiswa - 1);
    }

   

    return (
        <div>
            <div>
                <button onClick={tambahSiswa}>Tambah</button>
                <button onClick={dropOut}>Drop Out</button>
            </div>
            <div>
                jumlah murid : {jumlahMurid}
            </div>
            <div>
                Nilai : 
                <button onClick={tambahNilai}>Tambah</button>
                <button onClick={kurangNilai}>Kurang</button>
            </div>
            <div>
                Nilai siswa adalah {nilaiSiswa}
            </div>
            
        </div>
    )
}

//export default Index ;