from tastypie.resources import ModelResource
from tastypie.constants import ALL
from Principal.models import Alumno

class AlumnoResource(ModelResource):
	class Meta:
		queryset = Alumno.objects.all()
		resource_name = 'alumnos'
