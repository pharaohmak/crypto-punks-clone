import './App.css';
import Header from './components/Header';

import { useState, useEffect } from 'react';
import axios from 'axios';
import PunkList from './components/PunkList';
import Main from './components/Main';

function App() {

  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);

  useEffect(() => {
    function fetchData() {
      const getMyNft = async () => {
        const openseaData = await axios.get(
          'https://testnets-api.opensea.io/assets?asset_contract_address=0x7984a7230540cB30da1E17A25000542eBE9F37f2&order_direction=asc'
        )
        console.log(openseaData.data.assets);

        setSelectedPunk(openseaData.data.assets);
        setPunkListData(openseaData.data.assets);
      }
      return getMyNft();
    }
    fetchData()
  }, []);


  return (

    <div className='app'>
      <Header />


      {punkListData.length > 0 && (
        <>
          <Main
            punkListData={punkListData} />
            selectedPunk={selectedPunk}

          <PunkList
            punkListData={punkListData}
            selectedPunk={selectedPunk}
          />
        </>
      )}

    </div>
  );
}

export default App;