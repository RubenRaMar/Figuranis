import jwt_decode from "jwt-decode";
import { useCallback } from "react";
import { UserTokenStructure } from "../../types";

const useToken = () => {
  const getDecodeToken = useCallback((token: string): UserTokenStructure => {
    const decodeToken: { sub: string; name: string } = jwt_decode(token);
    const userData = {
      id: decodeToken.sub,
      username: decodeToken.name,
      token,
    };

    return userData;
  }, []);

  return { getDecodeToken };
};

export default useToken;
