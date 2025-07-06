import './nav.css';
interface Props {
  onOpenModal: () => void
}
const Nav = ({ onOpenModal }: Props) => {
  return (
    <nav className="nav">

      <div className='nav-ul'>

        <button className="nav__button-create" onClick={onOpenModal}>Crear +</button>

      </div>
    </nav>
  )
}

export default Nav;