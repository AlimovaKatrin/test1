export const User = () => {
    const { status, user } = useUser<RequestState | null>()
    return <div>
        <p>firstName: {user.firstName} </p>
        <p>lastName: {user.lastName}</p>
        <p>currency: {user.currency}</p>
    </div>
}