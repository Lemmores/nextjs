import Link from 'next/link'

import Navbar from '@/components/Navbar'

export default function About(){
    return (
    <>
        <Navbar />
        <h1> Página about </h1>
        <Link href= "/">
            Voltar
        </Link>
    </>
    )
    
}