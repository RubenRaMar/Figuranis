import jwt_decode from "jwt-decode";
import { useCallback } from "react";
import { UserDataStructure } from "../../types";

const useToken = () => {
  const getDecodeToken = useCallback((token: string): UserDataStructure => {
    const decodeToken: { sub: string; name: string } = jwt_decode(token);
    const userData = {
      id: decodeToken.sub,
      username: decodeToken.name,
    };

    return userData;
  }, []);

  return { getDecodeToken };
};

export default useToken;
