import { Link } from 'react-router-dom';

function MainHeader(): React.JSX.Element {
    return (
    <header>
        <Link to='/'>Logo</Link>
        <Link to='/library'>My Library</Link>
    </header>
    );
}

export default MainHeader;