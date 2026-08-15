export const useUser: RequestState<User> = () => {
    const [user, setUser] = useState<User | null>(null);
    const [status, setStatus] = useState()
    useEffect(() => {
        setStatus('loading');

        apiFetch('/api/user')
            .then(res => {
                if (!res.ok) {
                    setStatus('error')
                }
                return res.json()
            })
            .then((user) => {
                setUser(() => user);
                setStatus('success')
            })
            .catch(err => {
                setStatus('error')
            })
    }, [])

    return {
        status, data: user
    }
}