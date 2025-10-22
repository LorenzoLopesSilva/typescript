//Boleano
let isActive: boolean = true;
let hasPermission = false;

//Numero
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let floatNumber: number = 3.14;

//String
let color: string = "blue";
let fullName: string = 'Lorenzo Lopes';
let age: number = 19;
let sentence: string = `Olá, meu nome é ${fullName} e eu irei fazer ${age + 1}`;

//any
let v: any = true;
v = "string";
Math.round(v);

//unknown 

//undefined e null
let y: undefined = undefined;
let z: null = null;

//Parametros e propriedades opcionais
function greet(name?: string){
    return `Hello, ${name || 'stranger'}`;
}

//Propridedade opcional em uma interface
interface User{
    name: string;
    age?: number; // Mesma coisa que 'number | undefined'
}