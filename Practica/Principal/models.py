from django.db import models

class CentroDeTrabajo(models.Model):
	nombreCentroDeTrabajo = models.CharField(max_length=45)

	def __unicode__(self):
		return self.nombreCentroDeTrabajo

class Carrera(models.Model):
	centroDeTrabajo = models.ForeignKey(CentroDeTrabajo)
	nombreCarrera = models.CharField(max_length=45)
	duracion = models.IntegerField()

	def __unicode__(self):
		return self.nombreCarrera

class Alumno(models.Model):
	matricula = models.BigIntegerField(primary_key=True)
	carrera = models.ForeignKey(Carrera)
	nombreAlumno = models.CharField(max_length=45)
	paternoAlumno = models.CharField(max_length=45)
	maternoAlumno = models.CharField(max_length=45)
	fechaNacimiento = models.DateField()
	calle = models.CharField(max_length=45)
	colonia = models.CharField(max_length=45)
	numero = models.IntegerField()
	codigoPostal = models.BigIntegerField()
	sexo = models.CharField(max_length=1)
	eMail = models.CharField(max_length=45)

	def __unicode__(self):
		return self.nombreAlumno

class Materia(models.Model):
	nombreMateria = models.CharField(max_length=45)
	creditos = models.IntegerField()

	def __unicode__(self):
		return self.nombreMateria

class Examen(models.Model):
	materia = models.ForeignKey(Materia)
	fecha = models.DateField()

	def __unicode__(self):
		return self.fecha

class Calificacion(models.Model):
	examen = models.ForeignKey(Examen)
	matricula = models.ForeignKey(Alumno)
	puntaje = models.FloatField()

	def __unicode__(self):
		return self.puntaje

class Pregunta(models.Model):
	examen = models.ForeignKey(Examen)
	pregunta = models.CharField(max_length=100)

	def __unicode__(self):
		return self.pregunta

class Respuesta(models.Model):
	pregunta = models.ForeignKey(Pregunta)
	respuesta = models.CharField(max_length=100)

	def __unicode__(self):
		return self.respuesta
