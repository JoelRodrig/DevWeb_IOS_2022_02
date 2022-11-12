import PropTypes from 'prop-types';


const Header = () => {
    return (
        <section className='header'>
            <h2>Site em construção</h2>
        </section>
    )
}


Header.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Header;