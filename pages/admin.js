import { useRouter } from 'next/router';
import Axios from 'axios';
import { useEffect, useState } from 'react';
import { Button } from 'semantic-ui-react';

const Admin = () => {

    const router = useRouter();
    const [isLogin, setIsLogin] = useState(false);

    function checkLogin() {
        Axios.get("/api/isLogin").then((res) => {
            if (res.status === 200 && res.data.name) {
                //로그인
                setIsLogin(true);
            } else {
                //로그인 
                router.push("/login");
            }
        });
    }

    function logout() {
        Axios.get("/api/MyLogout")
            .then(res => {
                if (res.status === 200) {
                    router.push("/");
                }
            })
    }

    useEffect(() => {
        checkLogin();
    }, []);

    return (
        <>admin
            {isLogin && <Button onClick={logout} >Logout</Button>}
        </>
    );
};

export default Admin;