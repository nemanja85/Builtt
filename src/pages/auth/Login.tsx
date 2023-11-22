import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { object, string } from 'yup';

type LoginRequest = {
  email: string;
  password: string;
};

const schema = object().shape({
  email: string().required('Email is required.').email('Invalid email address.'),
  password: string().required('Password is required.').min(8, 'Password must be at least 8 characters.'),
});

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginRequest>({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();
  const onSubmit = (data: LoginRequest) => {
    if (data.email == 'admin@admin.com' && data.password == 'admin12345') {
      return navigate('/shop');
    }
  };

  return (
    <div className="flex flex-col justify-center min-h-full px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-xl font-bold leading-6 tracking-tight text-gray-900">Prijavi se na svoj nalog</h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" method="POST" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="email" className="block text-xs leading-3 text-gray-900">
              Email adresa
            </label>
            <div className="mt-2">
              <input
                id="email"
                {...register('email')}
                type="email"
                className="block w-full border-b border-b-gray-400 py-1.5 text-base text-gray-900 placeholder:text-middleGray focus:border-b-middleGray"
              />
              <p className="pt-2 text-base text-red-500 font-weight">{errors.email?.message}</p>
            </div>
          </div>
          <div>
            <label htmlFor="password" className="block text-xs leading-3 text-gray-900">
              Lozinka
            </label>
            <div className="mt-2">
              <input
                id="password"
                {...register('password')}
                type="password"
                className="block w-full border-b border-b-gray-400 py-1.5 text-base text-black placeholder:text-middleGray focus:border-b-middleGray"
              />
              <p className="pt-2 text-base text-red-500 font-weight">{errors.password?.message}</p>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center items-center h-11 rounded-2xl  text-white bg-black py-1.5 text-lg leading-4 hover:text-black hover:bg-white hover:border hover:border-black"
            >
              Prijavi se na nalog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
