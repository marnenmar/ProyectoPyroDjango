from django.conf.urls import patterns, include, url
from Principal.api import AlumnoResource
from django.contrib import admin

admin.autodiscover()

alumno_resource = AlumnoResource()

urlpatterns = patterns('',
    url(r'^$', 'Principal.views.home', name='home'),
    url(r'^alumnos-api', 'Principal.views.alumnos_api', name='alumnos_api'),
    url(r'^admin/', include(admin.site.urls)),


    url(r'^api/', include(alumno_resource.urls)),
)
