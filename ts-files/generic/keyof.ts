interface ICompany {
  name: string;
  debts: number;
  departments: Departament;
  managment: {
    owner: string;
  }
}

interface Departament {
  [key: string]: string
}

type CompanyDebtsType = ICompany['debts'];
type CompanyOwnerType = ICompany['managment']['owner'];
type CompanyDepType = ICompany['departments'];

type CompanyKeys = keyof ICompany;
const keys: CompanyKeys = 'name';

function printDebts<T, K extends keyof T, S extends keyof T>( company: T, name: K, debts: S) {
  console.log(`Company ${company[name]}, depts: ${company[debts]}`);
}

const hh:ICompany = {
  name: 'HH',
  debts: 50000,
  departments: {
    sales: 'sales',
    developer: 'dev',
  },
  managment: {
    owner: 'John',
  }
}

printDebts(hh, 'name', 'debts');

type GoogleKeys = keyof typeof hh;
const keys2: GoogleKeys = 'name';
