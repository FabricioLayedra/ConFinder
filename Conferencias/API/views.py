from django.shortcuts import render
from API.models import Eventos as EventosModel
from API.serializer import EventosSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import viewsets
from django.forms.models import model_to_dict
from rest_framework.decorators import api_view


class Eventos(viewsets.ModelViewSet):
    """
    Todos los Eventos
    """
    queryset =  EventosModel.objects.all()
    serializer_class = EventosSerializer
    # def get(self, request, format=None):
    #     E = EventosModel.objects.all()
    #     serializer = EventosSerializer(E, many=True)
    #     return Response(serializer.data)



@api_view(['GET'])
def eventos_de_computacion(request):
	lista_eventos = []
	eventos = Eventos.objects.all()
	for evento in eventos:
		topicos = ["artificial intelligence","machine learning","computer vision","digital technology"]
		lista_topicos = evento.topics.split("|")
		if any(topic in topicos for topico_evento in lista_topicos):
			lista_eventos.append(model_to_dict(evento))
	return Response(lista_eventos)