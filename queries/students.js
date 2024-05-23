import pool from '../config/db.js';

export const addStudent = async (student) => {
  const query = {
    text: 'INSERT INTO estudiantes (nombre, rut, curso, nivel) VALUES ($1, $2, $3, $4)',
    values: [student.nombre, student.rut, student.curso, student.nivel],
  };
  try {
    const res = await pool.query(query);
    console.log('Estudiante agregado:', res.rowCount);
  } catch (err) {
    console.error('Error al agregar estudiante:', err);
  }
};

export const getStudents = async () => {
  const query = {
    text: 'SELECT * FROM estudiantes',
  };
  try {
    const res = await pool.query(query);
    console.log('Estudiantes registrados:', res.rows);
  } catch (err) {
    console.error('Error al obtener estudiantes:', err);
  }
};

export const getStudentByRut = async (rut) => {
  const query = {
    text: 'SELECT * FROM estudiantes WHERE rut = $1',
    values: [rut],
  };
  try {
    const res = await pool.query(query);
    console.log('Estudiante encontrado:', res.rows);
  } catch (err) {
    console.error('Error al obtener estudiante:', err);
  }
};

export const updateStudent = async (student) => {
  const query = {
    text: 'UPDATE estudiantes SET nombre = $1, curso = $2, nivel = $3 WHERE rut = $4',
    values: [student.nombre, student.curso, student.nivel, student.rut],
  };
  try {
    const res = await pool.query(query);
    console.log('Estudiante actualizado:', res.rowCount);
  } catch (err) {
    console.error('Error al actualizar estudiante:', err);
  }
};

export const deleteStudent = async (rut) => {
  const query = {
    text: 'DELETE FROM estudiantes WHERE rut = $1',
    values: [rut],
  };
  try {
    const res = await pool.query(query);
    console.log('Estudiante eliminado:', res.rowCount);
  } catch (err) {
    console.error('Error al eliminar estudiante:', err);
  }
};
