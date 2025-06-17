import { useNavigate } from 'react-router-dom';

const App = () =>
{
    const navigate = useNavigate();

    return (
        <div style={{ justifyItems: 'center' }}>
            <p style={{ fontSize: '32px', fontWeight: 'bold', cursor: 'pointer' }} onClick={() => navigate('/')}>Διαχείριση Βιβλιοθήκης</p> 
            <br/>
            <button onClick={() => navigate('/books')}>Βιβλία</button>
            <button onClick={() => navigate('/authors')}>Συγγραφέας</button>
            <br/>
            <br/>
        </div>
    );
}

export default App;