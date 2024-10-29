import LogoIcon from '@/assets/logo.svg'
import MenuIcon from '@/assets/icon-menu.svg'
import { Button } from '@/components/Button'

export const Header = () => {
  return <header className='py-4 border border-white/15 md:border-none sticky top-0 z-10'>
    <div className='absolute inset-0 backdrop-blur -z-10 md:hidden'></div>
    <div className="container">
      <div className='relative flex justify-between items-center md:border md:border-white/15 md:p-2.5 md:rounded-xl max-w-2xl mx-auto '>
        <div className='absolute inset-0 backdrop-blur -z-10 hidden md:block'></div>
        <div>
          <div className='border size-10 border-white/15 rounded-lg p-1 flex items-center justify-center'>
            <LogoIcon className='size-8' />
          </div>
        </div>
        <div>
          <nav className='gap-4 text-sm hidden md:flex'>
            <a href="#" className='text-white/70 hover:text-white transition'>Features</a>
            <a href="#" className='text-white/70 hover:text-white transition'>Developer</a>
            <a href="#" className='text-white/70 hover:text-white transition'>Pricing</a>
            <a href="#" className='text-white/70 hover:text-white transition'>Changelog</a>
          </nav>
        </div>
        <div className='flex gap-4 items-center'>
          <Button>Join Waitlist</Button>
          <MenuIcon className='size-8 md:hidden' />
        </div>
      </div>
    </div>
  </header>;
};
