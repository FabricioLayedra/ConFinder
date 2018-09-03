from django.shortcuts import render
from API.models import Eventos as EventosModel
from API.serializer import EventosSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import viewsets, generics
from datetime import datetime



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

class Eventos_Tags(generics.ListAPIView):
    serializer_class = EventosSerializer

    def get_queryset(self):
        """
        Eventos filtrados por tag
        """
        tag = ' '.join(self.kwargs['tag'].split('_'))
        return EventosModel.objects.filter(topics__contains=tag)
        
class Eventos_Favoritos(generics.ListAPIView):
    serializer_class = EventosSerializer

    def get_queryset(self):
        """
        Endpoint para todos los Eventos Favoritos
        """
        return EventosModel.objects.filter(favoritos=True)

class Eventos_Mes(generics.ListAPIView):
    serializer_class = EventosSerializer

    def get_queryset(self):
        """
        Endpoint para todos los Eventos del mes actual
        """
        currentMonth, currentYear = datetime.now().strftime('%b %Y').split(' ')
        e = EventosModel.objects.filter(start_date__contains=currentYear)
        e = e.filter(start_date__contains=currentMonth)
        return e.order_by('start_date')