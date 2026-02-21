import './App.css'
import Header from './Header'
import Library from './pages/Library'

export default function App() {

  return (
    <>
      <Header />
      <section className='flex justify-center'>
        <Library />
      </section>
    </>
  )
}
