// 01.Template Strings
const name = 'Juan Pablo';
const lastname = 'Lozano';
const fullname = `${name} ${lastname}`;

export function getGreeting(name = 'Diana') {
    return `Hello ${name}`;
}