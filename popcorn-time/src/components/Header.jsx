export default function Header(props) {
    return( 
        <header className="">
    <h1>Welcome to PopCorn-Time</h1>
     <h2>Number of Movies :{props.numberOfMovies}</h2>
     </header>

    )
}