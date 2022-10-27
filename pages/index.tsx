import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import styles from './index.module.scss'

export default function Home() {

  return (
    <div className={styles.container}>
      Home
      <Link href='/detail'>按钮</Link>
    </div>
  )
}
