import { addStudent, getStudents, getStudentByRut, updateStudent, deleteStudent } from './queries/students.js';

const [,, command, ...args] = process.argv;

const runCommand = async () => {
  switch (command) {
    case 'agregar':
      const newStudent = {
        nombre: args[0],
        rut: args[1],
        curso: args[2],
        nivel: parseInt(args[3]), 
      };
      await addStudent(newStudent);
      break;
    case 'consultar':
      await getStudentByRut(args[0]);
      break;
    case 'consultar_todos':
      await getStudents();
      break;
    case 'actualizar':
      const updatedStudent = {
        nombre: args[0],
        rut: args[1],
        curso: args[2],
        nivel: parseInt(args[3]), 
      };
      await updateStudent(updatedStudent);
      break;
    case 'eliminar':
      await deleteStudent(args[0]);
      break;
    default:
      console.log('Comando no reconocido');
  }
};

runCommand();
