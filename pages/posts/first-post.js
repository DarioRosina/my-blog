import Head from 'next/head'
import Link from "next/link"
import Image from "next/image"
import Script from "next/script"
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <Layout>
    <Head>
      <title>Primo Post</title>
    </Head>
    <Script
    src="https://connect.facebook.net/en_US/sdk.js"
    strategy='lazyOnload'
    onLoad={()=> console.log(`script caricato correttamente`)}
    />
      <h1>Primo Post</h1>
    <h2><Link href="/" className="myLink">Back Home</Link></h2>
    
    <Image src="/images/fotoProfilo002.jpg" height={144} width={144} alt="profilo"/>
    </Layout>
  )
}