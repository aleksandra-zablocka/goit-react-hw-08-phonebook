import RegistrationForm from 'components/RegistrationForm/RegistrationForm'
import { Helmet } from 'react-helmet'

const Registration = () => {
return (
    <div>
        <Helmet>
            <title>Registration</title>
        </Helmet>
        <RegistrationForm/>
    </div>
)
}

export default Registration