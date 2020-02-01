import { useRouter } from 'next/router';
import Layout from '../components/layout'

const Detail = () =>{ 
    const router = useRouter();

    return (
        <Layout>
            <section>
                <h4>{router.query.character}</h4>
            </section>
        </Layout>
    )
}

export default Detail