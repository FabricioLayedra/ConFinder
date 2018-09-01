from django.shortcuts import render
from API.models import Eventos as EventosModel
from API.serializer import EventosSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import viewsets



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

   