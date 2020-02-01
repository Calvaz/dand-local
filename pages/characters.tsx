import Layout from '../components/layout'
import Link from 'next/link'
    
const CharacterLink = (props: any) => (    
    <Link href={'/character-detail?character='+props.title}><a>{props.title}</a></Link>
);
export default function Characters() {

    return (
        <Layout>
            <h3>Characters</h3>
            <CharacterLink title="Aramil" />
            <CharacterLink title="Erevan" />
            <CharacterLink title="Rick" />
            <CharacterLink title="Lili" />
            
        </Layout>
    )
}