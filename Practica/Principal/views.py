from django.shortcuts import render
from Principal.models import Alumno
import json
from django.http import HttpResponse, HttpResponseRedirect, Http404

def home(request):
	ctx = {}
	return render(request, 'home.html', ctx)

def alumnos_api(request):
	alumnos = Alumno.objects.all()
	data = list()

	for alumno in alumnos:
		data.append({'nombre': alumno.nombreAlumno, 'matricula': alumno.matricula})

	return HttpResponse(
		json.dumps({alumnos:{'nombre': alumno.nombreAlumno, 'matricula': alumno.matricula}}),
			content_type = "application/json; charset=utf8"
		)