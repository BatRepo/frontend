import Cookies from 'universal-cookie';

interface ICookie {
  get(name: string): string;
  set(name: string, value: string): void;
  remove(name: string): void;
}

const cookiesInstance = new Cookies();
const cookies: ICookie = {} as ICookie;

cookies.get = (name: string): string => cookiesInstance.get(name);

cookies.set = (name, value) => cookiesInstance.set(name, value);

cookies.remove = name => cookiesInstance.remove(name);

export default cookies;