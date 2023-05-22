import { authState } from "@/app/store/atoms";
import axios from "axios";
import { useRecoilState } from "recoil";
import { deleteCookie, getCookie } from "cookies-next";
import { useRouter } from "next/navigation";

interface UserInputs {
  firstName?: string;
  lastName?: string;
  email: string;
  phoneNumber?: string;
  city?: string;
  password: string;
}

const useAuth = () => {
  const router = useRouter();
  const [auth, setAuth] = useRecoilState<{
    loading: boolean;
    data: any;
    error: any;
  }>(authState);

  const signin = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    setAuth({ loading: true, data: null, error: null });
    try {
      const { data } = await axios.post(`/api/auth/signin`, {
        email,
        password,
      });

      setAuth({ loading: false, data, error: null });
    } catch (error: any) {
      setAuth({
        loading: false,
        data: null,
        error: error.response.data.errorMessage,
      });
    }
  };

  const signup = async (userInputs: UserInputs) => {
    setAuth({ loading: true, data: null, error: null });
    try {
      const { data } = await axios.post(`/api/auth/signup`, {
        ...userInputs,
      });

      setAuth({ loading: false, data, error: null });
    } catch (error: any) {
      setAuth({
        loading: false,
        data: null,
        error: error.response.data.errorMessage,
      });
    }
  };

  const fetchUser = async () => {
    setAuth({ loading: true, data: null, error: null });
    try {
      const jwt = getCookie("jwt");
      if (!jwt) {
        return setAuth({ loading: false, data: null, error: null });
      }

      const { data } = await axios.get(`/api/auth/me`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });

      axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
      setAuth({ loading: false, data, error: null });
    } catch (error: any) {
      setAuth({
        loading: false,
        data: null,
        error: error.response.data.errorMessage,
      });
    }
  };

  const signout = async () => {
    try {
      //setAuth to default
      setAuth({ loading: false, data: null, error: null });
      //remove cookies
      deleteCookie("jwt");
      //navigate to home page
      router.push("/");
    } catch (error: any) {
      setAuth({
        loading: false,
        data: null,
        error: error.response.data.errorMessage,
      });
    }
  };

  return {
    signin,
    signup,
    fetchUser,
    signout,
  };
};

export default useAuth;
