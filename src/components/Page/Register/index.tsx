import RegisterForms from "components/core/RegisterForms";
import { useAuth } from "hooks/auth";


const Register = () => {
  const { loggued } = useAuth();
  return (
        <>
          <RegisterForms isLoggued={loggued} />
        </>
  );
};

export default Register;