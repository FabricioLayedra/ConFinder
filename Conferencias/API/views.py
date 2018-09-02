from django.shortcuts import render
from API.models import Eventos as EventosModel
from API.serializer import EventosSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import viewsets
from django.forms.models import model_to_dict
from rest_framework.decorators import api_view
from rest_framework import viewsets, generics




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
    eventos = EventosModel.objects.all()
    coincidencias = 0
    for evento in eventos:
        topicos = ["artificial intelligence","machine learning","computer vision","digital technology"]
        lista_topicos = evento.topics.split("|")
        print(lista_topicos)
        for topics in lista_topicos:
            if topics in topicos:
                coincidencias = coincidencias +1
        if coincidencias > 0:
            lista_eventos.append(model_to_dict(evento))
    return Response(lista_eventos)

class Eventos_Tags(generics.ListAPIView):
    serializer_class = EventosSerializer

    def get_queryset(self):
        """
        Eventos filtrados por tag
        """
        tag = self.kwargs['tag']
        return EventosModel.objects.filter(topics__contains=tag)
        
class Eventos_Favoritos(generics.ListAPIView):
    serializer_class = EventosSerializer

    def get_queryset(self):
        """
        Endpoint para todos los Eventos Favoritos
        """
        return EventosModel.objects.filter(favoritos=True)

