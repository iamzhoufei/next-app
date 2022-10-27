import { Button, TextField } from '@mui/material'
import { SvgGoogle, SvgLock } from '../components/icons'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from './index.module.scss'
import InfoCardComponent from '../components/InfoCard'

type TCard = {
  id: string;
  backgroundImage: string;
  time: string;
  weather: string;
}

export default function Home() {

  const [cards, setCards] = useState<TCard[]>([]);

  useEffect(() => {
    setCards([
      {
        id: 'bear',
        backgroundImage: '',
        time: '',
        weather: ''
      },
      {
        id: 'rabbit',
        backgroundImage: '',
        time: '',
        weather: ''
      }
    ])
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.cards}>
            <InfoCardComponent />
            {/* <SvgLock /> */}
            <InfoCardComponent />
          </div>
        
          <div className={ styles.utils}></div>
        </div>
        <div className={styles.right}>
          <TextField
            fullWidth
            label=""
            placeholder={`Search Google`}
            InputProps={{
              endAdornment: <SvgGoogle style={{ fontSize: '20px' }} />,
            }}
          />


          <Link href='/detail'>
            <Button variant="contained">Hello World</Button>
          </Link>
        </div>
      </div>
      <div className={styles.footer}>

      </div>
    </div>
  )
}
