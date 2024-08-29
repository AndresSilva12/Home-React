import React from 'react';

const Header = () => {
    return (
        <header className='w-full'>
            <nav className='flex items-center justify-between w-full h-20 border-b-2 px-4 bg-custom-gray'>
                <div className="flex items-center">
                    <a href= "#" className="bg-logoAtlas ml-24 mr-11 w-[40px] h-[40px] bg-cover bg-center"></a>
                    <p className='text-white text-lg font-bold'>Atlas | Crombie</p>
                </div>


                <div >
                    <button className="bg-custom-gray text-white rounded-[12px_10px] border border-white px-[30px] py-[10px] hover:bg-white mr-24 hover:text-black hover:cursor-pointer">Ingresar</button>
                </div>
            </nav>
        </header>
    )
}

export default Header;