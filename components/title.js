export default function Title(props){
    return(
        <h1>{props.children}
        <style jsx>
            {`
                h1{
                    margin: 0;
                    font-size: 3rem;
                    text-aling: center; 
                }
            `}
        </style>
        </h1>

    )
}