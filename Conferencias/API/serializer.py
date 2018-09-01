from rest_framework import serializers
from API.models import Eventos


class EventosSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Eventos
        fields = '__all__'