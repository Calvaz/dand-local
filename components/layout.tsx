import Header from './header';

export default function Layout (props: any){
    
    const layoutStyle = {
        margin: 20,
        padding: 20,
        border: '1px solid #DDD'
    };

    return (
        <div style={layoutStyle} >
            <Header />
            {props.children}
        </div >
    )
};

