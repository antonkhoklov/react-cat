import React, { useEffect, useState } from 'react';
import styles from './Facts.module.css';
import axios from 'axios';

import FactCard from '../../components/FactCard/FactCard';
import Spinner from '../../components/Spinner/Spinner';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

type FactType = {
  url: string, 
  text: string
}

const Facts = () => {
  
  const [limit, setLimit] = useState<string>("10");
  const [data, setData] = useState<Array<FactType>>([]);
  const [isloading, setIsloading] = useState<boolean>(true);
  const [err, setErr] = useState<string|null>(null);

  const fetchData = async (limit: number) => {
    setIsloading(true);
    try {
      let response = await axios.get(`http://localhost:3001/facts?total=${limit}`);
      if (response.status === 200) {
        setData(response.data);
        setErr(null);
      }
    }
    catch(e) {
      setErr("Please enter an integer between 0 and 100");
    }
    setIsloading(false);
  }

  const updateData = () => {
    try {
      let limit_int = parseInt(limit);
      if (!limit_int || limit_int < 0 || limit_int > 100) {
        throw new Error();
      }
      else {
        fetchData(limit_int);
      }
    }
    catch(e) {
      setErr("Please enter an integer between 0 and 100");
    }
  }

  useEffect(()=>{
    fetchData(10);
  }, [])

  return (
    <div className={styles.root}>
      <div className={styles.input_area}>
        <input className={styles.input} value={limit} onChange={(e)=>{setLimit(e.target.value);}}/>
        <button className={styles.update_btn} onClick={updateData}>Update</button>
      </div>
      
      {isloading ?
        <Spinner/> 
        :
        <>
        {err?
          <ErrorMessage text={err}/>
        :
          <div>
            <div className={styles.images_container}>
              {data?.map((item: FactType, index: number) =>
                <FactCard key={item.url} text={item.text} image={item.url}/>
              )}
            </div>
          </div>
        }
        </>
      }
    </div>
  )
}

export default Facts
