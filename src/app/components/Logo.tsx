import Image from 'next/image'
import logo from '@/assets/images/logo.png'

export default function Logo() {
    const layout = {
        width: '226px',
        height: '48px',
        top: '72px',
        left: '657px',
        gap: '0px',
        opacity: '0px',

    }
    return (

        <div className="flex items-center gap-2" style={layout}>
            <Image className="w-10" width={100} height={100} src={logo} alt="Logo" /> 
            {/* <span className="text-2xl font-bold">Pokédex</span> */}
        </div>
    )
}