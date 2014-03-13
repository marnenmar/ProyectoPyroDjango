from django.db import models

class Estudiante(models.Model):
	username = models.CharField(max_length=140, unique=True)
	nombre = models.CharField(max_length=140)
	apellidos = models.CharField(max_length=140)
	bio = models.TextField(null=True)
	fecha_nac = models.DateField(blank = True, null = True)
	email = models.EmailField(blank=True, null=True)
