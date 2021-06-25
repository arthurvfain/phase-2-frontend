function Home()

{
    return (
        <div style={{backgroundColor:'rgb(243, 202, 67)', height: '100vh'}}>
            <br/>
            <iframe style={{border:'10px solid'}} autoPlay={true} width="560" height="315" src="https://www.youtube.com/embed/rg6CiPI6h2g" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    )
}

export default Home;