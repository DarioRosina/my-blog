import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link'
import Date from '../components/date';

export default function Home({ allPostsData }) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            
            <section className={utilStyles.headingMd}>
                <p>Ciao, mi chiamo Dario e sono uno sviluppatore software appassionato di tecnologia. Ho una solida esperienza nello sviluppo di applicazioni web.</p>
                <p>Sono costantemente alla ricerca di nuove sfide e mi piace sperimentare con tecnologie innovative.</p>
                <p>Cerco sempre nuove opportunità per crescere sia professionalmente che personalmente. Quando mi impegno in un progetto, lo faccio con passione e dedizione, puntando a ottenere i migliori risultati.</p>
            </section>

            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, date, title }) => (
                    <li className={utilStyles.listItem} key={id}>
                        <Link href={`/posts/${id}`}>{title}</Link>
                        <br />
                        <small className={utilStyles.lightText}>
                            <Date dateString={date} />
                        </small>
                    </li>
                    ))}
                </ul>
            </section>

        </Layout>
    )
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData
        }
    }
}


