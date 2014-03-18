from django.contrib import admin
from Principal.models import CentroDeTrabajo,Carrera,Alumno,Materia,Examen,Calificacion,Pregunta,Respuesta

# Register your models here.
admin.site.register(Carrera)
admin.site.register(Alumno)
admin.site.register(CentroDeTrabajo)
admin.site.register(Materia)
admin.site.register(Examen)
admin.site.register(Calificacion)
admin.site.register(Pregunta)
admin.site.register(Respuesta)