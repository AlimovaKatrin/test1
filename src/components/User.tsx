
export const User = () => {
    const { status, user } = useUser<RequestState | null>()

    if(status === 'loading'){
        return <div>
            Loading
        </div>
    }

    if(status === 'error'){
        return <div>
            Error
        </div>
    }

    return (status === 'success' && user) && <div>
        <p>firstName: {user.firstName} </p>
        <p>lastName: {user.lastName}</p>
        <p>currency: {user.currency}</p>
    </div>
}