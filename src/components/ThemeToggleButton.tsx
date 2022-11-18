import React, { useEffect, useState } from 'react'
import { IoSunny, IoMoon } from 'react-icons/io5/index.js'

const themes = ['light', 'dark']

export default function ThemeToggle() {
    const [isMounted, setIsMounted] = useState(false)
    const [theme, setTheme] = useState(() => {
        if (import.meta.env.SSR) {
            return undefined
        }
        if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
            return localStorage.getItem('theme')
        }
        if (window.matchMedia('(prefers-color-scheme:dark)').matches) {
            return 'dark'
        }
        return 'light'
    })
    const [icon, setIcon] = useState(() => { theme === 'light' ? 'IoSunny' : 'IoMoon' })

    const toggleTheme = () => {
        const t = theme === 'light' ? 'dark' : 'light'
        localStorage.setItem('theme', t)
        setTheme(t)
        setIcon(() => { t === 'light' ? 'IoSunny' : 'IoMoon' })
    }

    useEffect(() => {
        const root = document.documentElement
        if (theme === 'light') {
            root.classList.remove('dark')
        } else {
            root.classList.add('dark')
        }
    }, [theme])

    useEffect(() => {
        setIsMounted(true)
    }, [])

    const Icon = theme === 'light' ? <IoSunny size={25} /> : <IoMoon size={25} />

    return isMounted ? (
        <div className='inline-flex items-center p-[1px] rounded-3xl bg-dark-blue dark:bg-light-blue mr-2'>
                    <button
                        className={` cursor-pointer rounded-3xl m-1 `}
                        onClick={toggleTheme}
                        aria-label='theme'
                    >
                        {Icon}
                    </button>
        </div>
    ) : (<div />)
}