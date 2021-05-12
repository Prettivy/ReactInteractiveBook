function Title(props){
    const {book,chapter} = props
    return (
        <>
            <h1>{book}</h1>
            <h2>{chapter}</h2>
        </>
    )
}

export default Title