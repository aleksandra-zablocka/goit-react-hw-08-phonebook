import css from './AppBar.module.css'
import { useAuth } from 'hooks/useAuth'
import { Navigation } from 'components/Navigation/Navigation'
import { AuthNav } from 'components/AuthNav/AuthNav'
import { UserMenu } from 'components/UserMenu/UserMenu'

export const AppBar = () => {
    const { isLoggedIn } = useAuth()

    return (
        <header className={css.header}>
            <Navigation/>
            {isLoggedIn ? <UserMenu/> : <AuthNav/>}
        </header>
    )
}