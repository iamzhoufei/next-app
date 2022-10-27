import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import styles from './index.module.scss'

export default function DetailPage() {
  useEffect(() => {
    throw new Error('error')
  }, [])
  return (
    <div className={styles.container}>
      <Head>DetailHeader</Head>
      DetailPage
    </div>
  )
}
